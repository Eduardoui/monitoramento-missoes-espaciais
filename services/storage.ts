import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "spaceMissionData";

export async function salvarDados(dados: any) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(dados)
    );
  } catch (error) {
    console.log("Erro ao salvar:", error);
  }
}

export async function carregarDados() {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);

    if (dados) {
      return JSON.parse(dados);
    }

    return null;
  } catch (error) {
    console.log("Erro ao carregar:", error);
    return null;
  }
}