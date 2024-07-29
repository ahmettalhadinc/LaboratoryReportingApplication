import React from 'react';
import '../css/Head.css';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/loginSlice';
function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const{isAuth}= useSelector((a)=>a.loginSlice)
const dispatch=useDispatch()

const cikis = ()=>{
  dispatch(logOutUser())
}
  
  return (
    <div className='header'>
      <div className='menu'>
        <Drawer.Root opened={opened} onClose={close}>
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Header>
              <Link to="/home" className='link'>
                <Drawer.Title>Ana Sayfa</Drawer.Title>
              </Link>
              <Drawer.CloseButton />
            </Drawer.Header>
            <Drawer.Body>
            <Link to="/report-definition" className='link'>Rapor Tanımı</Link>
            </Drawer.Body>
            <Drawer.Body>
             <Link to="/reports" className='link'>Raporlar</Link>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        <IoMenu size={50} onClick={open} />
      </div>
      <h2>Labaratuvar Raporlama Sistemi</h2>
      <div style={{textAlign:'center'}}>
        <FaPowerOff cursor='pointer' onClick={cikis} size={25} />
        <h4>Cikis Yap</h4>
      </div>
      
    </div>
  );
}

export default Header;
