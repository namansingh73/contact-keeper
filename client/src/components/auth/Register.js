import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        if(authContext.error === 'User already exists')
        {
            alertContext.setAlert(authContext.error,'danger');
            authContext.clearErrors();
        }
    },[authContext.error]);

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2} = user;

    const onChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || password === '')
        {
            alertContext.setAlert('Please enter all fields','danger');
        }
        else if(password !== password2)
        {
            alertContext.setAlert('Passwords do not match','danger');
        }
        else
        {
            authContext.register({
                email,
                name,
                password
            });
        }
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type='text' name="name" value={name} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='text' name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" value={password} onChange={onChange} required minLength="6"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type='password' name="password2" value={password2} onChange={onChange} required minLength="6"/>
                </div>
                <input type="submit" value="Register" className="btn btn-block btn-primary"/>
            </form>
        </div>
    )
}

export default Register;