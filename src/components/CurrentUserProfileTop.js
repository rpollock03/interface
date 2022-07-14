import { useContext } from 'react'
import styled from 'styled-components'
import { Column, Container, Row } from 'components/common'
import { useState } from 'react'
import Friends from 'components/Friends'
import Home from 'components/ProfileHome'
import Link from 'next/link'
import AuthenticationContext from 'contexts/authentication'
import { useFriends, useStats } from 'hooks'
import { useFriendInvites } from 'hooks'

const ProfilePanel = styled(Row)``

const SpaceBetween = styled(Row)`
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-style: italic;
  font-weight: 700;
  @media screen and (min-width: 650px) {
    font-size: 36px;
    line-height: 36px;
  }
`

const Wrapper = styled(Container)`
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 79px;
`

const Team = styled.div`
  font-family: Inter;
  font-style: Normal;
  font-weight: 600;
  font-size: 18px;
  fine-height: 27px;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 40px;
`

const ProfileInfo = styled(Column)`
  margin-left: 12px;
  @media screen and (min-width: 650px) {
    margin-left: 52px;
  }
`

const ProfileStats = styled(Row)``

const GreyTextColumn = styled(Column)`
  margin-right: 42px;
`

const GreyText = styled.div`
  font-style: Regular;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  @media screen and (max-width: 650px) {
    font-size: 12px;
    line-height: 20px;
  }
`

const ArrowColumn = styled(Column)`
  justify-content: center;
  margin-right: 50px;
`

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ButtonWrapper = styled(Row)`
  justify-content: space-between;
  margin-top: 79px;
  @media screen and (min-width: 900px) {
    width: 800px;
  }
`

const Button = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1em;
  border-bottom: 0px solid;
  border-image-source: linear-gradient(
    266.89deg,
    #982649 -18.13%,
    #f71735 120.14%
  );
  border-image-slice: 1;
  text-transform: uppercase;
  padding: 40px 23px 23px 23px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
   font-size:10px;
   height: 30px;
   line-height:20px;
   padding: 10px;
   margin: 5px;
   margin-bottom: 10px;
   text-align: center;
  }
`
const Avatar = styled.img`
  width: 200px;
  border-radius: 200px;
  @media screen and (max-width: 850px) {
    width: 90px;
  }
`

export default function ProfileTop() {
  const [selected, setSelected] = useState('Home')
  const { user, userAvatar, token } = useContext(AuthenticationContext)
  const friends = useFriends(user)
  const stats = useStats(user)
  const { invites, avatars } = useFriendInvites(user?.id, token)

  return (
    <Column>
      <Wrapper>
        <SpaceBetween>
          <ProfilePanel>
            {userAvatar && user && <Avatar src={userAvatar} />}
            <ProfileInfo>
              <Name>{user?.username || user?.email}</Name>
              <ProfileStats>
                <GreyTextColumn>
                  <GreyText>rank</GreyText>
                  <Numbers>{stats?.rank ?? '-'}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>weekly wins</GreyText>
                  <Numbers>{stats?.weeklyWins ?? 0}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>Friends</GreyText>
                  <Numbers>{friends.length}</Numbers>
                </GreyTextColumn>
              </ProfileStats>
            </ProfileInfo>
          </ProfilePanel>
        </SpaceBetween>
        <ButtonWrapper>
          <Button
            style={{ borderBottom: `${selected == 'Home' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Home')}
          >
            home
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'History' ? 1 : 0}px solid` }}
            onClick={() => setSelected('History')}
          >
            event history
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Friends' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Friends')}
          >
            friends
          </Button>
          <Link href={'/events'}>
            <a style={{ color: 'inherit' }}>
              <Button>upcoming events</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </Wrapper>
      {selected == 'Friends' && (
        <Friends friends={friends} invites={invites} avatars={avatars} />
      )}
      {selected == 'Home' && <Home />}
    </Column>
  )
}
