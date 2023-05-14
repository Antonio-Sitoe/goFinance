import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export function Profile() {
  return (
    <View>
      <Text testID="title">Perfil</Text>
      <TextInput
        testID="input-name"
        value="Antonio"
        placeholder="Nome"
        autoCorrect={false}
      />
      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        value="Sitoe"
        autoCorrect={false}
      />
      <Button title="Salvar" />
    </View>
  );
}
