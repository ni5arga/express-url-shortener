import React from 'react';
import UrlForm from './components/UrlForm';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <UrlForm />
        </div>
    );
};

export default App;
