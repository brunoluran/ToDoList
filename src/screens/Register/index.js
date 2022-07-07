import { Container, KeyboardAvoidingView, Text } from './style';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import firebase from '../../Firebase';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Register() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');

  const [signUpScreen, setSignUpScreen] = useState(false);

  async function signUp() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, psw)
      .then(() => {
        alert('Cadastro realizado!');
      })
      .catch((error) => {
        if (error.code == 'auth/weak-password') {
          alert('Senha fraca');
          return;
        }
        if (error.code == 'auth/invalid-email') {
          alert('Email inválido');
          return;
        }
      });
    setEmail('');
    setPsw('');
  }

  async function SignIn() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, psw)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        alert('Dados incorretos');
      });
  }

  return (
    <Container signUpScreen={signUpScreen}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        {!signUpScreen && (
          <>
            <Input onChangeText={(e) => setEmail(e)} value={email} placeholder='Email' placeholderTextColor='#aaa' />
            <Input onChangeText={(e) => setPsw(e)} value={psw} placeholder='Senha' placeholderTextColor='#aaa' secureTextEntry={true} />
            <Button text='Login' onPress={SignIn} bgColor={theme.color.primary} textColor={theme.color.white} />
            <Text textSize='18px'>ou</Text>
            <Button text='Cadastre-se' onPress={() => setSignUpScreen(true)} bgColor={theme.color.white} textColor={theme.color.secondary} />
          </>
        )}
        {signUpScreen && (
          <>
            <Input onChangeText={(e) => setEmail(e)} value={email} placeholder='Email' placeholderTextColor='#fff' color='#fff' />
            <Input onChangeText={(e) => setPsw(e)} value={psw} placeholder='Senha' placeholderTextColor='#fff' secureTextEntry={true} color='#fff' />
            <Button text='Cadastre-se' onPress={signUp} bgColor={theme.color.white} textColor={theme.color.secondary} />
            <Text textSize='18px' color='#fff'>
              ou
            </Text>
            <Button text='Faça o login' onPress={() => setSignUpScreen(false)} bgColor={theme.color.secondary} textColor={theme.color.white} />
          </>
        )}
      </KeyboardAvoidingView>
    </Container>
  );
}
