const app = require("./src/app");
require("dotenv").config();
const generateResponse = require("./src/service/ai.service");
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("ai-message", async (data) => {
    chatHistory.push({ role: "user", parts: [{ text: data }] });
    const res = await generateResponse(chatHistory);
    chatHistory.push({ role: "model", parts: [{ text: res }] });
    socket.emit("ai-response", res);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
