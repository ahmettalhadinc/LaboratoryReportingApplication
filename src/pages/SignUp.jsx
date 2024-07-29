import React, { useEffect, useState } from 'react'
import { Fieldset, TextInput, PasswordInput, Button } from '@mantine/core';
import hdd from '../assets/hdd.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../redux/loginSlice';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName]=useState('')
  const dispatch = useDispatch();
  const users = useSelector((state) => state.loginSlice.users);

  const signUp= ()=>{
    dispatch(signUpUser({email,password,name}))
    setEmail('')
    setPassword('')
    setName('')
  }

 

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
          legend="Kayit Ekrani"
          style={{
            border: 'none',
            padding: '0',
            background: 'transparent',
          }}
        >
          <TextInput
            label="Isim Soyisminiz"
            placeholder="Isim ve Soyisminizi Giriniz"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextInput
            label="Mail Adresiniz"
            placeholder="Mail Adresinizi girin"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <PasswordInput
            label="Sifreniz"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sifrenizi girin"
            value={password}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button style={{ marginTop: '20px', width: '60%' }} onClick={signUp} variant="filled">Kayit Ol</Button>
          <Link to='/'> <h3 style={{justifyContent:'center', marginTop: '20px', cursor:'pointer',color:'red', textDecoration:'none' }}>Girise Don</h3></Link> 
          </div>
        </Fieldset>
      </div>
    </div>
  )
}

export default SignUp;
