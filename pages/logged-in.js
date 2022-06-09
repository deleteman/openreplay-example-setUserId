import { useEffect, useContext } from "react"
import { TrackerContext } from "../context/trackerContext"

export default function LoggedIn() {
    const {setUserID, initTracker} = useContext(TrackerContext)
    
    useEffect( () => {
        let emailMatch = /Uname=(.+)%/
        let matches = window.location.href.match(emailMatch)
        setUserID(matches[1])
        console.log(matches[1])
    }, [])
 
    return (<h1>You&apos;re logged in!</h1>)
}