import React from 'react'
import { Space } from 'antd'
import useFirestore from '../hooks/useFirestore'
import { CatalogueCard } from './CatalogueCard'

const CatalogueGrid = ( props ) =>{
    
    let category = props.category
    const { docs } = useFirestore(category)

    return(
        <div>
          { docs && docs.map( doc =>{
            return(     
              <Space direction='horizontal'>
              <CatalogueCard
                key = {doc.id}
                props = {{
                  imageLink: doc.url,
                  plantName: doc.plantName,
                  description: doc.description,
                  price: doc.price
                }}
              />
              </Space>     
            )}
          )}  
        </div>
       
    )
}

export default CatalogueGrid