import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Search from "@/components/Search";
import BigCard from "@/components/BigCard";

export default function Products() {
  const data2 = [
    {
      id: "1",
      text: "Breakfast Good Deals",
      backgroundImage: require("../../assets/images/breakfast.jpg"),
    },
    {
      id: "2",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
    {
      id: "3",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
    {
      id: "4",
      text: "Lunch Deals",
      backgroundImage: require("../../assets/images/lunch.jpg"),
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Search />
        <View>{data2 && data2.map((item) => <BigCard item={item} key={item.id}/>)}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
