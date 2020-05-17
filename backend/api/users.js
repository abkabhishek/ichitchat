const users = [];

// Join user to chat
function addUser(id, username, room) {
  const user = { id, username, room };
  if 
  users.push(user);

  return user;
}

// find user
function findUser(username){
  return users.find(user=> user.username === username)
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function removeUser(id) {
  const index = users.findIndex( user => {user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  addUser,
  getCurrentUser,
  removeUser,
  getRoomUsers,
  findUser
};