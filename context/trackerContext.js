import { createContext } from "react"
import Tracker from '@openreplay/tracker';
import {v4 as uuidV4} from 'uuid'
import { useReducer } from "react"

export const TrackerContext = createContext()

function defaultGetUserId() {
   return uuidV4() 
}

function newTracker(config) {
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
    return tracker

}

function reducer(state, action) {
        switch(action.type) {
            case 'init': {
                if(!state.tracker) {
                    console.log("Instantiaing the tracker for the first time...")
                    return {...state, tracker: newTracker(state.config)}
                }
                return state
            }
            case 'start': {

                console.log("Starting tracker...")
                console.log("Custom configuration received: ", state.config)
                state.tracker.start()
                return state
            }
            case 'setUID':
                console.log("Setting the user ID for the current user")
                state.tracker.setUserID(action.id)
                return state;
                break
        }
    }

export default function TrackerProvider({children, config}) {
    let [state, dispatch] = useReducer(reducer, {tracker: null, config})


    let value = {
        startTracking: () => dispatch({type: 'start'}),
        initTracker: () => dispatch({type: 'init'}),
        setUserID: (uid) => dispatch({type: 'setUID', id: uid})
    }

    console.log("passing value:")
    console.log(value)


    return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
}