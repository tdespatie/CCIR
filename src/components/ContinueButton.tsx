import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Define the types for the props this component will accept
interface ContinueButtonProps {
  validated: boolean; // To toggle opacity and disable state
  handleContinue: () => void; // Function to handle button press
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  validated,
  handleContinue,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: validated ? 1 : 0.5}]}
      disabled={!validated}
      onPress={handleContinue}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  );
};

// Define styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ContinueButton;
