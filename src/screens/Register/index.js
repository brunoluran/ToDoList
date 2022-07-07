import { Container, KeyboardAvoidingView, Text, Modal } from "./style";
import { Platform, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { useState } from "react";
import firebase from "../../Firebase";

import Button from "../../components/Button";
import Input from "../../components/Input";

import ModalItem from "../../components/Modal";

export default function Register({ changeStatus }) {
  const navigation = useNavigation();
  const theme = useTheme();

  const [signUpScreen, setSignUpScreen] = useState(false);
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  async function Register() {
    if (signUpScreen == false) {
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, psw)
        .then((user) => {
          changeStatus(user.user.uid);
        })
        .catch((error) => {
          setError(true);
        });
      setEmail("");
      setPsw("");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, psw)
        .then((user) => {
          changeStatus(user.user.uid);
        })
        .catch((error) => {
          if (error.code == "auth/weak-password") {
            Alert.alert("Mensagem de erro", "Senha fraca");
            return;
          }
          if (error.code == "auth/invalid-email") {
            Alert.alert("Mensagem de erro", "E-mail inválido");
            return;
          }
        });
      setEmail("");
      setPsw("");
    }
  }

  //bruno@teste.com - 101010

  return (
    <Container signUpScreen={signUpScreen}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null}>
        <Input
          onChangeText={(e) => setEmail(e)}
          value={email}
          keyboardType="email-address"
          autoCapitalize={"none"}
          placeholder="Email"
          placeholderTextColor={signUpScreen ? "#fff" : "#888"}
          color={signUpScreen ? "#fff" : "#888"}
        />
        <Input
          onChangeText={(e) => setPsw(e)}
          value={psw}
          placeholder="Senha"
          placeholderTextColor={signUpScreen ? "#fff" : "#888"}
          secureTextEntry={true}
          color={signUpScreen ? "#fff" : "#888"}
        />

        <Button
          text={signUpScreen ? "Cadastre-se" : "Login"}
          onPress={Register}
          bgColor={signUpScreen ? theme.color.white : theme.color.secondary}
          textColor={signUpScreen ? theme.color.secondary : theme.color.white}
        />
        <Text textSize="14px" color={signUpScreen ? "#fff" : "#888"}>
          ou
        </Text>
        <Button
          text={signUpScreen ? "Faça o Login" : "Cadastre-se"}
          onPress={signUpScreen ? () => setSignUpScreen(false) : () => setSignUpScreen(true)}
          bgColor={signUpScreen ? theme.color.secondary : theme.color.white}
          textColor={signUpScreen ? theme.color.white : theme.color.secondary}
        />
        {error && (
          <Modal visible={error} animationType="fade" transparent={true}>
            <ModalItem
              onPress={() => setError(false)}
              title={"Dados inválidos"}
              text={"Revise os dados e tente novamente"}
            />
          </Modal>
        )}
      </KeyboardAvoidingView>
    </Container>
  );
}
