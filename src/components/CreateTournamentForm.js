import { Row, GradientText, Column } from 'components/common'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Dots } from 'react-activity'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { getIsLoading, getTempCredentials } from 'store/auth/auth.selectors'
import { signUp } from 'store/auth/auth.actions'
import { CreateTournamentButton } from 'components/Buttons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import Image from 'next/image'

const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
})

const StyledDatePicker = styled(DatePicker)`
  height: 60px;
  width: 260px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${props => props.theme.colors.black};
  padding-left: 25px;
  cursor: pointer;
`

const FormContainer = styled.div`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const LoginIfGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form``

const HorizontalScrollView = styled.div`
  width: 589px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`

const Tile = styled.div`
  width: 106px;
  height: 148px;
  border-radius: 5px;
  position: relative;
`

const SelectedGame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(12, 10, 9, 0.4);
  color: ${props => props.theme.colors.white};
  user-select: none;
`

function SmallGameTile({ game, selected }) {
  return (
    <Tile>
      {selected && <SelectedGame game={game} />}
      <Image src={`/${game}.svg`} width={106} height={148} alt="game" />
    </Tile>
  )
}

export default function CreateTournament({ isLoading, onSubmit }) {
  const [selectedGame, setSelectedGame] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: 'tournament name',
      region: 'Europe',
      description: 'tournament description',
      entryPrice: '20',
      prize: '20',
      prizeCurrency: 'Eth',
      time: new Date(),
      platform: 'xbox'
    },

    onSubmit: values => {
      const input = { ...values, game: selectedGame }
      console.log('gfdg', input)
      onSubmit(input)
    }
  })

  const regionOptions = [
    { value: 'Europe', label: 'Europe' },
    { value: 'USA', label: 'USA' },
    { value: 'Asia', label: 'Asia' }
  ]

  const currencyOptions = [
    { value: 'ETH', label: 'ETH' },
    { value: 'BTC', label: 'BTC' },
    { value: 'BNB', label: 'BNB' }
  ]

  const platformOptions = [
    { value: 'pc', label: 'pc' },
    { value: 'xbox', label: 'xbox' },
    { value: 'playstation', label: 'playstation' }
  ]

  const games = [
    { name: 'csgo' },
    { name: 'dirt' },
    { name: 'rl' },
    { name: 'minecraft' },
    { name: 'cod' },
    { name: 'csgo' },
    { name: 'dirt' },
    { name: 'rl' },
    { name: 'minecraft' },
    { name: 'cod' }
  ]

  return (
    <FormContainer>
      {!isLoading ? (
        <Form onSubmit={formik.handleSubmit}>
          <Heading>Create Tournament</Heading>
          <Subtext>Premiere is only available to users that are 18+</Subtext>
          <Entry>
            <Caption>name</Caption>
            <Input
              id="name"
              type="text"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Entry>
          <Caption>game</Caption>
          <HorizontalScrollView>
            {games &&
              games.map((game, key) => (
                <div
                  key={key}
                  style={{ width: 105, height: 150, marginBottom: 20 }}
                  onClick={() => setSelectedGame(game?.name)}
                >
                  <SmallGameTile
                    game={game.name}
                    caption={game.caption}
                    selected={selectedGame === game?.name}
                  />
                </div>
              ))}
          </HorizontalScrollView>
          <Entry>
            <Caption>region</Caption>
            <Select
              id="region"
              name="region"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={regionOptions}
              value={formik.values.region}
            />
          </Entry>
          <Entry>
            <Caption>description</Caption>
            <Input
              id="description"
              type="text"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Entry>
          <Entry>
            <Caption>entry price</Caption>
            <Input
              id="entry"
              type="text"
              name="entry"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.entryPrice}
            />
          </Entry>
          <Entry>
            <Caption>prize</Caption>
            <Input
              id="prize"
              type="text"
              name="prize"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.prize}
            />
          </Entry>
          <Entry>
            <Caption>prize currency</Caption>
            <Select
              id="prizeCurrency"
              name="prizeCurrency"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={currencyOptions}
              value={formik.values.prizeCurrency}
            />
          </Entry>
          <Entry>
            <Caption>time</Caption>
            <Input
              id="time"
              type="date"
              name="platform"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.time}
            />
          </Entry>
          <Entry>
            <Caption>platform</Caption>
            <Select
              id="platform"
              name="platform"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={platformOptions}
              value={formik.values.platform}
            />
          </Entry>
          <SubmitEntry>
            <CreateTournamentButton href="/ConfirmEmail" type="submit" />
          </SubmitEntry>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}
