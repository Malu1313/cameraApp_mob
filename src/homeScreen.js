import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const HomeScreen = () => {
  const [stateLED, setStateLED] = useState({ value: false });
  const navigation = useNavigation();

  async function ledToggle() {
    try {
      // Faz a requisição da API da Adafruit
      const response = await api.toggleLED({ value: `${!stateLED.value}` });
      setStateLED({ value: !stateLED.value });
      console.log("Resposta:", response.data);
    } catch (error) {
      console.log("Erro", error.response.data);
    }
  }

  const handleCam = () => {
    navigation.navigate("Cam");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 20 }}>
        <Button title="Abrir Câmera" onPress={handleCam} color="pink" />
      </View>
      <View>
        <Button
          title={stateLED.value ? "Desligar o Led" : "Ligar LED"}
          onPress={ledToggle}
          color={stateLED.value ? "red" : "green"}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
