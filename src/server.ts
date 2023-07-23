import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;



// DB Connection
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("DB Connected 👌");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Failed to connect with databse:`, err);
    }
}
bootstrap();