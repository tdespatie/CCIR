import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

// Define the types for the props this component will accept
interface InputFieldProps {
  label: string; // Label for the input field
  placeholder: string; // Placeholder text
  value: string; // Current value of the input
  onChangeText: (text: string) => void; // Callback for text input changes
  style?: {
    [key: string]: StyleProp<ViewStyle | TextStyle>; // Allow any kind of style with a key-value structure
  };
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  style = {},
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.textInput, style['input']]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    width: 270,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default InputField;
