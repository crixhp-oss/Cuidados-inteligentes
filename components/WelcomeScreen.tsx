
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-8 text-center animate-fade-in-up">
      <h2 className="text-3xl font-bold text-sky-800 mb-4">Bienvenido/a al Asistente para Cuidadores</h2>
      <p className="text-slate-600 mb-6 max-w-xl mx-auto">
        Esta herramienta está diseñada para ayudarle a comprender mejor su situación como cuidador/a. A través de unas breves preguntas, identificaremos si existen signos de sobrecarga para poder ofrecerle el apoyo que necesita.
      </p>
      <p className="text-slate-600 mb-8 max-w-xl mx-auto">
        Su bienestar es nuestra prioridad. ¿Comenzamos?
      </p>
      <button
        onClick={onStart}
        className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
      >
        Iniciar Evaluación
      </button>
    </div>
  );
};

export default WelcomeScreen;
