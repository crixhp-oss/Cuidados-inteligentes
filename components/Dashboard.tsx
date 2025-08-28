
import React from 'react';
import type { Stats } from '../types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  stats: Stats;
}

const COLORS = {
  high: '#ef4444',    // red-500
  moderate: '#f97316', // orange-500
  low: '#22c55e',      // green-500
};

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const data = [
    { name: 'Sobrecarga Intensa', value: stats.high, color: COLORS.high },
    { name: 'Sobrecarga Leve/Moderada', value: stats.moderate, color: COLORS.moderate },
    { name: 'Sin Sobrecarga', value: stats.low, color: COLORS.low },
  ];

  const total = stats.high + stats.moderate + stats.low;

  return (
    <div className="w-full max-w-3xl mt-12 bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-sky-800 mb-1">Panel de Resultados Globales</h2>
      <p className="text-slate-600 mb-6">Esta visualización muestra la distribución de resultados de todos los cuidadores que han utilizado la herramienta, destacando la importancia del apoyo.</p>
      
      {total > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="h-64 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value} cuidadores`, '']}/>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map(item => (
              <div key={item.name} className="p-4 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                      <span className="font-semibold text-slate-700">{item.name}</span>
                    </div>
                    <span className="font-bold text-lg" style={{ color: item.color }}>
                      {((item.value / total) * 100).toFixed(1)}%
                    </span>
                 </div>
                 <p className="text-sm text-slate-500 pl-6">{item.value} de {total} cuidadores</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-slate-500 py-12">No hay datos disponibles para mostrar.</p>
      )}
    </div>
  );
};

export default Dashboard;
