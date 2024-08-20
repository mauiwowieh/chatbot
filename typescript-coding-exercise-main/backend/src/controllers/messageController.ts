import { Request, Response } from 'express';

// Example data store
const messages = [
  { message: 'Hello', user: 'Alice', timestamp: new Date().toISOString() },
  { message: 'Hi', user: 'Bob', timestamp: new Date().toISOString() },
];

// Get all messages
export const getMessages = (req: Request, res: Response) => {
  console.log('Current messages:', messages); // Log messages
  res.json(messages);
};

// Send a new message
export const sendMessage = (req: Request, res: Response) => {
  const { message, user } = req.body;

  if (!message || !user) {
    return res.status(400).send('Invalid input');
  }

  const timestamp = new Date().toISOString();
  messages.push({ message, user, timestamp });
  console.log(message, user, timestamp);

  res.status(200).send('Message sent');
};


