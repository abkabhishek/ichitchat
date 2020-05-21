const users = [];

// Join user to chat
function addUser(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

// find user
function findUser(username){
  return users.find(user=> {return user.username === username})
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => {return user.id === id});
}

// User leaves chat
function removeUserByID(id) {
  const index = users.findIndex( user => {return user.id === id});
  if (index !== -1) {
    let removed = users.splice(index, 1)
    return removed[0]
  }else{
    console.log("Unable to find user by socket id",id)
  }
}

// User leaves chat
function removeUser(username) {
  const index = users.findIndex( user => {return user.username === username});

  if (index !== -1) {
    let removed = users.splice(index, 1)
    return removed[0]
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => {return user.room === room});
}

function  getAll(){
  return users;
}

module.exports = {
  addUser,
  getCurrentUser,
  removeUser,
  getRoomUsers,
  findUser,
  removeUserByID,
  getAll
};