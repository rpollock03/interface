import Modal from 'react-modal'
import { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'components/common'
import { Heading } from 'components/Forms'
import { Button } from 'components/Buttons'
import { motion } from 'framer-motion'

const GamesRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
`

const GameModal = styled(Modal)`
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 460px;
  background: #ffffff;
  border: 1px solid black;
  padding: 50px 40px 0px 40px;
  z-index: 50;
  @media screen and (max-width: 1100px) {
    width: 550px;
  }
`

const Dots = styled(motion.div)`
  font-size: 40px;
  margin-bottom: -5px;
`

const SelectGameRow = styled(Row)`
  height: 292px;
  justify-content: space-around;
`

const CancelButton = styled(Button)`
  width: 129px;
  height: 36px;
  margin-right: 10px;
`

const SelectButton = styled(Button)`
  width: 129px;
  height: 36px;
`

const ButtonsRow = styled(Row)`
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  right: 50px;
`
const Tile = styled(motion.div)`
  width: 150px;
  height: 220px;
  border-radius: 30px;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
`

const ImageWrapper = styled(motion.div)``

const GameImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-right: 7px solid rgb(243, 243, 244);
  background: no-repeat center;
  background-size: 70px;
`

const GameSelectButton = styled.button`
  all: unset;
`

const SelectedGameImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-right: 7px solid rgb(243, 243, 244);
  background: no-repeat center;
  background-size: 70px;
`

const GameInput = styled.input`
  object-fit: cover;
`

const variants = {
  select: {
    scale: [1, 0.75],
    transition: { duration: 0.2 },
    unselect: {
      scale: [0.75, 1],
      transition: { duration: 0.2 }
    }
  }
}

function OpenModalButton({ openModal, games, selectedGame }) {
  const [isHover, setHover] = useState(false)
  return (
    <GamesRow
      onClick={openModal}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {selectedGame ? (
        <ImageWrapper
          style={{
            zIndex: 3
          }}
          initial={false}
          animate={{ marginRight: isHover ? 0 : -15 }}
        >
          <SelectedGameImage
            style={{
              backgroundImage: `url('/${selectedGame}.svg')`
            }}
          />
        </ImageWrapper>
      ) : (
        games.map((games, idx) =>
          idx < 3 ? (
            <ImageWrapper
              style={{
                zIndex: 3 - idx
              }}
              initial={false}
              animate={{ marginRight: isHover ? 0 : -15 }}
              key={idx}
            >
              <GameImage
                style={{
                  backgroundImage: `url('/${games.name}.svg')`
                }}
              />
            </ImageWrapper>
          ) : null
        )
      )}
      <Dots initial={false} animate={{ marginLeft: isHover ? -10 : 5 }}>
        ...
      </Dots>
    </GamesRow>
  )
}

export default function SelectGameModal({
  handleGameSelect,
  selectedGame,
  games,
  cancel
}) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [game, setGame] = useState('')

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setGame('')
  }

  const selectGame = (newGame: string) => {
    setGame(newGame)
    game == newGame ? setGame('') : setGame(newGame)
  }

  return (
    <div>
      <OpenModalButton
        openModal={openModal}
        games={games}
        selectedGame={selectedGame}
      />
      <GameModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          closeModal()
          cancel()
        }}
        ariaHideApp={false}
        style={{ overlay: { zIndex: 30 } }}
        games={games}
      >
        <Heading>Select Game</Heading>
        <SelectGameRow>
          {games.map((games, idx) => (
            <GameSelectButton
              key={idx}
              onClick={() => {
                selectGame(games.name)
              }}
            >
              <Tile
                variants={variants}
                animate={game == games.name ? 'select' : 'unselect'}
              >
                <GameInput
                  type={'image'}
                  src={'/' + games.name + '.svg'}
                  width={150}
                  height={220}
                  onClick={handleGameSelect}
                  value={games.name}
                />
              </Tile>
            </GameSelectButton>
          ))}
        </SelectGameRow>
        <ButtonsRow>
          <CancelButton
            onClick={() => {
              closeModal()
              cancel()
            }}
          >
            Cancel
          </CancelButton>
          <SelectButton onClick={closeModal}>Select</SelectButton>
        </ButtonsRow>
      </GameModal>
    </div>
  )
}
