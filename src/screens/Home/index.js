import { Container, ViewInput, Input, PressableIcon, FlatList, Modal } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import firebase from '../../Firebase';
import { useState, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Register from '../Register';
import List from './List';

import ModalItem from '../../components/Modal';

export default function Home() {
  const routes = useRoute();
  const inputRef = useRef(null);

  const [user, setUser] = useState(null);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [user]);

  async function getData() {
    if (!user) {
      return;
    }

    await firebase
      .database()
      .ref('tarefas')
      .child(user)
      .once('value', (snapshot) => {
        setTask([]);
        snapshot?.forEach((item) => {
          let data = {
            key: item.key,
            name: item.val().name,
          };
          setTask((oldTask) => [...oldTask, data]);
        });
      });
  }

  function insertData() {
    if (newTask === '') {
      setError(true);
      return;
    }

    if (key !== '') {
      firebase
        .database()
        .ref('tarefas')
        .child(user)
        .child(key)
        .update({
          name: newTask,
        })
        .then(() => {
          const taskIndex = task.findIndex((item) => item.key === key);
          const taskClone = task;
          taskClone[taskIndex].name = newTask;
          setTask([...taskClone]);
        });
      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }

    let tarefas = firebase.database().ref('tarefas').child(user);
    let chave = tarefas.push().key;

    tarefas
      .child(chave)
      .set({
        name: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          name: newTask,
        };
        setTask((oldTask) => [...oldTask, data]);
      });

    Keyboard.dismiss();
    setNewTask('');
  }

  function handleRemove(key) {
    firebase
      .database()
      .ref('tarefas')
      .child(user)
      .child(key)
      .remove()
      .then(() => {
        const filterList = task.filter((item) => item.key !== key);
        setTask(filterList);
      });
  }

  function handleEdit(data) {
    setKey(data.key);
    setNewTask(data.name);
    inputRef.current.focus();
  }

  function cancelEdit() {
    setKey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  if (!user) {
    return <Register changeStatus={(user) => setUser(user)} />;
  }

  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Container>
      <ViewInput>
        <Input
          onChangeText={(e) => setNewTask(e)}
          value={newTask}
          autoCapitalize={'none'}
          placeholder='O que vai fazer hoje?'
          placeholderTextColor='#888'
          ref={inputRef}
        />
        {key.length > 0 && (
          <PressableIcon onPress={() => insertData()}>
            <Ionicons name='ios-close-circle' size={30} color={'#f00'} onPress={() => cancelEdit()} key={key} />
          </PressableIcon>
        )}
        <PressableIcon onPress={() => insertData()}>
          <Ionicons name='add-circle' size={30} color={theme.color.primary} />
        </PressableIcon>
      </ViewInput>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <List data={item} handleRemove={handleRemove} handleEdit={handleEdit} />}
      />
      {error && (
        <Modal visible={error} animationType='fade' transparent={true}>
          <ModalItem onPress={() => setError(false)} title={'Campo vazio'} text={'Preencha o campo para adicionar novas tarefas!'} />
        </Modal>
      )}
    </Container>
  );
}
