import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
export default function Main() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] =
    useState<boolean>(false);

  const generatePassword = () => {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = lowerChars + upperChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecialChars) allChars += specialChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }
    setPassword(newPassword);
  };
  const copyPassword = async () => {
    if (password === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please generate password first',
        position: 'top',
      });
      return;
    }
    Clipboard.setString(password);
    Toast.show({
      type: 'success',
      text1: `Password Copied: ${await Clipboard.getString()}`,
      text2: 'You can now paste it anywhere',
      position: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Password Generator</Text>

      <View style={styles.passwordRow}>
        <Text>Password Length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength.toString()}
          onChangeText={text => setPasswordLength(parseInt(text) || 0)}
        />
      </View>

      <View style={styles.passwordRow}>
        <Text>Include Numbers</Text>
        <RadioButton
          value="unchecked"
          status={includeNumbers ? 'checked' : 'unchecked'}
          onPress={() => setIncludeNumbers(!includeNumbers)}
        />
      </View>

      <View style={styles.passwordRow}>
        <Text>Include Special Characters</Text>
        <RadioButton
          value="unchecked"
          status={includeSpecialChars ? 'checked' : 'unchecked'}
          onPress={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </View>

      <View style={styles.passwordRows}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Generated Password
        </Text>
        <TextInput
          style={styles.passwordInput}
          value={password}
          editable={false}
          placeholder="Generated Password"
          placeholderTextColor={'#000'}
        />
      </View>
      <View style={styles.passwordRow}>
        <Button title="Generate Password" onPress={generatePassword} />
        <Button title="Copy Password" onPress={copyPassword} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  passwordInput: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
  },
  input: {
    width: '50%',
    height: 50,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  passwordRows: {
    marginTop: 20,
  },
});
