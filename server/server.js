require("dotenv").config();

const express = require("express");
const cors=require('cors');
const mongoose = require("mongoose");
const authRouter=require("./controllers/authController");
const userRouter=require("./controllers/userController");
const chatRouter=require("./controllers/chatController");
const messageRouter=require("./controllers/messageController");


const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://chat-app-client-favf.onrender.com",
    ],
    credentials: true,
  })
);
app.use(express.json({
  limit:"50MB"
}));

const server=require('http').createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "https://chat-app-client-favf.onrender.com",
    methods: ["GET", "POST"],
  },
});
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/message',messageRouter);

const onlineUser=[];

//test socket connection from client
io.on('connection',socket=>{
      socket.on('join-room',userid=>{
        socket.join(userid);
      })

      socket.on('send-message',(message)=>{
        io.to(message.members[0])
        .to(message.members[1])
        .emit('receive-message',message)

        io.to(message.members[0])
        .to(message.members[1])
        .emit('set-message-count',message)
      })

      socket.on('clear-unread-messages',data=>{
          io.to(data.members[0])
          .to(data.members[1])
          .emit('message-count-cleared',data)
      })

      socket.on('user-typing',(data)=>{
        io.to(data.members[0])
        .to(data.members[1])
        .emit('started-typing',data)
      })

      socket.on('user-login',userId=>{
          if(!onlineUser.includes(userId)){
            onlineUser.push(userId)
          }
          socket.emit('online-users',onlineUser);
      })

      socket.on('user-offline',userId=>{
         onlineUser.splice(onlineUser.indexOf(userId),1);
          io.emit('online-users-updated' , onlineUser);
      })

})
  

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    server.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
