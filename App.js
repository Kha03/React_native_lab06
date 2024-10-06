import { StyleSheet, View } from "react-native";
import Screen1 from "./screens/screen_1";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
