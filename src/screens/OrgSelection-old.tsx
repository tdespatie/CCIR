import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface OrgSelectionProps {
  navigation: {
    goBack: () => void;
  };
}

const OrgSelection: React.FC<OrgSelectionProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chain of Command Selection</Text>
      <Text style={styles.subtitle}>CCIR report will be directed accordingly</Text>

      <Text style={styles.dropdownLabel}>
        L1 Selection{'\n'} (Assistant Deputy Minister)
      </Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      <Text style={styles.dropdownLabel}>
        L2 Selection{'\n'} (Director General / Formation Commander)
      </Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      <Text style={styles.dropdownLabel}>
        L3 Selection{'\n'} (Director / Unit Commander)
      </Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate back to the previous screen (or to any other screen)
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OrgSelection;