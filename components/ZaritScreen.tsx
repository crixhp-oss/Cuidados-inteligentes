
import React, { useState } from 'react';
import { ZARIT_QUESTIONS, ZARIT_OPTIONS } from '../constants';

interface ZaritScreenProps {
  onComplete: (score: number) => void;
}

const ZaritScreen: React.FC<ZaritScreenProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(ZARIT_QUESTIONS.length).fill(null));

  const handleAnswer = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const isComplete = answers.every(answer => answer !== null);

  const handleSubmit = () => {
    if (isComplete) {
      const score = answers.reduce((sum, val) => sum + (val || 0), 0);
      onComplete(score);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-sky-800 mb-2">Escala de Sobrecarga del Cuidador (Zarit)</h2>
      <p className="text-slate-600 mb-6">Valore la frecuencia con la que se siente de la siguiente manera.</p>
      
      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 -mr-4">
        {ZARIT_QUESTIONS.map((question, qIndex) => (
          <div key={qIndex} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-medium text-slate-700 mb-3">{qIndex + 1}. {question}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {ZARIT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(qIndex, option.value)}
                  className={`py-2 px-2 rounded-md transition-colors text-xs sm:text-sm font-semibold ${answers[qIndex] === option.value ? 'bg-sky-600 text-white shadow' : 'bg-white hover:bg-sky-100 border border-slate-300'}`}
                >
                  {option.label}
                </button>
              ))}
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
          Finalizar y ver resultado final
        </button>
        {!isComplete && <p className="text-sm text-slate-500 mt-2">Por favor, responda todas las preguntas para continuar.</p>}
      </div>
    </div>
  );
};

export default ZaritScreen;
