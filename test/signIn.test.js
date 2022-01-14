import { assert } from 'chai'
import { signInSaga } from '../src/store/auth/auth.sagas'

describe('sign in works', () => {
  it('sign in is successful with correct credentials', () => {
    const workingCredentials = {
      username: 'oliwier.ostro@gmail.com',
      password: 'Szafagra123@'
    }
    const gen = signInSaga({ payload: workingCredentials })
    console.log(gen.next().value)
  })

  it('sign in unsuccessful with incorrect credentials', () => {
    const invalidCredentials = {
      username: 'asdfasdf',
      password: 'asdfasdf'
    }
    const gen = signInSaga({ payload: invalidCredentials })
    console.log(gen.next().value)
  })
})

describe('sign in persists', () => {
  it('signs you in if you open the page using signInPersistSaga', () => {

  })
})
