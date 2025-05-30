
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Profissional() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/450" }} // Altere para sua imagem
          style={styles.avatar}
        />
        <Text style={styles.nome}>Tarcyane Cardoso Anjos</Text>
        <Text style={styles.formacao}>
          Desenvolvedor de Sistemas - 3º ano do Ensino Médio
        </Text>
        <Text style={styles.linha}>_______________________________________</Text>

        <View style={styles.infoContainer}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.infoText}>16 anos</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="mail-open" size={24} color="white" />
          <Text style={styles.infoText}>Tarcyane.anjos@escola.pr.gov.br</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="call-outline" size={24} color="white" />
          <Text style={styles.infoText}>(42) 9128-8138</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="location" size={24} color="white" />
          <Text style={styles.infoText}>Ponta Grossa / PR</Text>
        </View>

        <Text style={styles.sectionTitle}>Formação Escolar</Text>
        <Text style={styles.sectionText}>
          • Ensino Médio Integrado - Técnico em Desenvolvimento de Sistemas{"\n"}
          • Colégio Estadual de Ponta Grossa – PR
        </Text>

        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <Text style={styles.sectionText}>
          • Desenvolvimento de aplicativo escolar com React Native{"\n"}
          • Freelancer: Criação de páginas web com HTML e CSS
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  formacao: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 16,
  },
  linha: {
    color: "gray",
    marginBottom: 16,
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  infoText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    flexShrink: 1,
  },
  sectionTitle: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  sectionText: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
});

