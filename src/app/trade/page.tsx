'use client';

import { useState } from 'react';

export default function TradePage() {
  const [teamAPlayers, setTeamAPlayers] = useState(['']);
  const [teamBPlayers, setTeamBPlayers] = useState(['']);

  const handlePlayerChange = (
    team: 'A' | 'B',
    index: number,
    value: string
  ) => {
    const updater = team === 'A' ? setTeamAPlayers : setTeamBPlayers;
    const current = team === 'A' ? [...teamAPlayers] : [...teamBPlayers];
    current[index] = value;
    updater(current);
  };

  const addPlayerInput = (team: 'A' | 'B') => {
    const updater = team === 'A' ? setTeamAPlayers : setTeamBPlayers;
    const current = team === 'A' ? [...teamAPlayers] : [...teamBPlayers];
    if (current.length < 5) updater([...current, '']);
  };

  const removePlayerInput = (team: 'A' | 'B', index: number) => {
    const updater = team === 'A' ? setTeamAPlayers : setTeamBPlayers;
    const current = team === 'A' ? [...teamAPlayers] : [...teamBPlayers];
    current.splice(index, 1);
    updater(current);
  };

  const handleSubmit = () => {
    console.log('Team A Giving:', teamAPlayers);
    console.log('Team B Receiving:', teamBPlayers);
  };

    return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="w-full max-w-4xl p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-6">Fantasy Trade Advisor</h1>

        {}
        <div className="bg-red-100 text-black p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Team A (Giving)</h2>
            {teamAPlayers.map((player, idx) => (
            <div key={idx} className="flex items-center space-x-2 mb-2">
                <input
                type="text"
                value={player}
                onChange={(e) => handlePlayerChange('A', idx, e.target.value)}
                placeholder={`Player ${idx + 1}`}
                className="flex-1 p-2 rounded border border-gray-300"
                />
                {teamAPlayers.length > 1 && (
                <button
                    onClick={() => removePlayerInput('A', idx)}
                    className="text-red-500 text-sm"
                >
                    ✕
                </button>
                )}
            </div>
            ))}
            {teamAPlayers.length < 5 && (
            <button
                onClick={() => addPlayerInput('A')}
                className="text-sm text-blue-600 mt-1"
            >
                Add Player
            </button>
            )}
        </div>

        {}
        <div className="bg-green-100 text-black p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Team B (Receiving)</h2>
            {teamBPlayers.map((player, idx) => (
            <div key={idx} className="flex items-center space-x-2 mb-2">
                <input
                type="text"
                value={player}
                onChange={(e) => handlePlayerChange('B', idx, e.target.value)}
                placeholder={`Player ${idx + 1}`}
                className="flex-1 p-2 rounded border border-gray-300"
                />
                {teamBPlayers.length > 1 && (
                <button
                    onClick={() => removePlayerInput('B', idx)}
                    className="text-red-500 text-sm"
                >
                    ✕
                </button>
                )}
            </div>
            ))}
            {teamBPlayers.length < 5 && (
            <button
                onClick={() => addPlayerInput('B')}
                className="text-sm text-blue-600 mt-1"
            >
                Add Player
            </button>
            )}
        </div>

        {}
        <div className="text-center">
            <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
            Submit Trade
            </button>
        </div>
        </div>
    </main>
    );
}