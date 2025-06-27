import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Image, Button, Pressable, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Curriculo() {
  const [image, setImage] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    photo: require("../../assets/images/react-logo.png"),
    name: "Tarcyane Cardoso Anjos", 
    age: "16", 
    email: "tarcyane.anjos.com",
    phone: "(42) 99960-0395",
    location: "Ponta Grossa / PR"
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flexOne}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.containerPhoto}>
            <Pressable onPress={pickImage}>
              <Image source={image == null ? profile.photo : image} style={styles.photo} />
            </Pressable>
            <Button title="Trocar imagem" onPress={pickImage} color="#4A90E2" />
          </View>
          <View style={styles.containerNome}>
            <TextInput
              style={[styles.nome, styles.textoDados]}
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              placeholder="Nome"
              placeholderTextColor="#A9A9A9" 
            />
          </View>
          <Text style={styles.linha}>
            _______________________________________
          </Text>
          <View style={styles.containerDados}>
            <Ionicons name="person" size={22} color="#4A90E2" accessibilityLabel="Idade" />
            <TextInput
              style={styles.textoDados}
              value={profile.age}
              onChangeText={(text) => setProfile({ ...profile, age: text })}
              keyboardType="numeric"
              placeholder="Idade"
              placeholderTextColor="#A9A9A9"
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="mail" size={22} color="#4A90E2" accessibilityLabel="Email" />
            <TextInput
              style={styles.textoDados}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Email"
              placeholderTextColor="#A9A9A9"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="call" size={22} color="#4A90E2" accessibilityLabel="Telefone" />
            <TextInput
              style={styles.textoDados}
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              placeholder="Telefone"
              placeholderTextColor="#A9A9A9"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.containerDados}>
            <Ionicons name="home" size={22} color="#4A90E2" accessibilityLabel="Localização" />
            <TextInput
              style={styles.textoDados}
              value={profile.location}
              onChangeText={(text) => setProfile({ ...profile, location: text })}
              placeholder="Localização"
              placeholderTextColor="#A9A9A9"
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#2C3E50", 
    padding: 15,
  },
  containerConteudo: {
    padding: 20,
    backgroundColor: "#34495E", 
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#4A90E2", 
    alignItems: "center",
  },
  containerPhoto: {
    marginBottom: 15,
    alignItems: "center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4A90E2", 
  },
  containerNome: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  nome: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A90E2", 
  },
  linha: {
    color: "#BDC3C7", 
    fontSize: 18,
    marginVertical: 15,
    textAlign: "center",
  },
  containerDados: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textoDados: {
    marginLeft: 10,
    color: "#ECF0F1", 
    fontSize: 20,
    flexShrink: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#4A90E2", 
    width: "70%",
  },
});

