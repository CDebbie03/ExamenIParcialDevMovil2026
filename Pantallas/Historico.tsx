import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useBanco } from "../Providers/ProviderBanco";

export default function Historico() {
  const { transacciones } = useBanco();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informacion sobre su historial de transacciones</Text>
      <Text style={styles.total}>
        Cantidad de transacciones realizadas: {transacciones.length}
      </Text>

      <FlatList
        data={transacciones}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}> {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  total: { fontSize: 16, marginBottom: 10 },
  item: { paddingVertical: 4 },
});
