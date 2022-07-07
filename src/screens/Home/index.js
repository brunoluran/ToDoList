import { Container, Text } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import firebase from 'firebase';
import { useState, useEffect } from 'react';

import Button from '../../components/Button';
import ReturnButton from '../../components/ReturnButton';

export default function Home() {
  const routes = useRoute();
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  async function logout() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Register');
      });
  }

  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Container>
      <ReturnButton onPress={() => navigation.goBack()} />
      <Text>Home</Text>
      <Button text={'Logout'} onPress={() => logout()} />
    </Container>
  );
}
