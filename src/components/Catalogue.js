import React, { useState} from 'react'
import CatalogueGrid from './CatalogueGrid'
import { Menu } from 'antd'

const Catalogue = () =>{
    const [ subMenu, setSubMenu ] = useState(null)

    const handleSubMenu = (e) =>{
        let selectedSubMenu = e.key
        setSubMenu(selectedSubMenu)
    }

    return(
      <> 
       <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}} onClick = { handleSubMenu } >   
        <Menu.Item key='Plant' className='vvtextYellow'><h3>Plants</h3></Menu.Item>
        <Menu.Item key='Basket' className='vvtextYellow'><h3>Basket</h3></Menu.Item>
       </Menu> 
        { subMenu === null && <CatalogueGrid category= 'Plant'/> }
        { subMenu === 'Plant' && <CatalogueGrid category= { subMenu}/> }
        { subMenu === 'Basket' && <CatalogueGrid category= { subMenu}/> }
     </>
    )
}

export default Catalogue