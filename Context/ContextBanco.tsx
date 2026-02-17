import { createContext } from "react";

export const ContextBanco = createContext({
  saldo: 10000,
  transacciones: [] as string[],
  depositar: () => {},
  transferir: (cuenta: string, nombre: string, monto: number) => {},
});
