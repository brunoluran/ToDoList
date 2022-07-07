import styled from "styled-components/native";

import Button from "./Button";

const ViewModal = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
`;

const ElementModal = styled.View`
  width: 100%;
  height: 30%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #fff;
  align-items: center;
  padding: 20px;
`;

const AreaModal = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const AreaText = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #008f8c;
  font-size: ${(props) => (props.fontSize ? "18px" : "14px")};
  font-weight: ${(props) => (props.fontWeight ? "bold" : "normal")};
`;

export default function Modal({ onPress, title, text }) {
  return (
    <ViewModal>
      <ElementModal>
        <AreaModal>
          <AreaText>
            <Text fontWeight fontSize>
              {title}
            </Text>
            <Text>{text}</Text>
          </AreaText>
          <Button text={"Tentar novamente"} textColor={"#fff"} onPress={onPress} />
        </AreaModal>
      </ElementModal>
    </ViewModal>
  );
}
