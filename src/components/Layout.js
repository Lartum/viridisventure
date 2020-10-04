import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import CatalogueGrid from './CatalogueGrid'
import { slides } from '../constants/images'
import { useTransition, animated, config, useSpring } from 'react-spring'
import { welcomeText, toText, viridisText, ventureText } from '../constants/formdata'
const { Header } = Layout

export const Head = () =>{

    
   const [ subMenu, setSubMenu] = useState(null)
   const [ showSubMenu, setShowSubMenu ] = useState(false)

    const handleMenu = (e) =>{
        let selectedMenu = e.key
        if( selectedMenu === 'catalogue'){
            setShowSubMenu(true)
        }
        else{
            setShowSubMenu(false)
            setSubMenu(null)
        }
    }

    const handleSubMenu = (e) =>{
        let selectedSubMenu = e.key
        setSubMenu(selectedSubMenu)
    }

    return(
        <>
        <Header style={{ background:'white', textAlign: 'center'}}><h2><FontAwesomeIcon icon={ faSeedling } spin/> Viridis Venture</h2></Header>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}} onClick={handleMenu}> 
              <Menu.Item key='home'><Link to='/'><h2 className='vvtextYellow'>Home</h2></Link></Menu.Item>
              <Menu.Item key='catalogue'><Link to='/catalogue'><h2 className='vvtextYellow'>Catalogue</h2></Link></Menu.Item>
              <Menu.Item key='contact'><Link to='/contact'><h2 className='vvtextYellow'>Contact</h2></Link></Menu.Item>
            </Menu>
            {showSubMenu === true &&  <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'Center'}} onClick = { handleSubMenu } >   
              <Menu.Item key='Plant' className='vvtextYellow'><h3>Plants</h3></Menu.Item>
              <Menu.Item key='Basket' className='vvtextYellow'><h3>Basket</h3></Menu.Item>
            </Menu> 
            }    
            { subMenu === 'Plant' && <CatalogueGrid category = { subMenu }/>}
            { subMenu === 'Basket' && <CatalogueGrid category = { subMenu }/>}
            
        </>
    )
}



export const HomeScreenBackground = () =>{
    const [index, set] = useState(0)
    const slideTransitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })

    const welcome = useSpring({
        delay:200,
        opacity:1,
        from:{
            opacity:0
        }
    })
    const to = useSpring({
        delay:400,
        opacity:1,
        from:{
            opacity:0
        }
        
    })
    
    const viridis = useSpring({
        delay:600,
        opacity:1,
        from:{
            opacity:0
        }
        
    })
    
    const venture = useSpring({
        delay:800,
        opacity:1,
        from:{
            opacity:0
        }
        
    })


    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return(
        <>
        { slideTransitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              class="bg"
              style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
            >
            <animated.h1 style={welcome} className='vvtext'>{welcomeText}</animated.h1>
            <animated.h1 style={to} className='vvtext'>{toText}</animated.h1>
            <animated.h1 style={viridis} className='vvtext'>{viridisText}</animated.h1>
            <animated.h1 style={venture} className='vvtext'>{ventureText}</animated.h1>
            </animated.div>
          ))
        }
        </>
    )   
}
