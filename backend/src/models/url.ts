import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
});

const Url = model('Url', urlSchema);

export default Url;
