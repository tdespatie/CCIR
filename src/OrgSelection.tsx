import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface OrgSelectionRevisedProps {
  // navigation: {
  //   goBack: () => void;
  // };
}

const OrgSelectionRevised: React.FC<OrgSelectionRevisedProps> = () => {
  const [reportingOrg, setReportingOrg] = useState<string>('');
  const [ccirComd, setCcirComd] = useState<string>('');
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportSubtitle, setReportSubtitle] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Dropdown: Reporting Org */}
      <Text style={styles.title}>Reporting Org</Text>
      <Picker
        selectedValue={reportingOrg}
        onValueChange={(itemValue) => setReportingOrg(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      {/* Dropdown: CCIR Comd */}
      <Text style={styles.title}>CCIR Comd</Text>
      <Picker
        selectedValue={ccirComd}
        onValueChange={(itemValue) => setCcirComd(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      {/* Dropdown: Report Title */}
      <Text style={styles.title}>Report Title</Text>
      <Picker
        selectedValue={reportTitle}
        onValueChange={(itemValue) => setReportTitle(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      {/* Dropdown: Report Sub-Title */}
      <Text style={styles.title}>Report Sub-Title</Text>
      <Picker
        selectedValue={reportSubtitle}
        onValueChange={(itemValue) => setReportSubtitle(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Report Type</Text>
      </TouchableOpacity>

      {/* Icon or Arrow Below Button */}
      <Text style={styles.arrow}>⬇</Text>
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
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 24,
    color: 'gray',
    marginTop: 10,
  },
});

export default OrgSelectionRevised;