import React from 'react';

const StatsPage = ({ trades }) => {
    const totalTrades = trades.length;
    const wins = trades.filter((trade) => trade.outcome === 'win').length;
    const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(2) : 0;

    const netPnL = trades.reduce((total, trade) => total + parseFloat(trade.profit || 0), 0);

    const totalRR = trades.reduce((total, trade) => {
        const rr = trade.rr || (trade.entryPrice && trade.exitPrice
            ? Math.abs((trade.exitPrice - trade.entryPrice) / trade.entryPrice)
            : 0);
        return total + parseFloat(rr);
    }, 0);

    const averageRR = totalTrades > 0 ? (totalRR / totalTrades).toFixed(2) : 0;

    return (
        <div className="flex justify-center space-x-6 mt-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm font-medium dark:text-gray-300">
                Win Rate: {winRate}%
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm font-medium dark:text-gray-300">
                Average RR: {averageRR}
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm font-medium dark:text-gray-300">
                Net PnL: ${netPnL.toFixed(2)}
            </div>
        </div>
    );
};

export default StatsPage;