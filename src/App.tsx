import React, {Component} from 'react';
import Number from './Number';
import {Input, Form} from './Input';

interface IState {
  counter: number;
  name: string;
}

// 클래스컴포넌트에선 아래와 같이 <props, state> 로 처리해야하고..
// 함수형 컴포넌트에선 아래와 같이 React.FuntionComponent<인터페이스> 로 처리한다
// const Number : React.FunctionComponent<인터페이스> 처럼 처리하면 된다.
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  render(){
    const {counter, name} = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter}/><button onClick={this.add}>Add</button>
        {/* {counter} <button onClick={this.add}>Add</button> */}
      </div>
    );
  };
  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  };

  //아래와 같이 event 에 대해 명확하게 지정해준다면 에러가 발생하지 않을 것이다
  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
    this.setState({
      name: event.currentTarget.value,
    });
  };
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

}

export default App;
