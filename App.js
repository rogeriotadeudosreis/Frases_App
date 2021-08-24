import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

var frases = [
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "O riso é a menor distância entre duas pessoas.",
  "Deixe de lado as preocupações e seja feliz.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "Acredite em milagres, mas não dependa deles.",
  "A maior barreira para o sucesso é o medo do fracasso.",
];

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  
  
  // função que cria um número aleatório para escolher a mensagem
  function quebrarBiscoito() {
    var random = Math.random();
    let randomNumber = Math.floor(random * frases.length);
    setTextoFrase(frases[randomNumber]);
  }

  return (
    // container geral da aplicação
    <View style={styles.container}>
      {/* cabeçalho com o título */}
      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Biscoito da Sorte</Text>
      </View>
      {/* container do header */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../frasesapp/assets/images/biscoito-fechado.png")}
          style={styles.imgBiscoitoFechado}
        />
        {/* mensagem escolhida do click */}
        <View style={styles.mensagemContainer}>
          <Text style={styles.mensagem}>{textoFrase}</Text>
        </View>
      </View>
      {/* container do body */}
      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={() => quebrarBiscoito()}>
          <View style={styles.containerClickMsg}>
            <Text style={styles.clickMsg}>Quebre o Biscoito Aqui</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* container do footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerTexto}>
          ADS-5 - Análise e Desenvolvimento de Sistemas
        </Text>
      </View>
    </View>
  );
}

//estilos usados nesta aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cabecalho: {
    marginTop: 30,
    height: 100,
    width: "100%",
    backgroundColor: "#ff8204",
    alignItems: "center",
    justifyContent: "center",
  },
  textoCabecalho: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#efefef",
  },
  headerContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBiscoitoFechado: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ff8204",
    alignItems: "center",
    justifyContent: "center",
  },
  clickMsg: {
    color: '#efefef',
    fontWeight: "bold",
    fontSize: 22,
    textAlign:'center',
  },
  containerClickMsg: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9f5000",
    height: 60,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#9f5000',
  },
  footerContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerTexto: {
    fontWeight: "bold",
    color: "#808080",
  },
  mensagemContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mensagem: {
    backgroundColor: "#9f5000",
    width:'80%',
    color: "white",
    fontSize: 18,
    textAlign: "center",
    justifyContent:'center',
    paddingHorizontal: 20,
    borderRadius:20,
  },
});

export default App;
