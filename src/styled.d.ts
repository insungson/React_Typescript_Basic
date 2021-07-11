//https://styled-components.com/docs/api#typescript 
//위의 링크처럼 타입스크립트에서 스타일드컴포넌트를 사용하는 방법이다.
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}