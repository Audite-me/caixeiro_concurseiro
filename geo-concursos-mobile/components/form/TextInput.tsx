import {
  TextInput as TextInputBase,
  TextInputProps,
  ViewStyle,
} from "react-native";

export function TextInput(props: TextInputProps) {
  return <TextInputBase {...props} style={styles} />;
}

const styles: ViewStyle = {
  borderRadius: 4,
  borderColor: "#667085",
  borderWidth: 1,
  paddingHorizontal: 14,
  paddingVertical: 10,
};
