import { Row, GradientText, Column } from 'components/common'
import {
  Heading,
  Caption,
  Subtext,
  Entry,
  Input,
  SmallInput
} from 'components/Forms'
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

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  tempCredentials: getTempCredentials(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(signUp(values))
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

const RowEntry = styled(Row)`
  height: 130px;
  width: 589px;
  margin: auto;
`

const FormContainer = styled.div`
  margin: auto;
`

const ColumnEntry = styled(Column)``

const Alert = styled.div`
  line-height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #ec9ba6;
  margin-top: 10px;
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

export default function CreateTournament({ isLoading, onSubmit }) {
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

    onSubmit: values => onSubmit(values)
  })

  const platformOptions = [
    { value: 'pc', label: 'pc' },
    { value: 'xbox', label: 'xbox' },
    { value: 'playstation', label: 'playstation' }
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
          <ColumnEntry>
            <Entry>
              <Caption>region</Caption>
              <Input
                id="region"
                type="email"
                name="region"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.region}
              />
            </Entry>
            <Entry>
              <Caption>description</Caption>
              <Input
                id="description"
                type="text"
                name="password"
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
              <Input
                id="prizeCurrency"
                type="text"
                name="prizeCurrency"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
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
            <LoginIfGotAnAccount>
              Already have an account?
              <GradientText style={{ display: 'inline', marginLeft: 5 }}>
                <Link href="/login">Log In</Link>
              </GradientText>
            </LoginIfGotAnAccount>
          </ColumnEntry>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}
