import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Biscoito da Sorte</Text>
      </View>
      <View style={styles.headerContainer}>
        <Image
          source={require("../frasesapp/assets/images/biscoito-fechado.png")}
          style={styles.imgBiscoitoFechado}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity>
          <View style={styles.containerClickMsg}>
            <Text style={styles.clickMsg}>Ler Mensagem</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerTexto}>
          ADS_5 - Análise e Desenvolvimento de Sistemas
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cabecalho: {
    marginTop:20,
    height:100,
    width: "100%",
    backgroundColor: "#157354",
    alignItems: "center",
    justifyContent: "center",
  },
  textoCabecalho: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  headerContainer: {
    flex: 2,
    width: "100%",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBiscoitoFechado: {
    width: 250,
    height: 250,
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#157354",
    alignItems: "center",
    justifyContent: "center",
  },
  clickMsg: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerClickMsg: {
    backgroundColor: "#FFFF6A",
    borderRadius: 10,
    borderWidth: 1,
    height: 60,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerTexto: {
    fontWeight: "bold",
  },
});

export default App;
