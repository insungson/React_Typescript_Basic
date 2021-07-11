import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

// 참고로 styled components 는 type이 붙는데.. 이것도 설치해야 타입스크립트에서 사용이 가능하다
// 아래와 같이 styled component의 themecolor 속성과 디폴트 값도 정하면 하부 컴포넌트에선 쉽게 사용이 가능하다..
// https://styled-components.com/docs/api#typescript  설정법은 여기 나와있다.
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

