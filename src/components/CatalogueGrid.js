import React from 'react'
import { Row, Col } from 'antd'
import useFirestore from '../hooks/useFirestore'
import { CatalogueCard } from './CatalogueCard'

const CatalogueGrid = ( props ) =>{
    const category = props.category
   
    const { docs } = useFirestore(category)

    return(
        <div>
        <React.Fragment>
        <Row>
          { docs && docs.map( doc =>{
            return(
              <Col span={8} style={{padding:'5%'}}>
              <CatalogueCard
                key = {doc.id}
                props = {{
                  imageLink: doc.url,
                  plantName: doc.plantName,
                  description: doc.description,
                  price: doc.price
                }}
              />
             </Col>
            )}
          )}  
          </Row>
          </React.Fragment>
        </div>
       
    )
}

export default CatalogueGrid