import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JournalEntryForm = ({ addTrade }) => {
    const [formData, setFormData] = useState({
        pair: '',
        entryPrice: '',
        exitPrice: '',
        outcome: '',
        date: '',
        profit: '',
        direction: '',
        rr: '',
        notes: '',
        duration: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTrade(formData);
        setFormData({
            pair: '',
            entryPrice: '',
            exitPrice: '',
            outcome: '',
            date: '',
            profit: '',
            direction: '',
            rr: '',
            notes: '',
            duration: '',
        });
        navigate('/journal');
    };

    return (
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date:</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                        <span className="absolute right-2 top-2 text-gray-400 dark:text-gray-500">📅</span>
                    </div>
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pair:</label>
                    <input
                        type="text"
                        name="pair"
                        value={formData.pair}
                        onChange={handleChange}
                        placeholder="e.g., EUR/USD"
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Direction:</label>
                    <select
                        name="direction"
                        value={formData.direction}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    >
                        <option value="">Select</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Entry Price:</label>
                    <input
                        type="number"
                        name="entryPrice"
                        value={formData.entryPrice}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Exit Price:</label>
                    <input
                        type="number"
                        name="exitPrice"
                        value={formData.exitPrice}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">RR:</label>
                    <input
                        type="number"
                        name="rr"
                        value={formData.rr}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Net Profit:</label>
                    <input
                        type="number"
                        name="profit"
                        value={formData.profit}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Outcome:</label>
                    <select
                        name="outcome"
                        value={formData.outcome}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                    >
                        <option value="">Select</option>
                        <option value="win">Win</option>
                        <option value="loss">Loss</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Duration:</label>
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded-full uppercase font-medium hover:bg-green-700 transition-colors"
                    >
                        Log Trade
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JournalEntryForm;