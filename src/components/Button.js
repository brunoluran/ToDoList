import styled from 'styled-components/native';

const PressableArea = styled.Pressable`
  width: 50%;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : props.theme.color.primary)};
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const PressableText = styled.Text`
  font-size: 18px;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 500)};
  color: ${(props) => (props.textColor ? `${props.textColor}` : props.theme.color.black)};
`;

export default function Button({ text, bgColor, textColor, onPress, fontWeight }) {
  return (
    <PressableArea bgColor={bgColor} onPress={onPress}>
      <PressableText textColor={textColor} fontWeight={fontWeight}>
        {text}
      </PressableText>
    </PressableArea>
  );
}
