var express = require('express');
const app = express()
const path = require('path')
const http = require('http').createServer(app);
const formatMessage = require('./backend/helper/formatMessage')
const Users = require('./backend/api/users');

let MAX_USER_COUNT = 100

var io = require('socket.io')(http);

app.get('/user/login/:username', (req, res) => {
    const userCount = Users.getUserCount();
    if (userCount > MAX_USER_COUNT){
        res.send({"message":"user limit has reached, please wait to release slots."})
    }else{
        const existingUser = Users.findUser(req.params["username"])
        if (existingUser){
            res.send({"message":"username is already exist"})
        }else{
            res.send({"message":"username is available"})
        }
    }

});

// When we run the server our public file will also be ran
const publicDirectoryPath = path.join(__dirname, './dist')

app.use(express.static(publicDirectoryPath))



const serverBotName = "pChitChat";

// run when a client connects
io.on('connection', socket => {

        socket.on("JOIN_ROOM", ({username,room})=>{


                const user = Users.addUser(socket.id, username,room);
                socket.join(user.room);
                console.log(` ${user.username} has joined ${user.room} as new connection`)


                // Welcome User
                socket.emit("CONN_COM_OVER",{msgType: "welcome_user",msg:formatMessage(serverBotName,`Hello ${user.username}, Welcome to ${user.room}-pChitChat`)});

                // Broadcast to other users about new joined user
                socket.broadcast.to(user.room).emit("CONN_COM_OVER", {msgType: "new_user",msg:formatMessage(serverBotName,` ${user.username} is joined ${user.room}-pChitChat`)});

                // Send users and room info
                io.to(user.room).emit('CONN_COM_OVER', {msgType: "room_info",msg:{room: user.room,users: Users.getRoomUsers(user.room)}});  
            
        
        });
 
  

    // getting communication messages
    socket.on("CONN_COM", (msg)=>{
        console.log(msg);

    });


    // getting Leave room messages
    socket.on("LEAVE_ROOM", (data)=>{
        // console.log("Leave Room Data")
        // console.log(data)
        const user = Users.removeUser(data.username);
            
            if (user) {
                console.log("user is disconnected",user.username)
                io.to(user.room).emit('ROOM_MESSAGE',formatMessage(serverBotName, `${user.username} has left the chat`));
        
                // Send users and room info
                io.to(user.room).emit('CONN_COM_OVER', {msgType: "room_info",msg:{room: user.room,users: Users.getRoomUsers(user.room)}});  
                socket.disconnect()
                }

    });



    // getting chat messages
    socket.on("ROOM_MESSAGE", (msg)=>{
        const user = Users.getCurrentUser(socket.id);
        // console.log(msg);

        io.to(user.room).emit("ROOM_MESSAGE",formatMessage(user.username,msg));
    });



        socket.on("disconnect", ()=>{
            
            const user = Users.removeUserByID(socket.id);
            
            if (user) {
                console.log("user is disconnected",user.username)
                io.to(user.room).emit('ROOM_MESSAGE',formatMessage(serverBotName, `${user.username} has left the chat`));
        
                // Send users and room info
                io.to(user.room).emit('CONN_COM_OVER', {msgType: "room_info",msg:{room: user.room,users: Users.getRoomUsers(user.room)}});  

                }
        });

})




const port = process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 3000;
http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
