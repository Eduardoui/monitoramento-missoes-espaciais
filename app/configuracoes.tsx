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

export default function Configuracoes() {
  const {
    nomeMissao,
    setNomeMissao,
    nomeNave,
    setNomeNave,
    comandante,
    setComandante,
  } = useMission();

  const [missao, setMissao] = useState(nomeMissao);
  const [nave, setNave] = useState(nomeNave);
  const [responsavel, setResponsavel] = useState(comandante);

  function salvar() {
    if (!missao.trim()) {
      return Alert.alert("Erro", "Informe o nome da missão.");
    }

    if (!nave.trim()) {
      return Alert.alert("Erro", "Informe o nome da nave.");
    }

    if (!responsavel.trim()) {
      return Alert.alert("Erro", "Informe o comandante.");
    }

    setNomeMissao(missao);
    setNomeNave(nave);
    setComandante(responsavel);

    Alert.alert("Sucesso", "Configurações salvas!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Configurações</Text>

      <TextInput
        style={styles.input}
        value={missao}
        onChangeText={setMissao}
        placeholder="Nome da missão"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        value={nave}
        onChangeText={setNave}
        placeholder="Nome da nave"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        value={responsavel}
        onChangeText={setResponsavel}
        placeholder="Nome do comandante"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#111827",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#00E5FF",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});