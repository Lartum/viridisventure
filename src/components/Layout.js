import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import CatalogueGrid from './CatalogueGrid'

const { Header } = Layout

export const Head = () =>{
    return(
        <>
        <Header style={{ background:'white', textAlign: 'center'}}><h3>Plants and accessories</h3></Header>
        <Header style={{ background:'white'}}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}}> 
               <Menu.Item><h2 className='headerItem'><FontAwesomeIcon icon={ faSeedling } spin/> Viridis Venture</h2></Menu.Item>  
               <Menu.Item><Link to='/'><h2 className='headerItem'>Home</h2></Link></Menu.Item>
              <Menu.Item><Link to='/contact'><h2 className='headerItem'>Contact</h2></Link></Menu.Item>
            </Menu>
        </Header>
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
         <Header style={{ background:'white' }}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}} onClick = { handleClick } >   
              <Menu.Item key='Plant'><h3 className='headerItem'>Plants</h3></Menu.Item>
              <Menu.Item key='Basket'><h3 className='headerItem'>Basket</h3></Menu.Item>
            </Menu>
        </Header>
        { subMenu === 'Plant' && <CatalogueGrid category = { subMenu }/>}
        { subMenu === 'Basket' && <CatalogueGrid category = { subMenu }/>}
        </>
    )
}


