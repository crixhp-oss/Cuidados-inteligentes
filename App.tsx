
import React, { useState, useEffect } from 'react';
import type { Stage, ResultCategory, Stats } from './types';
import { MESSAGES } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import IECScreen from './components/IECScreen';
import ZaritConsentScreen from './components/ZaritConsentScreen';
import ZaritScreen from './components/ZaritScreen';
import ResultScreen from './components/ResultScreen';
import Dashboard from './components/Dashboard';
import { NurseIcon } from './components/icons';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>('welcome');
  const [resultType, setResultType] = useState<ResultCategory | null>(null);
  const [stats, setStats] = useState<Stats>(() => {
    try {
      const savedStats = localStorage.getItem('caregiverStats');
      return savedStats ? JSON.parse(savedStats) : { high: 12, moderate: 25, low: 38 };
    } catch (error) {
      console.error("Failed to parse stats from localStorage", error);
      return { high: 12, moderate: 25, low: 38 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('caregiverStats', JSON.stringify(stats));
    } catch (error) {
      console.error("Failed to save stats to localStorage", error);
    }
  }, [stats]);

  const handleStart = () => {
    setStage('iec');
  };

  const handleIecComplete = (score: number) => {
    if (score >= 7) {
      setStats(prevStats => ({ ...prevStats, high: prevStats.high + 1 }));
      setResultType('high');
      setStage('result');
    } else {
      setStage('zaritConsent');
    }
  };

  const handleZaritConsent = (consent: boolean) => {
    if (consent) {
      setStage('zarit');
    } else {
      setResultType('declined');
      setStage('result');
    }
  };

  const handleZaritComplete = (score: number) => {
    let category: ResultCategory;
    if (score >= 56) {
      category = 'high';
    } else if (score >= 46) {
      category = 'moderate';
    } else {
      category = 'low';
    }
    
    setStats(prevStats => ({ ...prevStats, [category]: prevStats[category] + 1 }));
    setResultType(category);
    setStage('result');
  };

  const handleRestart = () => {
    setResultType(null);
    setStage('welcome');
  };

  const renderStage = () => {
    switch (stage) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'iec':
        return <IECScreen onComplete={handleIecComplete} />;
      case 'zaritConsent':
        return <ZaritConsentScreen onConsent={handleZaritConsent} />;
      case 'zarit':
        return <ZaritScreen onComplete={handleZaritComplete} />;
      case 'result':
        return <ResultScreen resultType={resultType} message={MESSAGES[resultType || 'declined']} onRestart={handleRestart} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <div className="relative isolate min-h-screen">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffdb] to-[#0077be] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
        
        <header className="p-4 sm:p-6">
          <div className="container mx-auto flex items-center gap-3">
            <NurseIcon />
            <h1 className="text-2xl font-bold text-slate-700">Agente de Cuidado Inteligente</h1>
          </div>
        </header>

        <main className="container mx-auto p-4 sm:p-6 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            {renderStage()}
          </div>
          <Dashboard stats={stats} />
        </main>

        <footer className="text-center p-4 text-sm text-slate-500 mt-auto">
          <p>&copy; 2024 Cuidados Inteligentes. Todos los derechos reservados.</p>
        </footer>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0077be] to-[#80ffdb] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
