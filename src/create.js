import { Component } from "react";
import React from "react";
import axios from "axios";
// import Table1 from "./Table";

class Create extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            ph_no:'',
            mail_id:'',
            gender:'',
            medical_condition:'',
            blood_type:''
        };
    }
    handleIdChange =(event)=>{
        this.setState({id:event.target.value});
    };
    handleNameChange=(event)=>{
        this.setState({name:event.target.value});
    };
    handlePh_noChange=(event)=>{
        this.setState({Ph_no:event.target.value});
    };
    handleMail_idChange=(event)=>{
        this.setState({mail_id:event.target.value});
    };
    handleGenderChange=(event)=>{
        this.setState({gender:event.target.value});
    }
    handleMedical_conditionChange=(event)=>{
        this.setState({medical_condition:event.target.value});
    }
    handleBlood_typeChange=(event)=>{
        this.setState({blood_type:event.target.value});
    }
    handlechange = (event) =>{
        this.setState({[event.target.value]:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
       id:this.state.id,
       name:this.state.name,
       ph_no:this.state.ph_no,
       mail_id:this.state.mail_id,
       gender:this.state.gender,
       medical_condition:this.state.medical_condition,
       blood_type:this.state.medical_condition
        };
        axios.post('http://127.0.0.1:8080/addinfo',data)
        
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} id="inputdata">
                <label>ID</label><br/>
                <input
                type="text"
                value={this.state.id}
                onChange={this.handleIdChange}
                /><br/>
                <label>Name</label><br/>
                <input
                type="text"
                value={this.state.Name}
                onChange={this.handleNameChange}
                /><br/>
                <label>Ph_no</label><br/>
                <input
                type="number"
                value={this.state.Ph_no}
                onChange={this.handlePh_noChange}
                /><br/>
                <label>mail_id</label><br/>
                <input
                type="email"
                value={this.state.mail_id}
                onChange={this.handleMail_idChange}
                /><br/>
                <label>Gender</label><br/>
                <input
                type="text"
                value={this.state.gender}
                onChange={this.handleGenderChange}
                /><br/>
                <label>medical_condition</label><br/>
                <input
                type="text"
                value={this.state.medical_condition}
                onChange={this.handleMedical_conditionChange}
                /><br/>
                <label>Blood_type</label><br/>
                <input
                type="text"
                value={this.state.blood_type}
                onChange={this.handleBlood_typeChange}
                /><br/>

                <button type="submit">Add</button>
                
                </form>
        )
    }
}
export default Create;