import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';

interface WelcomeScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleContinue = () => {
    if (checked) {
      navigation.navigate('OrgSelectionRevised');
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../assets/images/CanadianArmyLogo.jpeg')} style={styles.logo} />

      {/* Welcome Message */}
      <Text style={styles.title}>Welcome to the CCIR Portal</Text>
      <Text style={styles.subtitle}>
        This application is to be used for effective and timely reporting of critical information in order to ensure
        successful decision making and situational tracking by Comd CA and HQ.
      </Text>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox 
          isChecked={checked} 
          onClick={() => {
            setChecked(!checked);
          }} 
        />
        <Text style={styles.checkboxText}>I will only input Protected A data</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, { opacity: checked ? 1 : 0.5 }]}
        onPress={handleContinue}
        disabled={!checked}
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
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

export default WelcomeScreen;
