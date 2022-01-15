import { types } from './tournaments.actions'

const initialState = {
  tournaments: [],
  isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_TOURNAMENTS:
      return {
        ...state,
        isLoading: true
      }

    case types.FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: payload.tournaments,
        isLoading: false
      }

    case types.FETCH_TOURNAMENTS_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
