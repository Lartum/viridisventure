import React, { useEffect } from 'react'
import { Progress } from 'antd'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ 
    file, 
    setFile, 
    plantName, 
    setPlantName, 
    description, 
    setDescription, 
    setUpload, 
    setStatus, 
    price, 
    setPrice, 
    category, 
     }) => { 

    const { url, progress } = useStorage({ file, plantName, description, price, category })
    
    useEffect(() =>{
        if ( url ) {
            setFile(null)
            setPlantName(null)
            setDescription(null)
            setUpload(false)
            setStatus(true)
            setPrice(null)
            // setCategory(null)
        }
    } , [ url, setFile, setPlantName, setDescription, setUpload, setStatus, setPrice ])

    return(
        <React.Fragment>
            <Progress
                steps = { 10 }
                status = 'active'
                percent = {progress} />
        </React.Fragment>
    )

}

export default ProgressBar