export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
}

export interface UserUpdate {
  id: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface UserDelete {
  id: number;
}