import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 0 10px;
  border: #e1e1e1;
  margin: 5px 0;
  color: ${(props) => (props.color ? `${props.color}` : '#000')};
  font-size: 14px;
`;

export default function Input({ onChangeText, value, ref, placeholder, placeholderTextColor, secureTextEntry, color }) {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      color={color}
    />
  );
}
