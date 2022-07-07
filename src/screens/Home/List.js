import styled from "styled-components/native";
import { useTheme } from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

const ViewList = styled.View`
  width: 100%;
  background-color: #008f8c;
  border-radius: 10px;
  flex-direction: row;
  padding: 5px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ViewIcon = styled.Pressable`
  width: 15%;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
        <Text>{data.name}</Text>
      </PressableText>
    </ViewList>
  );
}
