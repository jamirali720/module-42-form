import React,{ useState } from 'react';

const FormSystemTwo = () => {     
    const [user, setUser] = useState({name : '', email: '', password: ''})
    const { name, email, password} = user;
// const handleNameChange = (e) => {
//     setUser({name : e.target.value, email, password})
// }
// const handleEmailChange = (e) => {
//     setUser({ name, email : e.target.value,  password})
// }
// const handlePasswordChange = (e) => {
//     setUser({ name, email, password: e.target.value})
// }

    const handleChange = (e) => {
        //  const filledName = e.target.name;
        // if(filledName === 'name'){
        //     setUser({name : e.target.value, email, password})
        // }
        //     if(filledName === 'email'){
        //         setUser({ name, email : e.target.value,  password})
        //     }    
        // if(filledName === 'password'){
        //     setUser({ name, email, password: e.target.value})
        // }
        setUser({ ...user, [e.target.name]: e.target.value})

    }
   
        const handleSubmit = (e) => {
            e.preventDefault();
            
        console.log(user);
        }
    return (
        <div>   
        <h1> Registration Form -System Two</h1>      
           <form action="" onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="name"> Name: </label>
                    <input type="text" onChange={handleChange} name="name" id="name" value={name} required/>
                </div>
                          <br/>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="email" onChange={handleChange} name="email" id="email" value={email} required/>
                </div>
                        <br/>
                <div >                        
                    <label htmlFor="password"> Password: </label>
                    <input type="password" onChange={handleChange} name="password" id="password" value={password} required/>
                </div>
                            <br/>
                <div >
                    <button type="submit">Registration</button>
                </div>
           </form>
     
    </div>
    );
};

export default FormSystemTwo;