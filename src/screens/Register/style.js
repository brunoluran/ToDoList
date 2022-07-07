import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => (props.signUpScreen ? '#008F8C' : '#fff')};
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: ${(props) => (props.textSize ? `${props.textSize}` : '28px')};
  color: ${(props) => (props.color ? `${props.color}` : '#000')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '10px')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : '0')};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
