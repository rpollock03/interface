import { combineReducers } from 'redux'
import { reducer as AuthReducer } from './auth/auth.reducers'
import { reducer as TournamentsReducer } from './tournaments/tournaments.reducers'

const reducer = combineReducers({
  auth: AuthReducer,
  tournaments: TournamentsReducer
})

export default reducer
