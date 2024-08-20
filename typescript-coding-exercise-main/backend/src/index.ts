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

// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// //import { router as messageRouter } from './routes/messageRoutes'; // Adjust path if necessary
// import router from './routes/messageRoutes'; // Use default import

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:4200', // Adjust to your frontend URL
// }));
// app.use(bodyParser.json());

// // Use the messageRouter for /messages endpoint
// app.use('/messages', router);
// app.use((req: Request, res: Response, next) => {
//   console.log(`Received request for: ${req.url}`);
//   next();
// });
// app.post('/messages/send', (req: Request, res: Response) => {
//   console.log('Received request for:', req.url);
//   // Process request here
// });

// // Sample endpoint
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello from the backend!');
// });
// app.get('/test', (req: Request, res: Response) => {
//   res.send('Test route working!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// export default app;

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/messageRoutes';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200', // Adjust to your frontend URL
}));
app.use(bodyParser.json());
app.use(express.json());
// Use routes
app.use('/messages', router);
app.use('/message', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});
app.get('/test', (req: Request, res: Response) => {
  res.send('Test route working!');
});

app.get('/messages/test', (req: Request, res: Response) => {
  res.send('Messages test route working!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


