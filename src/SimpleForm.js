import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value : '' }
    }

    render() {
        return (
            <form onSubmit={(e) => {
                alert('전송 : ' + this.state.value)
                e.preventDefault()
            }}>
                <input type='text' value={this.state.value}
                    onChange={(e) => {
                        const newValue = e.target.value
                        this.setState({value : newValue})
                    }}
                /> 
                <input type='submit' />
            </form>
        );
    }
}

export default SimpleForm;