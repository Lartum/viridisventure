import React from 'react'
import { Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () =>{
    const { Meta } = Card
    return(
        <>
        <div className='contactbackground'>
        </div>
        <Card 
        className='contactcard'
        cover= {<h1><FontAwesomeIcon icon= { faPhone }/></h1>  }
        >
            <Meta
            title={[
                <>
                <h2>Contact Us</h2>
                <h3><FontAwesomeIcon icon = {['fab', 'whatsapp']}/>+91 7085651755 / +91 8837352497</h3>
                </>
            ]}
            description={[
            <>    
                <p>We Deliver All Over India</p>
                <p>Order yours Now</p>
            </>
            ]}
            />
        </Card>
        </> 
    )
}

export default Contact