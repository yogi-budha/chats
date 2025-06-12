"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const httpServer = (0, http_1.createServer)(app);
let io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', "POST"]
    }
});
io.on("connection", (socket) => {
    console.log('A user connected:', socket.id);
});
app.get("/", (req, res) => {
    res.send("server running successfully");
});
app.listen("8800", () => {
    console.log("Server running on the port 8800");
});
