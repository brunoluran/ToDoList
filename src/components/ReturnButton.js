import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useTheme } from 'styled-components';

const Container = styled.View`
  width: 100%;
  margin-top: ${0 + getStatusBarHeight()}px;
  padding-bottom: 10px;
  //left: -5px;
`;

export default function ReturnButton({ onPress }) {
  const theme = useTheme();
  return (
    <Container>
      <Ionicons name='ios-chevron-back' color={theme.color.secondary} size={35} onPress={onPress} />
    </Container>
  );
}
