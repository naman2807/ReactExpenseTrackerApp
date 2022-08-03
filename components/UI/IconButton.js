import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Ionicons
          style={({ pressed }) => pressed && styles.pressed}
          name={icon}
          size={size}
          color={color}
          onPress={onPress}
        />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },

  pressed: {
    opacity: 0.75,
  },
});
