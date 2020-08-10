// interface データ構造（型）を定義　
export interface Flip {
  id: number;
  question: string;
  answer: string;
  check: boolean;
  remind: boolean;
  created_at: string;
  updated_at: string;
};