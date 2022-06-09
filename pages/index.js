import LoginForm from '../components/LoginForm'
import { useContext, useEffect } from 'react'
import { TrackerContext } from '../context/trackerContext'

export default function Index() {
    const {initTracker, startTracking} = useContext(TrackerContext)
    
    useEffect( () => {
        initTracker()
        startTracking()
    }, [])
    

  return (<LoginForm destination="/logged-in" />);
}
