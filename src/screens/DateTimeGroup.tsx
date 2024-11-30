import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimeGroup: React.FC<any> = ({route}) => {
  const {
    reportingOrg = 'Not specified',
    ccirComd = 'Not specified',
    reportTitle = 'Not specified',
    reportSubtitle = 'Not specified',
  } = route.params || {};

  const [longitude, setLongitude] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date'); // Set initial mode to 'date'
  const [show, setShow] = useState(false); // Track if picker is shown
  const [validated, setValidated] = useState<boolean>(false);

  // Function to handle change in selected date/time
  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate); // Update the selected date or time
    setShow(false); // Close the picker after selection

    // Switch mode after selecting date or time
    if (mode === 'date') {
      setMode('time'); // Change mode to 'time' after selecting a date
      setShow(true); // Show the time picker immediately after selecting the date
    }
  };

  const handleContinue = () => {
    // Pass the state to the next screen
    // navigation.navigate('NextScreen', {
    //   reportingOrg,
    //   ccirComd,
    //   reportTitle,
    //   reportSubtitle,
    // });
    if (
      Number(latitude) >= -90 &&
      Number(latitude) <= 90 &&
      Number(longitude) >= -180 &&
      Number(longitude) <= 180
    ) {
      console.log('Valid coordinates:', {latitude, longitude});
    } else {
      Alert.alert('Invalid coordinates');
    }
  };

  return (
    <View style={styles.outerContainer}>
      {/* Title Heading */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Date Time and Location</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Date & Time</Text>
        <TouchableOpacity
          onPress={() => {
            setShow(true);
            setMode('date');
          }}
          style={styles.dateButton}>
          <Text style={styles.dateButtonText}>
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            display="default"
            onChange={onChangeDate}
          />
        )}

        {/* Location Picker */}
        <Text style={styles.title}>Enter Latitude</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Latitude"
          keyboardType="numeric"
          value={latitude}
          onChangeText={lat => setLatitude(lat)}
        />

        {/* Dropdown: Report Sub-Title */}
        <Text style={styles.title}>Enter Longitude</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Longitude"
          keyboardType="numeric"
          value={longitude}
          onChangeText={long => setLongitude(long)}
        />

        <TouchableOpacity
          style={[styles.button, {opacity: latitude && longitude ? 1 : 0.5}]}
          disabled={!validated}
          onPress={handleContinue}>
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
  dateButton: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    marginBottom: 30,
  },
  dateButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: 200,
    marginVertical: 10,
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
