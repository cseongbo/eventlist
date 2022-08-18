// import './App.css';
import React, { Component } from 'react'
import CBox from './CBox';
import MultiForm from './MultiForm';
import SimpleForm from './SimpleForm';

class TestA extends Component {
  constructor(props) {
    super(props)
    this.state = { text : '안녕하세요' }
    // 상태(state) : 화면에 출력하고 싶은 것
    // this.setState({<키> : <키값>}) // 상태를 변경 : render() + 화면에 반영됨
    setTimeout(() => {
      this.setState({text : '안녕히가세요'})
    }, 1000)
  }
  render() {
    return <h1>{this.state.text}</h1>
  }
}

function App() {
/*
  const list = [{
    id : 1,
    name : '홍길동',
    age : 20
  },
  {
    id : 2,
    name : '홍길순',
    age : 30
  }]

  class Listitem extends Component {
    handleClickName(event) {
      alert(this.props.item.name)
    }

    handleClickAge(event) {
      alert(this.props.item.age)
    }
    render() {
      return (
      <li>
        <p onClick={this.handleClickName.bind(this)}> 이름 : {this.props.item.name}</p>
        <p onClick={this.handleClickAge.bind(this)}> 나이 : {this.props.item.age}</p>
      </li>
      )
    }
  }

  class List extends Component {
    render() {
      const itemList = this.props.list.map((item, index) => (
        <Listitem item={item} key={item.id} />
      ))
      return (
        <ul>{itemList}</ul>
      )
    }
   
  }
*/
  return (
    <div className="App">
      {/* <List list={list} /> */}
      <CBox label = 'Apple' />
      <CBox label = 'Banana' />
      <CBox label = 'Orange' />
      <TestA />
      <SimpleForm />
      <MultiForm />
    </div>
  );
}

export default App;
