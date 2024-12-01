import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import InputField from '../components/InputFields';
import ContinueButton from '../components/ContinueButton';

const OrgSelectionRevised: React.FC<any> = ({navigation}) => {
  const [reportingOrg, setReportingOrg] = useState<string>('');
  const [ccirComd, setCcirComd] = useState<string>('');
  const [ccirOptions, setCcirOptions] = useState<any[]>([]); // Options for CCIR Comd picker
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportSubtitle, setReportSubtitle] = useState<string>('');
  const [orgData, setOrgData] = useState<any>(null);
  const [validated, setValidated] = useState<boolean>(false);

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

  // Update CCIR Comd options when Reporting Org changes
  React.useEffect(() => {
    if (reportingOrg && orgData) {
      // Find the selected Reporting Org's L2 organizations
      const selectedOrg = orgData.find((org: any) => org.name === reportingOrg);
      if (selectedOrg && selectedOrg.L2Organizations) {
        setCcirOptions(selectedOrg.L2Organizations); // Set L2 options
      } else {
        setCcirOptions([]); // Reset if no L2 organizations
      }
    } else {
      setCcirOptions([]);
    }
  }, [reportingOrg, orgData]);

  React.useEffect(() => {
    if (reportSubtitle && reportTitle && reportingOrg && ccirComd) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [reportSubtitle, reportTitle, reportingOrg, ccirComd]);

  const handleContinue = () => {
    // Pass the state to the next screen
    navigation.navigate('DateTimeGroup', {
      reportingOrg,
      ccirComd,
      reportTitle,
      reportSubtitle,
    });
  };

  return (
    <View style={styles.outerContainer}>
      {/* Title Heading */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Command Selection</Text>
      </View>
      <View style={styles.container}>
        {/* Dropdown: Reporting Org */}
        <Text style={styles.title}>Reporting Organization</Text>
        <Picker
          selectedValue={reportingOrg}
          onValueChange={itemValue => setReportingOrg(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select an organization" value="" />
          {orgData &&
            orgData.map((org: any) => (
              <Picker.Item key={org.name} label={org.name} value={org.name} />
            ))}
        </Picker>

        {/* Dropdown: CCIR Comd */}
        <Text style={styles.title}>CCIR Command</Text>
        <Picker
          selectedValue={ccirComd}
          onValueChange={itemValue => setCcirComd(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select a sub-organization" value="" />
          {ccirOptions.map((subOrg: any) => (
            <Picker.Item
              key={subOrg.name}
              label={subOrg.name}
              value={subOrg.name}
            />
          ))}
        </Picker>

        {/* Dropdown: Report Title */}
        <InputField
          label="Report Title"
          placeholder="Enter report title"
          value={reportTitle}
          onChangeText={text => setReportTitle(text)}></InputField>

        {/* Dropdown: Report Sub-Title */}
        <InputField
          label="Report Sub-Title"
          placeholder="Enter report subtitle"
          value={reportSubtitle}
          onChangeText={text => setReportSubtitle(text)}></InputField>

        {/* Button */}
        <ContinueButton validated={validated} handleContinue={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 40, // Adjust for safe area or status bar
    paddingBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: 300,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default OrgSelectionRevised;
