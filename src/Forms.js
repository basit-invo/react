import React from 'react';
import db from './firebase';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          gender: '',
          message: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const name = target.name;
      const nameVal = target.value;
      this.setState({
        [name]: nameVal
      });
    }
  
    handleSubmit(event) {
      console.log(this.state)
      db.collection("users")
      .add(this.state)
      .then(()=>{alert("data added!!!")})
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="w-1/4 m-auto" onSubmit={this.handleSubmit}>
            <input name="name"
            className="border w-full m-2 p-1" 
            placeholder="name" 
            type="text" 
            value={this.state.name} 
            onChange={this.handleChange} />

            Male
            <input
            className="m-1"
            value="male"
            name="gender"
            type="radio"
            onChange={this.handleChange}
            />
            Female
            <input
            className="m-1"
            value="femlae"
            name="gender"
            type="radio"
            onChange={this.handleChange}
            />

            <textarea name="message"
            className="border w-full m-2 p-1" 
            value={this.state.message} 
            onChange={this.handleChange} 
            placeholder="Message" />

          <input 
          className="border w-full m-2 p-1" 
          type="submit" 
          value="Submit" />

        </form>
      );
    }
  }

  export default NameForm;
