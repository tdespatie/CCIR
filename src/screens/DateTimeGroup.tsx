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
import InputField from '../components/InputFields';
import ContinueButton from '../components/ContinueButton';

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
    if (
      Number(latitude) >= -90 &&
      Number(latitude) <= 90 &&
      Number(longitude) >= -180 &&
      Number(longitude) <= 180
    ) {
      console.log('Valid coordinates:', {latitude, longitude});
    } else {
      Alert.alert(
        'Invalid coordinates',
        'Please confirm the coordinates you entered',
      );
    }
  };

  React.useEffect(() => {
    if (latitude && longitude) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [latitude, longitude]);

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
        <InputField
          label="Enter Latitude"
          placeholder="Enter Latitude"
          value={latitude}
          onChangeText={lat => setLatitude(lat)}
        />

        <InputField
          label="Enter Longitude"
          placeholder="Enter Longitude"
          value={longitude}
          onChangeText={long => setLongitude(long)}
          style={{
            input: {marginBottom: 60},
          }}
        />
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
});

export default DateTimeGroup;
