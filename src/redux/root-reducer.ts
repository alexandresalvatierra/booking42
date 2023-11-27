import { combineReducers } from 'redux'

import propertyReducer from './property/reducer'
import bookingReducer from './booking/reducer'

const rootReducer = combineReducers({ propertyReducer, bookingReducer })

export type RootReducer = ReturnType<typeof rootReducer>

export default rootReducer
