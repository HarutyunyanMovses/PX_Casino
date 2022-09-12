// libs
const axios = require("axios")
const http = require("./index")
//secrets
const { URL_LOCAL_SERVER, Origin_URL1 } = require("./config")

const io = require("socket.io")(http, {
  cors: {
    origin: [Origin_URL1]
  },
})

module.exports = function starting() {
  console.log("Soket.IO server is started...");
}

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId, });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);

};
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  // console.log("a user connected.",5464);

  socket.emit("me", socket.id)

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId.userId, socket.id);
    io.emit("getUsers", users);
    console.log(users)
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });

});



