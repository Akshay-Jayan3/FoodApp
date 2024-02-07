import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Search from '@/components/Search'

export default function Products() {
  return (
    <View style={styles.container}>
      <Search/>
      <Text style={styles.title}>Products</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding:16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
