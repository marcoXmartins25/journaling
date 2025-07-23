import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Primeiro teste de react native</Text>
      <Button title="Seja feliz" onPress={() => alert("Você aceitou ser feliz")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
