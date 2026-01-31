import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8008 });

wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress;
  socket.on("message", (rawData) => {
    console.log(rawData);

    wss.clients.forEach((client) => {
      if (client.readyState === 1) client.send(`server Broadcast: ${message}`);
    });
  });
});
