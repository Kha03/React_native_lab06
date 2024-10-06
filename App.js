import { ScrollView, StyleSheet, View } from "react-native";
import Screen1 from "./screens/screen_1";
import Screen2 from "./screens/screen_2";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Screen1 />
        <Screen2 />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
