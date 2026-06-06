import app from './app.js';
import http, { createServer } from 'http';

const server = createServer(app);

const PORT = process.env.PORT || 5001;

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});