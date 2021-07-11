import React from 'react';
import styled from 'styled-components';

//style 을 처리하는 것이라면 아래와 같이 inline props로 처리하는게 좋다. {isBlue: boolean} 방식
const Container = styled.span<{isBlue: boolean}>`
  color: ${props => (props.isBlue ? props.theme.blueColor : "black")}
`;

//functional component 일땐 아래와 같이 interface로 처리하는게 좋고.
interface IProps {
  count: number;
}

const Number : React.FunctionComponent<IProps> = ({count}) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;