import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <ImageBackground // coloquei o ImageBackground para a imagem de fundo cubra todo o ecrã e não apenas o componente
      source={require("../assets/images/fundo.png")}
      style={styles.background}
    >
      <Image
        source={require("../assets/images/pimpo.png")}
        style={styles.pimpo}
      />
      <View style={styles.container}>
        <Text style={{ ...styles.marginBottom, fontSize: 17 }}>
          Olá eu sou o pimpo, o teu amigo de journaling{"\n"}
          Partilha o teu dia comigo
        </Text>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("NomeDaPagina")} // pagina seguinte
        >
          <Text style={styles.buttonText}>Partilha o teu dia</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // cobre o ecrã todo
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  pimpo: {
    width: 255,
    height: 255,
    position: "absolute",
    top: 50,
    left: 75,
    zIndex: 1,
  },
  customButton: {
    backgroundColor: "#F4D26E",
    opacity: 0.7,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  marginBottom: {
    textAlign: "center",
    marginHorizontal: 20,
  },
});
