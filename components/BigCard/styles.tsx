import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        height:100,
        borderRadius: 8,
        marginVertical: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // for Android shadow
      },
  });