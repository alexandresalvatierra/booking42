import { combineReducers } from 'redux'

import propertyReducer from './property/reducer'

const rootReducer = combineReducers({ propertyReducer })

export type RootReducer = ReturnType<typeof rootReducer>

export default rootReducer
