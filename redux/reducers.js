import { combineReducers } from 'redux'
import { dashboardReducer } from './dashboard/reducers'

const rootReducer = combineReducers({
    dashboard: dashboardReducer
})

export default rootReducer