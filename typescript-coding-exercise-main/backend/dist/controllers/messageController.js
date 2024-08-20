"use strict";
// import { Request, Response } from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.getMessages = void 0;
const getMessages = (req, res) => {
    // Placeholder implementation
    res.json({ messages: [] });
};
exports.getMessages = getMessages;
const sendMessage = (req, res) => {
    // Placeholder implementation
    const { message, user } = req.body;
    if (!message || !user) {
        return res.status(400).send('Invalid input');
    }
    res.status(200).send('Message sent');
};
exports.sendMessage = sendMessage;
