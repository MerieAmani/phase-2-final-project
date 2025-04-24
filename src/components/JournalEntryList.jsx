import React from 'react';

const JournalEntryList = ({ trades }) => {
    if (trades.length === 0) {
        return <p>No trades available.</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Trade Journal</h2>
            <ul className="space-y-4">
                {trades.map((trade) => (
                    <li key={trade.id} className="border p-4 rounded shadow">
                        <p><strong>Date:</strong> {trade.date}</p>
                        <p><strong>Currency Pair:</strong> {trade.currencyPair}</p>
                        <p><strong>Entry Price:</strong> {trade.entryPrice}</p>
                        <p><strong>Exit Price:</strong> {trade.exitPrice}</p>
                        <p><strong>Profit/Loss:</strong> {trade.profitLoss} pips</p>
                        <p><strong>Notes:</strong> {trade.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JournalEntryList;