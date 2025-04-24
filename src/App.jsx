import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JournalEntryList from './components/JournalEntryList';
import JournalEntryForm from './components/JournalEntryForm';
import StatsPage from './pages/StatsPage';
import Footer from './components/Footer';

const App = () => {
    const [trades, setTrades] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const response = await fetch('http://localhost:3001/trades');
                console.log('Response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched trades:', data);
                setTrades(data);
            } catch (error) {
                console.error('Error fetching trades:', error);
            }
        };

        fetchTrades();
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const addTrade = (newTrade) => {
        setTrades([...trades, newTrade]);
    };

    const resetJournal = () => {
        setTrades([]);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <header className="text-center py-6">
                    <h1 className="text-4xl font-extrabold tracking-wide uppercase border-b-2 border-gray-900 inline-block pb-1 dark:border-white">
                        Forex Trading Journal
                    </h1>
                    <p className="mt-2 text-lg font-medium dark:text-black-300">Track, Analyze, Grow</p>
                </header>
                <nav className="flex justify-center space-x-4 mb-6">
                    <Link
                        to="/"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full uppercase font-medium hover:bg-blue-600 transition-colors"
                    >
                        Add Entry
                    </Link>
                    <Link
                        to="/journal"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full uppercase font-medium hover:bg-blue-600 transition-colors"
                    >
                        Journal
                    </Link>
                    <Link
                        to="/stats"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full uppercase font-medium hover:bg-blue-600 transition-colors"
                    >
                        Stats
                    </Link>
                </nav>
                <main className="flex-grow flex flex-col items-center p-6">
                    <Routes>
                        <Route path="/" element={<JournalEntryForm addTrade={addTrade} />} />
                        <Route path="/journal" element={<JournalEntryList trades={trades} />} />
                        <Route path="/stats" element={<StatsPage trades={trades} />} />
                    </Routes>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={resetJournal}
                            className="bg-red-500 text-white px-6 py-2 rounded-full uppercase font-medium hover:bg-red-600 transition-colors"
                        >
                            Reset Journal
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="bg-red-500 text-white px-6 py-2 rounded-full uppercase font-medium hover:bg-red-600 transition-colors"
                        >
                            Toggle Dark Mode
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;