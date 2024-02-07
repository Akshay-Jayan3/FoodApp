import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Button from '@/components/Button';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
const colorScheme = useColorScheme();
export default function Home() {
 
  return (
    <View style={styles.container}>
      <View style={styles.top}><View style={styles.mainTab}><Button title='Offer Food' active={true}/> <Button title='Find Food' active={false}/></View></View>
      <View style={styles.middle} ></View>
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  top: {
    flex: 0.1,
    justifyContent:"center",
    padding:8
  },
  mainTab:{
    flexDirection:"row",
    backgroundColor:Colors[colorScheme ?? 'light'].secondary,
    borderRadius:50
    

  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
