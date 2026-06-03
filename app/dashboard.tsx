import { View, Text, StyleSheet } from "react-native";
import { useMission } from "../context/MissionContext";

export default function Dashboard() {
  const {
    energia,
    temperatura,
    comunicacao,
    estabilidade,
    nomeMissao,
    nomeNave,
  } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missão: {nomeMissao}</Text>
      <Text style={styles.subtitle}>Nave: {nomeNave}</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Energia: {energia}%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Temperatura: {temperatura}°C
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Comunicação: {comunicacao}%
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Estabilidade Orbital: {estabilidade}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    color: "#00E5FF",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardText: {
    color: "#fff",
    fontSize: 18,
  },
});