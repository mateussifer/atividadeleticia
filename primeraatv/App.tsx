import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

const App = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const saudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Olá, {nome || "Usuário"}!</Text>
      <Image
        source={{ uri: "https://www.shutterstock.com/image-vector/bemvindo-welcome-brazilian-portuguese-hand-600nw-2006151056.jpg" }}
        style={styles.image}
      />
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button
        title="Saudar"
        onPress={() => nome && setMensagem(`${saudacao()}, ${nome}!`)}
      />
      <Button title="Limpar" onPress={() => { setNome(""); setMensagem(""); }} />
      {mensagem ? <Text style={{ marginTop: 20 }}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default App;
