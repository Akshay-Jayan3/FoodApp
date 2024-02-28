import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 150,
    margin:8,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    marginVertical: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  backgroundImage: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 24,
    right: 16,
    resizeMode: 'contain', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  textWrapper: {
    zIndex: 1,
    backgroundColor: "transparent",
    display: "flex",
    gap: 10,
  },
  maintext: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: "#fff",
    fontSize: 14,
  },
});
