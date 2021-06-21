import { io } from "../http";

io.on("connect", socket => {
  
  socket.emit("chat_initial", {
    message: "Your chat started"
  })
});