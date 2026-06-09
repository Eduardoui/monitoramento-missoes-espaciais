import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useMission } from "../context/MissionContext";

export default function Atualizar() {
  const {
    energia,
    temperatura,
    comunicacao,
    estabilidade,
    setEnergia,
    setTemperatura,
    setComunicacao,
    setEstabilidade,
  } = useMission();

  const [novaEnergia, setNovaEnergia] = useState(String(energia));
  const [novaTemperatura, setNovaTemperatura] = useState(String(temperatura));
  const [novaComunicacao, setNovaComunicacao] = useState(String(comunicacao));
  const [novaEstabilidade, setNovaEstabilidade] = useState(String(estabilidade));

  function salvar() {
    const e = Number(novaEnergia);
    const t = Number(novaTemperatura);
    const c = Number(novaComunicacao);
    const o = Number(novaEstabilidade);

    if (e < 0 || e > 100) {
      return Alert.alert("Erro", "Energia deve estar entre 0 e 100.");
    }

    if (c < 0 || c > 100) {
      return Alert.alert("Erro", "Comunicação deve estar entre 0 e 100.");
    }

    if (o < 0 || o > 100) {
      return Alert.alert("Erro", "Estabilidade deve estar entre 0 e 100.");
    }

    if (t < 0 || t > 150) {
      return Alert.alert("Erro", "Temperatura deve estar entre 0 e 150.");
    }

    setEnergia(e);
    setTemperatura(t);
    setComunicacao(c);
    setEstabilidade(o);

    Alert.alert("Sucesso", "Dados atualizados!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🪛 Atualização de Sensores</Text>

      <Text style={styles.label}>🔋 Energia (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={novaEnergia}
        onChangeText={setNovaEnergia}
      />

      <Text style={styles.label}>🌡️ Temperatura (°C)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={novaTemperatura}
        onChangeText={setNovaTemperatura}
      />

      <Text style={styles.label}>📡 Comunicação (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={novaComunicacao}
        onChangeText={setNovaComunicacao}
      />

      <Text style={styles.label}>📊 Estabilidade Orbital (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={novaEstabilidade}
        onChangeText={setNovaEstabilidade}
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar Dados</Text>
      </TouchableOpacity>
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

  label: {
    color: "#00E5FF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    backgroundColor: "#111827",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  button: {
    backgroundColor: "#00E5FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});