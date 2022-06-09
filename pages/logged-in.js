import { useEffect, useContext } from "react"
import { TrackerContext } from '../context/trackerContext'

export default function () {
    const {setUserID, initTracker} = useContext(TrackerContext)
    
    useEffect( () => {
        let emailMatch = /Uname=(.+)%/
        initTracker()
        let matches = window.location.href.match(emailMatch)
        setUserID(matches[1])
        console.log(matches[1])
    }, [])
 
    return (<h1>You're logged in!</h1>)
}