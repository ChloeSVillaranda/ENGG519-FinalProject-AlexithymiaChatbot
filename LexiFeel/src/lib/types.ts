export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  text: string;
  time: string;
}

export type TrustBand = 'A_VERY_LOW' | 'B_CAUTIOUS' | 'C_MODERATE' | 'D_HIGH';

export interface TrustMetrics {
  feedback: number | null;
  avgMessageLength: number;
  sessionCount: number;
  selfDisclosure: number;
  repairSuccess: number;
}

export interface TrustState {
  trustFactor: number;
  band: TrustBand;
  metrics: TrustMetrics;
}
