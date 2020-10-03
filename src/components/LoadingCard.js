import React from 'react'
import { Skeleton, Card } from 'antd'


const LoadingCard = () =>{
    return(
        <Card
        className='catalogueImage'
        style = {{ width: 300}}
        >  <Skeleton.Image/>
            <Skeleton active paragraph>
           </Skeleton>
        </Card>
    )
}

export default LoadingCard
