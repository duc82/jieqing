import { createContext, ReactNode } from "react";

export const TimeContext = createContext<number>(0);

interface TimeProviderProps {
  children: ReactNode;
  time: number;
}

export const TimeProvider = ({ children, time }: TimeProviderProps) => {
  return <TimeContext.Provider value={time}>{children}</TimeContext.Provider>;
};
