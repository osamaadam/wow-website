/// <reference types="react-scripts" />

interface User {
  id: number;
  username: string;
  password?: string;
  email: string;
  last_ip?: string;
  last_attempt_ip?: string;
  mutetime?: number;
  mutereason?: string;
  muteby?: string;
}
