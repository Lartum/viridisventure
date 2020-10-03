import React, { useState } from 'react'
import { Card } from 'antd'
import LoadingCard from './LoadingCard'

export const CatalogueCard = ({props}) =>{

    const { Meta } = Card
    const { imageLink, plantName, description, price } = props

    const [ loading, setLoading ] = useState(true)

  
    
    return(
    <>
    { loading && <LoadingCard/> }
    <Card
    hoverable
    className='catalogueImage'
    cover={ <img alt='plant' src = { imageLink } onLoad={()=> setLoading(false)}/>}
    // style={{ width: 300}}
    ><Meta 
        title={ plantName } description={[
        <div> 
        <p>Rs. { price }</p>
        <p>{ description }</p>
        </div>   
        ]}/>
    </Card> 
    </>
    )
    
}

