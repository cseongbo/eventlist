// import './App.css';
import React, { Component } from 'react'
import CBox from './CBox';

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
    </div>
  );
}

export default App;
