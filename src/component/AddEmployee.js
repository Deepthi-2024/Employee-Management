import React, { Component } from 'react'
import axios from 'axios'
export class AddEmployee extends Component {
    constructor(props) {
      super(props)
      this.state = {
         firstName:"",
         lastName:"",
         age:"",
         salary:""
      }
    }
    addtodb=()=>{
        const {firstName,lastName,age,salary} = this.state
        axios.post('http://localhost:3000/emp-api',{
            firstName:firstName,
            lastName:lastName,
            age:age,
            salary:salary
        }).then(res=>{
            console.log(res)
            alert("Data Added successfully")
        }).catch(err=>{
            console.log(err)
        })
    }
  render() {
    const {firstName,lastName,age,salary} = this.state
    return (
      <div>
      <form className='form-add' onSubmit={this.addtodb}>
        <label>FirstName</label>
        <input value={firstName} onChange={(e)=>{this.setState({firstName:e.target.value})}} required/><br></br>
        <label>LastName</label>
        <input value={lastName} onChange={(e)=>{this.setState({lastName:e.target.value})}} required/><br></br>
        <label>Age</label>
        <input value={age} onChange={(e)=>{this.setState({age:e.target.value})}} required/><br></br>
        <label>Salary</label>
        <input value={salary} onChange={(e)=>{this.setState({salary:e.target.value})}} required/><br></br>
        <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddEmployee