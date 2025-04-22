"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type TransitionContextType = {
  active: boolean;
  toggleTransition: () => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [active, setIsActive] = useState(false);

  const toggleTransition = () => {
    setIsActive((prev) => !prev); // Simplified toggle
  };

  return (
    <TransitionContext.Provider value={{ active, toggleTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ContextProvider");
  }
  return context;
}
