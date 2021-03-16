import React, { useState } from 'react';
import style from './Form.css'

const Form = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [user, setUser] = useState({name : '', email: '', password: ''})
    const { name, email, password} = user
const handleNameChange = (e) => {
    setUser({name : e.target.value, email, password})
}
const handleEmailChange = (e) => {
    setUser({ name, email : e.target.value,  password})
}
const handlePasswordChange = (e) => {
    setUser({ name, email, password: e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    // const userInfo = {
    //     name :name,          //two way system to pass useState value 
    //     email: email,
    //     password : password
    // }
    // const userInfo = {
    //     name,
    //     email,       
    //     password 
    // }
console.log(user);
}
    return (
        <div>   
            <h1> Registration Form</h1>      
               <form action="" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="name"> Name: </label>
                        <input type="text" onChange={handleNameChange} name="name" id="name" value={name} required/>
                    </div>
                
                    <div>
                        <label htmlFor="email"> Email: </label>
                        <input type="email" onChange={handleEmailChange} name="email" id="email" value={email} required/>
                    </div>

                    <div className={style.formGroup}>                        
                        <label htmlFor="password"> Password: </label>
                        <input type="password" onChange={handlePasswordChange} name="password" id="password" value={password} required/>
                    </div>
                 
                    <div className={style.formGroup}>
                        <button type="submit">Registration</button>
                    </div>
               </form>
         
        </div>
    );
};

export default Form;