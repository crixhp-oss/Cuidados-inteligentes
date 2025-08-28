
export type Stage = 'welcome' | 'iec' | 'zaritConsent' | 'zarit' | 'result';

export type ResultCategory = 'high' | 'moderate' | 'low' | 'declined';

export interface Stats {
  high: number;
  moderate: number;
  low: number;
}
