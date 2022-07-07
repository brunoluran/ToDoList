import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActivityIndicator = styled.ActivityIndicator``;

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator color={'#000'} size='large' />
    </Container>
  );
}
