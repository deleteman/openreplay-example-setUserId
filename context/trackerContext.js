import { createContext } from "react"
import Tracker from '@openreplay/tracker';
import {v4 as uuidV4} from 'uuid'

export const TrackerContext = createContext()

function defaultGetUserId() {
   return uuidV4() 
}

export default function TrackerProvider({children, config}) {

    console.log("Starting tracker...")
    console.log("Custom configuration received: ", config)

    const getUserId = (config?.userIdEnabled && config?.getUserId) ? config.getUserId : defaultGetUserId
    let userId = null;

    const trackerConfig = {
        projectKey: config?.projectKey || process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY
    }

    console.log("Tracker configuration")
    console.log(trackerConfig)
    const tracker = new Tracker(trackerConfig);

    if(config?.userIdEnabled) {
        userId = getUserId()
        tracker.setUserID(userId)
    }


    //tracker.start();
    let value = {
        tracker,
        userId
    }


    return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
}