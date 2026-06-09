import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🚀 Central de Monitoramento Espacial
      </Text>

      <Text style={styles.subtitle}>
        Controle de Missões • Sensores • Comunicações
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>📊 Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/alertas")}
      >
        <Text style={styles.buttonText}>🚨 Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/atualizar")}
      >
        <Text style={styles.buttonText}>🪛 Atualizar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/configuracoes")}
      >
        <Text style={styles.buttonText}>🔧 Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 14,
    marginBottom: 35,
    textAlign: "center",
    marginTop: 10,
  },

  button: {
    width: "100%",
    backgroundColor: "#111827",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#00E5FF",
  },

  buttonText: {
    color: "#00E5FF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});