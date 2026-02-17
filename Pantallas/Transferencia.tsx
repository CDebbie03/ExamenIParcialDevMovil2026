import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useBanco } from "../Providers/ProviderBanco";

export default function Transferencias() {
  const { saldo, transferir } = useBanco();

  const [cuenta, setCuenta] = React.useState<string>("");
  const [nombre, setNombre] = React.useState<string>("");
  const [monto, setMonto] = React.useState<string>("");

  function enviar() {
    const montoNum = parseInt(monto);
    if (!cuenta || !nombre || !monto) return;

    transferir(cuenta, nombre, montoNum);
    setCuenta("");
    setNombre("");
    setMonto("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sus transferencias</Text>
      <Text style={styles.saldo}>Su saldo Actual: L.{saldo}</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero de Cuenta"
        value={cuenta}
        onChangeText={setCuenta}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del Destinatario"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto a Transferir"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
      />

      <Button title="Procesar el Saldo" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  saldo: { fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
