import React, { Component } from 'react';

class MultiForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name : '',
            age : '',
            hobby : ''
        }
    }

    render() {
        const doChange = (e) => {
            const value = e.target.value
            const key = e.target.name
            this.setState({
                [key] : value
            })
        }

        return (
            <form onSubmit={() => {
                window.alert(JSON.stringify(this.state))
            }}>
                <input type='text' name='name' value={this.name} onChange={doChange} />  <br></br>
                <input type='text' name='age' value={this.age} onChange={doChange} />  <br></br>
                <input type='text' name='value' value={this.hobby} onChange={doChange} />  <br></br>
                <input type='submit' />
            </form>
        );
    }
}

export default MultiForm;