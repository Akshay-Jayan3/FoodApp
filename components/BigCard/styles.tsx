import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    minWidth:184,
    margin: 8,
    borderRadius: 8,
    gap:8,
    overflow: 'hidden', // Clip image overflow
    // alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 180, // Adjust the height as needed
    borderRadius: 8,
  },
  details:{
    gap:4
  },
  cardText: {
    fontSize:12
  },
  dishName:{
    fontSize:15,
    fontWeight:"bold"
  },
  price:{
    fontSize:12
  }
});
