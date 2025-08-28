
import React, { useState } from 'react';
import { IEC_QUESTIONS } from '../constants';

interface IECScreenProps {
  onComplete: (score: number) => void;
}

const IECScreen: React.FC<IECScreenProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(IEC_QUESTIONS.length).fill(null));

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const isComplete = answers.every(answer => answer !== null);

  const handleSubmit = () => {
    if (isComplete) {
      const score = answers.filter(answer => answer === true).length;
      onComplete(score);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-sky-800 mb-2">Índice de Esfuerzo del Cuidador (IEC)</h2>
      <p className="text-slate-600 mb-6">Por favor, responda "Sí" o "No" a las siguientes preguntas.</p>
      
      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 -mr-4">
        {IEC_QUESTIONS.map((question, index) => (
          <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-medium text-slate-700 mb-3">{index + 1}. {question}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(index, true)}
                className={`w-full py-2 px-4 rounded-md transition-colors text-sm font-semibold ${answers[index] === true ? 'bg-sky-600 text-white shadow' : 'bg-white hover:bg-sky-100 border border-slate-300'}`}
              >
                Sí
              </button>
              <button
                onClick={() => handleAnswer(index, false)}
                className={`w-full py-2 px-4 rounded-md transition-colors text-sm font-semibold ${answers[index] === false ? 'bg-sky-600 text-white shadow' : 'bg-white hover:bg-sky-100 border border-slate-300'}`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-all transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100"
        >
          Finalizar y ver resultado
        </button>
        {!isComplete && <p className="text-sm text-slate-500 mt-2">Por favor, responda todas las preguntas para continuar.</p>}
      </div>
    </div>
  );
};

export default IECScreen;
