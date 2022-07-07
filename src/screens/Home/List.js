import styled from "styled-components/native";
import { useTheme } from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

const ViewList = styled.View`
  flex: 1;
  width: 100%;
  background-color: #008f8c;
  margin: 5px 0;
  border-radius: 10px;
  flex-direction: row;
`;

export const ViewIcon = styled.Pressable`
  width: 15%;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const PressableText = styled.Pressable`
  width: 85%;
  padding: 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export default function List({ data, handleRemove, handleEdit }) {
  const theme = useTheme();
  return (
    <ViewList>
      <ViewIcon onPress={() => handleRemove(data.key)}>
        <Ionicons name="remove-circle" size={25} color={theme.color.white} />
      </ViewIcon>
      <PressableText onPress={() => handleEdit(data)}>
        <Text>{data.nome}</Text>
      </PressableText>
    </ViewList>
  );
}
