import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
  padding-top: ${10 + getStatusBarHeight()}px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const ViewInput = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0 10px;
  border: #e1e1e1;
  margin: 10px 0 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 100%;
  color: #000;
  font-size: 14px;
`;

export const PressableIcon = styled.Pressable`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  //background-color: red;
  margin: 5px;
`;

export const FlatList = styled.FlatList``;

export const Modal = styled.Modal``;
