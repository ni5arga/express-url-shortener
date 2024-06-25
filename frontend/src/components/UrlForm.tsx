import React, { useState } from 'react';
import axios from 'axios';

const UrlForm: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [apiKey, setApiKey] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/shorten', {
                originalUrl,
                apiKey
            });
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="url-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Enter original URL"
                    required
                />
                <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter API key"
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Short URL: <a href={`http://localhost:5000/${shortUrl}`} target="_blank" rel="noopener noreferrer">http://localhost:5000/{shortUrl}</a></p>
                </div>
            )}
        </div>
    );
};

export default UrlForm;
