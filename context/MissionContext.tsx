import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type MissionContextType = {
  energia: number;
  setEnergia: (value: number) => void;

  temperatura: number;
  setTemperatura: (value: number) => void;

  comunicacao: number;
  setComunicacao: (value: number) => void;

  estabilidade: number;
  setEstabilidade: (value: number) => void;

  nomeMissao: string;
  setNomeMissao: (value: string) => void;

  nomeNave: string;
  setNomeNave: (value: string) => void;

  comandante: string;
  setComandante: (value: string) => void;
};

const MissionContext = createContext<
  MissionContextType | undefined
>(undefined);

export function MissionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [energia, setEnergia] = useState(85);
  const [temperatura, setTemperatura] = useState(42);
  const [comunicacao, setComunicacao] = useState(95);
  const [estabilidade, setEstabilidade] = useState(88);

  const [nomeMissao, setNomeMissao] = useState("Artemis-X");
  const [nomeNave, setNomeNave] = useState("Odyssey");
  const [comandante, setComandante] = useState("Eduardo");

  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosSalvos = await AsyncStorage.getItem(
          "dadosMissao"
        );

        if (dadosSalvos) {
          const dados = JSON.parse(dadosSalvos);

          setEnergia(dados.energia ?? 85);
          setTemperatura(dados.temperatura ?? 42);
          setComunicacao(dados.comunicacao ?? 95);
          setEstabilidade(dados.estabilidade ?? 88);

          setNomeMissao(dados.nomeMissao ?? "Artemis-X");
          setNomeNave(dados.nomeNave ?? "Odyssey");
          setComandante(dados.comandante ?? "Eduardo");
        }
      } catch (error) {
        console.log("Erro ao carregar missão:", error);
      }
    }

    carregarDados();
  }, []);

  useEffect(() => {
    async function salvarDados() {
      try {
        await AsyncStorage.setItem(
          "dadosMissao",
          JSON.stringify({
            energia,
            temperatura,
            comunicacao,
            estabilidade,
            nomeMissao,
            nomeNave,
            comandante,
          })
        );
      } catch (error) {
        console.log("Erro ao salvar missão:", error);
      }
    }

    salvarDados();
  }, [
    energia,
    temperatura,
    comunicacao,
    estabilidade,
    nomeMissao,
    nomeNave,
    comandante,
  ]);

  return (
    <MissionContext.Provider
      value={{
        energia,
        setEnergia,
        temperatura,
        setTemperatura,
        comunicacao,
        setComunicacao,
        estabilidade,
        setEstabilidade,
        nomeMissao,
        setNomeMissao,
        nomeNave,
        setNomeNave,
        comandante,
        setComandante,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error(
      "useMission deve ser usado dentro do MissionProvider"
    );
  }

  return context;
}