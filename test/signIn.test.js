import { assert } from 'chai'
import { signInSaga } from '../src/store/auth/auth.sagas'

const workingCredentials = {
  username: 'oliwier.ostro@gmail.com',
  password: 'Szafagra123@'
}

const invalidCredentials = {
  username: 'asdfasdf',
  password: 'asdfasdf'
}

describe('sign in works', () => {
  it('sign in is successful with correct credentials', () => {
    const gen = signInSaga(workingCredentials)
    console.log(gen.next().value)
  })

  it('sign in unsuccessful with incorrect credentials', () => {
    const gen = signInSaga(invalidCredentials)
    console.log(gen.next().value)
  })
})

describe('sign in persists', () => {
  it('signs you in if you open the page using signInPersistSaga')
})
