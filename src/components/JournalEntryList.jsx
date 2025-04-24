import React from 'react';

const JournalEntryList = ({ trades }) => {
    if (trades.length === 0) {
        return <p className="text-gray-700 dark:text-gray-300">No trades available.</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Trade Journal</h2>
            <ul className="space-y-4">
                {trades.map((trade) => (
                    <li
                        key={trade.id}
                        className={`border p-4 rounded shadow ${
                            trade.outcome === 'win'
                                ? 'bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-700'
                                : 'bg-red-100 border-red-500 dark:bg-red-900 dark:border-red-700'
                        }`}
                    >
                        <p className="text-gray-900 dark:text-gray-100"><strong>Date:</strong> {trade.date}</p>
                        <p className="text-gray-900 dark:text-gray-100"><strong>Currency Pair:</strong> {trade.pair}</p>
                        <p className="text-gray-900 dark:text-gray-100"><strong>Entry Price:</strong> {trade.entryPrice}</p>
                        <p className="text-gray-900 dark:text-gray-100"><strong>Exit Price:</strong> {trade.exitPrice}</p>
                        <p className="text-gray-900 dark:text-gray-100"><strong>Profit (USD):</strong> {trade.profit}</p>
                        <p className="text-gray-900 dark:text-gray-100"><strong>Notes:</strong> {trade.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JournalEntryList;