import { spawn } from "redux-saga/effects"
import { saga as AuthSaga } from "./auth/auth.sagas"
import { saga as TournamentSaga } from "./tournaments/tournaments.sagas"

export default function* saga() {
  yield spawn(AuthSaga)
  yield spawn(TournamentSaga)
}
