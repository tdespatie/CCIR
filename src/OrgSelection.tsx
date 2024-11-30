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
  const [orgData, setOrgData] = useState<any>(null);

  React.useEffect(() => {
    // Load JSON data (adjust path if hosted remotely)
    const loadOrgData = async () => {
      try {
        const response = require('../assets/data/OrganizationalData.json'); // Use fetch if the file is remote
        setOrgData(response.L1Organizations);
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    };
    loadOrgData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Dropdown: Reporting Org */}
      {/* <View style={{borderWidth:10, borderColor: 'blue', borderStyle: 'solid', marginBottom: '20'}}> */}
        <Text style={styles.title}>Reporting Org</Text>
        <Picker
          selectedValue={reportingOrg}
          onValueChange={(itemValue) => setReportingOrg(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select an organization" value="" />
        {orgData &&
          orgData.map((org: any) => (
            <Picker.Item key={org.name} label={org.name} value={org.name} />
          ))}
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
      {/* </View> */}
      {/* Button */}
      <TouchableOpacity style={styles.button}>
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
    // borderColor: 'red', 
    // borderStyle: 'solid',
    // borderWidth: 20,
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
    width: 300,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
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

export default OrgSelectionRevised;