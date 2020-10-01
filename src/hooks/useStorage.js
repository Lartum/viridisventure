import { useState, useEffect } from 'react'
import { firebaseStorage, firebaseFireStore, timestamp } from '../firebase/config'


const useStorage = ({file, plantName, description, price, category}) =>{
    const [ progress, setProgress ] = useState(0)
    const [ error, setError ] = useState(null)
    const [ url, setUrl ] = useState(null)


    useEffect(() => {
      
        //references 
        const storageRef = firebaseStorage.ref(file.name)
       
        const collectionRef = firebaseFireStore.collection(category)

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentage = ( snap.bytesTransferred / snap.totalBytes ) * 100
            setProgress(percentage)

        }, (error) => {
            setError(error)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ 
                url, 
                createdAt, 
                plantName,
                description,
                price
            })
            setUrl(url)
        })
    } ,[ file, plantName, description, price, category ])
    
    return { progress, error, url }
}

export default useStorage