import { Request, Response } from 'express';
import Url from '../models/url';
import shortid from 'shortid';

export const createShortUrl = async (req: Request, res: Response) => {
    const { originalUrl, apiKey } = req.body;

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Invalid API key' });
    }

    const shortUrl = shortid.generate();
    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();

    res.json({ originalUrl, shortUrl });
};

export const getShortUrl = async (req: Request, res: Response) => {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ shortUrl });
    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.status(404).json({ message: 'URL not found' });
    }
};
