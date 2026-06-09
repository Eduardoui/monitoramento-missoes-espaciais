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
    comandante,
  } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Central da Missão</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📍 MISSÃO</Text>
        <Text style={styles.infoValue}>{nomeMissao}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>🛸 NAVE</Text>
        <Text style={styles.infoValue}>{nomeNave}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>👨‍🚀 COMANDANTE</Text>
        <Text style={styles.infoValue}>{comandante}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔋 ENERGIA</Text>
        <Text style={styles.cardValue}>{energia}%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌡️ TEMPERATURA</Text>
        <Text style={styles.cardValue}>{temperatura}°C</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📡 COMUNICAÇÃO</Text>
        <Text style={styles.cardValue}>{comunicacao}%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 ESTABILIDADE ORBITAL</Text>
        <Text style={styles.cardValue}>{estabilidade}%</Text>
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
    marginBottom: 25,
    marginTop: 10,
  },

  infoCard: {
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "#00E5FF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  infoTitle: {
    color: "#00E5FF",
    fontSize: 13,
    fontWeight: "bold",
  },

  infoValue: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  cardTitle: {
    color: "#00E5FF",
    fontSize: 14,
    fontWeight: "bold",
  },

  cardValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
});