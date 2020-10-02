import React from 'react'
import { Card } from 'antd'

export const CatalogueCard = ({props}) =>{
    
    const { Meta } = Card
    const { imageLink, plantName, description, price } = props
    return(
    <Card
    hoverable
    className='catalogueImage'
    cover={<img alt='plant' src={imageLink} />}
    style={{ width: 300}}
    ><Meta 
        title={plantName} description={[
        <div> 
        <p>Rs. { price }</p>
        <p>{ description }</p>
        </div>   
        ]}/>
    </Card>
    )
    
}

