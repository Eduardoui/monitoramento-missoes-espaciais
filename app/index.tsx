import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Central de Monitoramento Espacial
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/alertas")}
      >
        <Text style={styles.buttonText}> Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/atualizar")}
      >
        <Text style={styles.buttonText}> Atualizar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/configuracoes")}
      >
        <Text style={styles.buttonText}> Configurações</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: "#00E5FF",
    textAlign: "center",
    fontSize: 18,
  },
});