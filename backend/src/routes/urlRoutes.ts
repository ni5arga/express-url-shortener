import express, { Request, Response } from 'express';
import ShortUrl from '../models/url'; 

const router = express.Router();

router.get('/:shortUrl', async (req: Request, res: Response) => {
    try {
        const shortUrl = await ShortUrl.findOne({ shortId: req.params.shortUrl });

        if (shortUrl) {
            return res.redirect(shortUrl.originalUrl);
        } else {
            return res.status(404).json({ message: 'Short URL not found' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
