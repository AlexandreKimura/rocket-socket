const socket = io("http://localhost:3000");

socket.on("chat_initial", data => {
  console.log(data);
})