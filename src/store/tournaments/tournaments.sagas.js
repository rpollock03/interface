import { takeLatest, put, call } from 'redux-saga/effects'
import * as queries from 'graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { types } from './tournaments.actions'
import * as TournamentActions from './tournaments.actions'

export function* fetchTournamentsSaga() {
  console.log('asdf')
  try {
    const res = yield call(
      [API, 'graphql'],
      graphqlOperation(queries.listTournaments)
    )
    console.log(res)
    yield put(TournamentActions.fetchTournamentsSuccess({ tournaments: [] }))
  } catch (e) {
    console.log('getTournamentsSagaError', e)
    yield put(TournamentActions.fetchTournamentsFail())
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_TOURNAMENTS, fetchTournamentsSaga)
}
