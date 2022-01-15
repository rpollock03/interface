export const types = {
  FETCH_TOURNAMENTS: '[Tournaments] Fetch Tournaments',
  FETCH_TOURNAMENTS_SUCCESS: '[Tournaments] Fetch Tournaments Success',
  FETCH_TOURNAMENTS_FAIL: '[Tournaments] Fetch Tournaments Fail'
}

export const fetchTournaments = payload => ({
  type: types.FETCH_TOURNAMENTS,
  payload
})

export const fetchTournamentsSuccess = payload => ({
  type: types.FETCH_TOURNAMENTS_SUCCESS,
  payload
})

export const fetchTournamentsFail = payload => ({
  type: types.FETCH_TOURNAMENTS_FAIL,
  payload
})
