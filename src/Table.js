import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Table1() {
    const [data, setData] = useState([]);

    function init() {
        axios.get('http://localhost:8080/getinfo')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    function deleteData(id, e) {
        e.preventDefault();
        axios.delete(`http://localhost:8080/delete/${id}`).then(response => {
            console.log(response);
            window.location.reload();
            
        })
    };
    function updateData(id,e){
        e.preventDefault();
        axios.put(`http://localhost:8080/updateinfo/${id}`).then(response=>{
            console.log(response);
            window.location.reload();
        })
    }
    useEffect(() => { init() }, [])
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PH_NO</th>
                    <th>MAIL_ID</th>
                    <th>GENDER</th>
                    <th>MEDICAL_CONDITION</th>
                    <th>BLOOD_TYPE</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.ph_no}</td>
                        <td>{user.mail_id}</td>
                        <td>{user.gender}</td>
                        <td>{user.medical_condition}</td>
                        <td>{user.blood_type}</td>
                        <td>
                            <button className="btn btn-danger" onClick={(e) => deleteData(user.id, e)}>Delete</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={(e)=> updateData(user.id,e)}>Update</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}