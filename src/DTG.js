import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// L1's
// Royal Canadian Navy (RCN)
// Canadian Army (CA)
// Royal Canadian Air Force (RCAF)
// Canadian Special Operations Forces Command (CANSOFCOM)
// Military Personnel Command (MPC)
// Defence Intelligence
// Defence Research and Development Canada (DRDC)
// Chief of Military Personnel (CMP)

// L2's
// RCN
// Maritime Forces Atlantic (MARLANT)
// Maritime Forces Pacific (MARPAC)
// Canadian Submarine Force
// Naval Reserve

// Army
// 1st Canadian Division
// 3rd Canadian Division
// 2nd Canadian Division
// Royal Canadian Armoured Corps (RCAC)
// Royal Canadian Infantry Corps (RCIC)
// Royal Canadian Artillery (RCA)
// Canadian Special Operations Regiment (CSOR)
// Combat Support and Combat Service Support units

// Air Force
// 1 Canadian Air Division
// 2 Canadian Air Division
// Canadian NORAD Region (CNR)
// Air Mobility Group (AMG)
// Canadian Forces Air Navigation School
// Royal Canadian Air Cadets

// CANSOFCOM
// Joint Task Force 2 (JTF2)
// Canadian Special Operations Regiment (CSOR)
// 4th Canadian Division (CANSOFCOM)

// MilPersCom
// Canadian Forces Recruiting Group
// Canadian Forces Training Group
// Director Military Career Management

// DRDC
// DRDC – Ottawa
// DRDC – Atlantic
// DRDC – Pacific

// Defence Intelligence
// Canadian Forces Intelligence Command (CFINTCOM)

const LSelection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Chain of Command Selection
        </Text>
      <Text style={styles.subtitle}>
        CCIR report will be directed accordingly
      </Text>

      <Text style={styles.dropdownLabel}>L1 Selection{'\n'} (Assistant Deputy Minister)</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      <Text style={styles.dropdownLabel}>L2 Selection{'\n'} (Director General / Formation Commander)</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Value" value="value" />
        {/* Add more options here */}
      </Picker>

      <Text style={styles.dropdownLabel}>L3 Selection{'\n'} (Director / Unit Commander)</Text>
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
    textAlign: 'center'
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

export default LSelection;
