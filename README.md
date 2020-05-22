# iChitChat

An Instant Private Chat application.

Anyone can use this app to create instant username or show name then enter in a chat room to chat another person to share some secret info instantly. 

## Objective to create this app
 To create a poc project using Front end technologies.


## Features

* Instant disposable single session username creation.
* No information of user/chat is stored in server.


## Technologies Used:

* Vue JS (FrontEnd Framework)
* Bootstrap (HTML/CSS Framework)
* Express JS - NodeJS (Server side framework)
* SocketIO - For real time messaging between users.
* Heroku - Server currently hosted.

## Limitations

* Currently only max 100 users can chat simultaneously. Due to limitation of server. Need support to move to large scale server 

## User Flow

* Enter desired username (showname) and check for availability for a session- it will be visible to other user.

![Check Username ](https://github.com/abkabhishek/ichitchat/blob/master/public/images/demo1.png?raw=true)

* If username is available, Login after selecting a room.

![Login ](https://github.com/abkabhishek/ichitchat/blob/master/public/images/demo2.png?raw=true)


* Chat with the available users. Any other person who joined the same room will be available to chat in the room.

![Chat ](https://github.com/abkabhishek/ichitchat/blob/master/public/images/demo3.png?raw=true)

* From Menu, Logout from the room and user will be logout and created username will be deleted.

![Logout ](https://github.com/abkabhishek/ichitchat/blob/master/public/images/demo4.png?raw=true)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)