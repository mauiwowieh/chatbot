"use strict";
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(cors());
// app.use(bodyParser.json());
// // Sample endpoint
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello from the backend!');
// });
// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// export default app;
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(cors());
// app.use(bodyParser.json());
// // Sample endpoint
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello from the backend!');
// });
// // New route for /messages
// app.get('/messages', (req: Request, res: Response) => {
//   res.status(200).json({ messages: [] }); // Sample response
// });
// // New route for /messages/send
// app.post('/messages/send', (req: Request, res: Response) => {
//   const { text } = req.body;
//   if (text) {
//     res.status(204).send(); // No content for success
//   } else {
//     res.status(400).json({ error: 'Text is required' }); // Bad request if text is missing
//   }
// });
// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// export default app;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const messageRoutes_1 = require("./routes/messageRoutes"); // Adjust path if necessary
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Use the messageRouter for /messages endpoint
app.use('/messages', messageRoutes_1.router);
app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
});
// Sample endpoint
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});
app.get('/test', (req, res) => {
    res.send('Test route working!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
exports.default = app;
