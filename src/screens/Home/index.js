import { Container, ViewInput, Input, ViewIcon, FlatList } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import firebase from "firebase";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Register from "../Register";
import List from "./List";

import Button from "../../components/Button";
//import Input from "../../components/Input";
import ReturnButton from "../../components/ReturnButton";

let tasks = [
  { key: "1", nome: "Comprar coca-cola" },
  { key: "2", nome: "Beber a coca-cola" },
  { key: "3", nome: "Aprender React-Native" },
  { key: "4", nome: "Cagar" },
  { key: "5", nome: "Comprar Bateria" },
  { key: "6", nome: "Dormir" },
];

export default function Home() {
  const routes = useRoute();
  const [user, setUser] = useState(null);
  const [task, setTask] = useState("");

  // if (!user) {
  //   return <Register changeStatus={(user) => setUser(user)} />;
  // }

  async function logout() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Register");
      });
  }

  function handleRemove(key) {
    console.log(key);
  }

  function handleEdit(data) {
    console.log(data);
  }

  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Container>
      <ViewInput>
        <Input
          onChangeText={(e) => setTask(e)}
          value={task}
          keyboardType="email-address"
          autoCapitalize={"none"}
          placeholder="O que vai fazer hoje?"
          placeholderTextColor="#888"
        />
        <ViewIcon>
          <Ionicons name="add-circle" size={30} color={theme.color.primary} />
        </ViewIcon>
      </ViewInput>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <List data={item} handleRemove={handleRemove} handleEdit={handleEdit} />
        )}
      />
      {/* <Button text={"Logout"} onPress={() => logout()} /> */}
    </Container>
  );
}
