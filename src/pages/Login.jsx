import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.getItem('auth', 'true')
    }
    return (
        <div>
            <h2 style={{ color: 'teal', textAlign: 'center' }}>Login page</h2>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Enter your login (Any symbol)' />
                <MyInput type='password' placeholder='Enter your password (Any symbol)' />
                <MyButton style={{ width: '100%', marginTop: '20px', height: '40px' }}>LOGIN</MyButton>
            </form>
        </div>
    );
}

export default Login;