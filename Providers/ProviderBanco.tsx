import React from "react";
import { Alert } from "react-native";
import { ContextBanco } from "../Context/ContextBanco";
import { Plantilla } from "../modelos/Plantilla";

export default function ProviderBanco({ children }: Plantilla) {
  const [saldo, setSaldo] = React.useState<number>(10000);
  const [transacciones, setTransacciones] = React.useState<string[]>([]);

  function depositar() {
    setSaldo(saldo + 500);
    setTransacciones([...transacciones, "Usted hizo un deposito de L.500"]);
  }

  function transferir(cuenta: string, nombre: string, monto: number) {
    if (monto <= saldo) {
      setSaldo(saldo - monto);
      setTransacciones([
        ...transacciones,
        `Se le hizo una transferencia a ${nombre} (${cuenta}) por la cantidad de L.${monto}`,
      ]);
      Alert.alert("Transferencia", "Muchas gracias, su transferencia ya fue procesada");
    } else {
      Alert.alert("Disculpa", "No tiene saldo suficiente para completar la transaccion");
    }
  }

  return (
    <ContextBanco.Provider value={{ saldo, transacciones, depositar, transferir }}>
      {children}
    </ContextBanco.Provider>
  );
}

export function useBanco() {
  return React.useContext(ContextBanco);
}
