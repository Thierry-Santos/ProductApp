import Styled from 'styled-components/native';

export const Container = Styled.Pressable<{ active: boolean }>`
  width: 22%;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 4px;
  flex-direction: row;
  background-color: ${(props) => props.active ? '#e4e4e4' : '#FFFFFF'}
`;
