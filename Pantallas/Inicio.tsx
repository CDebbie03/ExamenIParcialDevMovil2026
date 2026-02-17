import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useBanco } from "../Providers/ProviderBanco";

export default function Inicio() {
  const { saldo, depositar, transacciones } = useBanco();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, Estimado</Text>
      <Text style={styles.saldo}>Su saldo Actual: L.{saldo}</Text>

      <Button title="Hacer el deposito de (+L.500)" onPress={depositar} />

      <Text style={styles.subtitulo}>Transacciones</Text>
      <FlatList
        data={transacciones}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  saldo: { fontSize: 16, marginBottom: 10 },
  subtitulo: { fontSize: 16, fontWeight: "700", marginTop: 15, marginBottom: 6 },
  item: { paddingVertical: 4 },
});
