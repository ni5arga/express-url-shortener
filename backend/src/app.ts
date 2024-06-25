import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
    // Options like `useNewUrlParser` and `useUnifiedTopology` are now defaults.
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', urlRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
