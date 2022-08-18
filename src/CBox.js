import React, { Component } from 'react';

class CBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked : false
        }
    }

    render() {
        //체크되지 않았을때의 상태
        let mark = '□'
        if (this.state.checked) {
            mark = '■'
        }

        const clickHandler = (e) => {
            const newValue = !this.state.checked
            this.setState({
                checked : newValue
        })
        }

        return (
            <div>
                <div onClick={clickHandler}>{mark} {this.props.label}</div>
            </div>
        );
    }
}

export default CBox;