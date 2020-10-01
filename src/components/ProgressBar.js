import React, { useEffect } from 'react'
import { LinearProgress  } from '@material-ui/core'
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
    setCategory }) => { 

    const { url, progress } = useStorage({ file, plantName, description, price, category })
    
    useEffect(() =>{
        if ( url ) {
            setFile(null)
            setPlantName(null)
            setDescription(null)
            setUpload(false)
            setStatus(true)
            setPrice(null)
            setCategory(null)
        }
    } , [ url, setFile, setPlantName, setDescription, setUpload, setStatus, setPrice, setCategory ])

    return(
        <React.Fragment>
            <LinearProgress 
                variant="determinate" 
                value={progress} />
        </React.Fragment>
    )

}

export default ProgressBar