
import React from 'react';

interface ZaritConsentScreenProps {
  onConsent: (consent: boolean) => void;
}

const ZaritConsentScreen: React.FC<ZaritConsentScreenProps> = ({ onConsent }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-8 text-center animate-fade-in-up">
      <h2 className="text-3xl font-bold text-sky-800 mb-4">Continuar con una valoración más detallada</h2>
      <p className="text-slate-600 mb-6 max-w-xl mx-auto">
        Su primera evaluación no indica un nivel de esfuerzo elevado, lo cual es una buena señal.
      </p>
      <p className="text-slate-600 mb-8 max-w-xl mx-auto">
        Para obtener una visión más completa de su situación, le recomendamos continuar con la Escala de Zarit. Este test nos ayudará a profundizar en diferentes aspectos de su rol como cuidador/a. ¿Desea continuar?
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onConsent(true)}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-transform transform hover:scale-105"
        >
          Sí, continuar
        </button>
        <button
          onClick={() => onConsent(false)}
          className="bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transition-colors"
        >
          No, gracias
        </button>
      </div>
    </div>
  );
};

export default ZaritConsentScreen;
