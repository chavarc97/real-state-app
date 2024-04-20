import express from 'express';
import colors from 'colors';

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000 ...'.yellow.bold);
})