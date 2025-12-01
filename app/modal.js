import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalDetails({ visible, item, onClose }) {
  if (!item) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          
          <Image 
            source={{ uri: item.image?.medium || item.image?.original }}
            style={styles.image}
          />

          <Text style={styles.title}>{item.name}</Text>

          <Text style={styles.summary}>
            {item.summary?.replace(/<[^>]+>/g, "") || "Sem sinopse disponível."}
          </Text>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>FECHAR</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  summary: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 10,
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: "#e50914",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
});
