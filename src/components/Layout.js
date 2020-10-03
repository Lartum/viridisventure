import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import CatalogueGrid from './CatalogueGrid'
import { motion } from 'framer-motion'

const { Header } = Layout

export const Head = () =>{
    return(
        <>
        <Header style={{ background:'white', textAlign: 'center'}}><h2><FontAwesomeIcon icon={ faSeedling } spin/> Viridis Venture</h2></Header>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}}> 
               <Menu.Item><Link to='/'><h2 >Home</h2></Link></Menu.Item>
              <Menu.Item><Link to='/contact'><h2 >Contact</h2></Link></Menu.Item>
            </Menu>
        </>
    )
}

export const Home = () => {

   const [ subMenu, setSubMenu] = useState(null)

   const handleClick = (e) => {
      let selectedSubMenu = e.key
      setSubMenu(selectedSubMenu)
   
   }
    return(
        <>
     
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}} onClick = { handleClick } >   
              <Menu.Item key='Plant'><motion.h6 animate={{ scale: 2 }} >Plants</motion.h6></Menu.Item>
              <Menu.Item key='Basket'><motion.h6 animate={{ scale: 2 }} >Basket</motion.h6></Menu.Item>
            </Menu>
        
        { subMenu === 'Plant' && <CatalogueGrid category = { subMenu }/>}
        { subMenu === 'Basket' && <CatalogueGrid category = { subMenu }/>}
      
        </>
    )
}


