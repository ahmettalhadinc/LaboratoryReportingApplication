import React, { useState } from 'react';
import { Fieldset, TextInput, PasswordInput,Button  } from '@mantine/core';
import hdd from '../assets/hdd.jpg'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/loginSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{isAuth}= useSelector((a)=>a.loginSlice)
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundImage: `url(${hdd})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxWidth: '400px',
        zIndex: 1
      }}>
        <Fieldset 
          legend="Giris Ekrani"
          style={{
            border: 'none',
            padding: '0',
            background: 'transparent',
          }}
        >
          <TextInput 
            label="Mail Adresiniz" 
            placeholder="Mail Adresinizi girin" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            
          />
          <PasswordInput
            label="Sifreniz"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            placeholder="Sifrenizi girin"
          />
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Button style={{marginTop:'20px'}}  onClick={handleLogin}variant="filled">Giris</Button>
          <h5 style={{marginTop:'20px'}}>Hesabiniz Yok Mu? <Link to="/register">Kayit Olun!</Link></h5>
          
          </div>
        </Fieldset>
      </div>
    </div>
  );
}

export default Login;
