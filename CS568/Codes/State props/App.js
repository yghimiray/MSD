import logo from './logo.svg';
import './App.css';

import React from 'react';
import Student from './Student'

//immutable
//conditional
//map
//toggle

class App extends React.Component {

  

  state = {
    students: [
      { id: '1', name: 'john', age: 15, lname: 'doe1' },
      { id: '2', name: 'alex', age: 16, lname: 'doe2' },
      { id: '3', name: 'alice', age: 17, lanme: 'doe3' }
    ],
    isVisible: true
  }

  makeOlder = (id) => {
    let result = this.state.students.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.age = copy.age + 1;
        return copy;
      }
      return item;
    });
    this.setState({ students: result })
  }

  changeName = (id, event) => {
    let result = this.state.students.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.name = event.target.value
        return copy;
      }
      return item;
    });
    this.setState({ students: result })
  }

  toggleButtonEventHandler = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    let students = null;
    if (this.state.isVisible) {
      students = (
        this.state.students.map((item) => {
          return (
            <Student
              key={item.id}
              name={item.name}
              age={item.age}
              lname={item.lname}
              makeOlder={() => { this.makeOlder(item.id) }}
              changeName={(event) => { this.changeName(item.id, event) }}
            >
            </Student>
          )
        })
      )
    }
    return (
      <div>
        <input type='button' value='Toggle Students'
          onClick={() => { this.toggleButtonEventHandler() }} />
        {
          students
        }



      </div>


    )
  }
}


export default App;


