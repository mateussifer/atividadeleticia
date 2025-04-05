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
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, {nome || "Usuário"}!</Text>
      <Image
        source={{
          uri: "https://cdn.awsli.com.br/600x450/2618/2618163/produto/253864569/flork---bem-vindo-preto-88w0whifo1.png",
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <View style={styles.botoes}>
        <Button
          title="Saudar"
          onPress={() => nome && setMensagem(`${saudacao()}, ${nome}!`)}
        />
        <Button
          title="Limpar"
          onPress={() => {
            setNome("");
            setMensagem("");
          }}
        />
      </View>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
});

export default App;
