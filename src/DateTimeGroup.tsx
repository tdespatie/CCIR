import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const DateTimeGroup: React.FC<any> = ({route}) => {
  const {reportingOrg, ccirComd, reportTitle, reportSubtitle} = route.params;

  const handleContinue = () => {
    // Pass the state to the next screen
    // navigation.navigate('NextScreen', {
    //   reportingOrg,
    //   ccirComd,
    //   reportTitle,
    //   reportSubtitle,
    // });
  };

  return (
    <View style={styles.outerContainer}>
      {/* Title Heading */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Date Time and Location</Text>
      </View>
      <View style={styles.container}>
        {/* </View> */}
        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
    textAlign: 'center',
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

export default DateTimeGroup;
