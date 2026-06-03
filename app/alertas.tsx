import { View, Text, StyleSheet } from "react-native";
import { useMission } from "../context/MissionContext";

export default function Alertas() {
  const {
    energia,
    temperatura,
    comunicacao,
    estabilidade,
  } = useMission();

  const alertas = [];

  if (energia < 20) {
    alertas.push(" Energia crítica");
  }

  if (temperatura > 80) {
    alertas.push(" Superaquecimento detectado");
  }

  if (comunicacao < 30) {
    alertas.push(" Comunicação instável");
  }

  if (estabilidade < 50) {
    alertas.push(" Risco de instabilidade orbital");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Central de Alertas</Text>

      {alertas.length === 0 ? (
        <Text style={styles.safe}>
           Todos os sistemas operando normalmente
        </Text>
      ) : (
        alertas.map((alerta, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{alerta}</Text>
          </View>
        ))
      )}
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  safe: {
    color: "#00FF99",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

  card: {
    backgroundColor: "#7F1D1D",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  cardText: {
    color: "#fff",
    fontSize: 18,
  },
});