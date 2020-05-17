<template>
  <div id="app" class="container-fluid">
    <NavBar v-if="loginSuccess" v-bind:username="username" v-bind:room="room" :numberOfUsers="numOfUsers" v-on:sign-out="signOut" />
    <ChatRoom v-if="loginSuccess"  :messages="messages" v-on:send-message="sendMessage" :roomUsers="roomUsers"/>
    <LoginForm v-else v-on:post-login="postLogin"/>
    <Footer />
    
  </div>
</template>

<script>
import io from 'socket.io-client';

// const socket = openSocket("http://localhost:3000");

import ChatRoom from './components/ChatRoom'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    ChatRoom,
    LoginForm,
    NavBar,
    Footer
    
  },
  data(){
    return {
      loginSuccess:false,
      username:"",
      room:"",
      socket : undefined,
      messages: [],
      roomUsers :{},
      numOfUsers:0
    }
  },
  methods:{
    postLogin(loginData){
      this.socket = io.connect("http://localhost:3000")
      this.username = loginData.username
      this.room= loginData.room
      this.loginSuccess = true
      this.setupSocket()
      this.connServer("Ping!")
      this.joinRoom()

    },
    signOut(){
      this.socket = undefined
      this.username = ""
      this.room= ""
      this.loginSuccess = false
      this.messages=[],
      this.roomUsers ={}

    },
    setupSocket(){
      this.socket.on("CONN_COM_OVER", this.connMessage)

      this.socket.on("ROOM_MESSAGE", this.addMessage)
    },

    connServer(data) {
      // Send the "CONN_COM" event to the server with data.
      this.socket.emit('CONN_COM', data)
    },

    joinRoom() {
      this.socket.emit("JOIN_ROOM", {username:this.username,room:this.room})
    },

    sendMessage(msg){
      this.socket.emit("ROOM_MESSAGE", msg)
    },

    addMessage(msg){
      this.messages.push(msg)
      this.scrollToElement()
    },

    updateRoomUsers(data){
      this.roomUsers = data
      this.numOfUsers = data.users.length
    },

    connMessage(msg){
      
      if (msg.msgType=="welcome_user" || msg.msgType=="new_user"){
        this.messages.push(msg.msg)
        this.scrollToElement()
      }else if (msg.msgType =="room_info"){
        this.updateRoomUsers(msg.msg)
        console.log("Conn Msg from server", JSON.stringify(msg))
      }
      
    },

    scrollToElement() {
            const els = this.$el.querySelectorAll('dl>div>dd');
            const el = els[els.length-1];
            if (el) {
                el.scrollIntoView();

            }
    }

  }
}
</script>

<style>

</style>
