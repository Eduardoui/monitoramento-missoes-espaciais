import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosSalvos = await AsyncStorage.getItem(
          "configuracoesMissao"
        );

        if (dadosSalvos) {
          const dados = JSON.parse(dadosSalvos);

          setMissao(dados.missao || "");
          setNave(dados.nave || "");
          setResponsavel(dados.responsavel || "");
        }
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    }

    carregarDados();
  }, []);

  async function salvar() {
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

    try {
      await AsyncStorage.setItem(
        "configuracoesMissao",
        JSON.stringify({
          missao,
          nave,
          responsavel,
        })
      );
    } catch (error) {
      console.log("Erro ao salvar:", error);
    }

    Alert.alert("Sucesso", "Configurações salvas!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔧 Configurações</Text>

      <Text style={styles.label}>📍 Nome da Missão</Text>
      <TextInput
        style={styles.input}
        value={missao}
        onChangeText={setMissao}
        placeholder="Nome da missão"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>🛸 Nome da Nave</Text>
      <TextInput
        style={styles.input}
        value={nave}
        onChangeText={setNave}
        placeholder="Nome da nave"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>🧑‍🚀 Comandante</Text>
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

  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
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
    marginTop: 10,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});