import express from 'express';

const app = express();

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(process.env.PORT);
