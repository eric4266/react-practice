import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
      name: '',
      phone: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
          name: '',
          phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="Input"
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <input className="Input"
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                />
                <button className="Input" type="submit">등록</button>
                <div className="Value">{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;