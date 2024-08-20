"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const messageController_1 = require("../controllers/messageController");
exports.router = (0, express_1.Router)();
exports.router.get('/', messageController_1.getMessages);
exports.router.post('/', messageController_1.sendMessage);
// Add a specific route for /messages/send
exports.router.post('/send', messageController_1.sendMessage); // Matches POST /messages/send
