
import React from 'react';
import type { ResultCategory } from '../types';
import { HighIcon, ModerateIcon, LowIcon, InfoIcon } from './icons';

interface ResultScreenProps {
  resultType: ResultCategory | null;
  message: {
    title: string;
    text: string;
    color: string;
  };
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ resultType, message, onRestart }) => {
  const ICON_MAP: { [key: string]: React.ReactNode } = {
    high: <HighIcon />,
    moderate: <ModerateIcon />,
    low: <LowIcon />,
    declined: <InfoIcon />,
  };
  
  const COLOR_MAP: { [key: string]: string } = {
    high: 'border-red-500 bg-red-50',
    moderate: 'border-orange-500 bg-orange-50',
    low: 'border-green-500 bg-green-50',
    declined: 'border-slate-400 bg-slate-50',
  };

  return (
    <div className={`bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-8 text-center animate-fade-in-up border-t-4 ${COLOR_MAP[resultType || 'declined']}`}>
      <div className="flex justify-center mb-4">
        {ICON_MAP[resultType || 'declined']}
      </div>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">{message.title}</h2>
      <p className="text-slate-600 mb-8 max-w-xl mx-auto">
        {message.text}
      </p>
      <div className="flex justify-center gap-4">
        {resultType === 'high' || resultType === 'moderate' ? (
           <button
             onClick={() => alert('Esta función simula la reserva de una videoconsulta.')}
             className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-transform transform hover:scale-105"
           >
             Reservar Videoconsulta Gratuita
           </button>
        ) : null}
        <button
          onClick={onRestart}
          className="bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transition-colors"
        >
          Realizar otra evaluación
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
