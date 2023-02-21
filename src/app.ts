import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    // git test
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});