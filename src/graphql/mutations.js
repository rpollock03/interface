/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        id
        name
        tournaments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      gameTournamentsId
      tournamentGameId
      owner
    }
  }
`;
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        id
        name
        tournaments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      gameTournamentsId
      tournamentGameId
      owner
    }
  }
`;
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      region
      name
      description
      game {
        id
        name
        tournaments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      time
      prize
      prize_currency
      creator
      platform
      createdAt
      updatedAt
      gameTournamentsId
      tournamentGameId
      owner
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
          owner
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
      owner
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
          owner
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
      owner
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      date_of_birth
      password
      is_active
      tournaments {
        items {
          id
          tournamentID
          playerID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      points
      accounts {
        items {
          tag
          platform
          id
          createdAt
          updatedAt
          playerAccountsId
          owner
        }
        nextToken
      }
      title
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          username
          email
          date_of_birth
          password
          is_active
          points
          title
          createdAt
          updatedAt
          playerFriendsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
      owner
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      tournaments {
        items {
          id
          region
          name
          description
          time
          prize
          prize_currency
          creator
          platform
          createdAt
          updatedAt
          gameTournamentsId
          tournamentGameId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      tournaments {
        items {
          id
          region
          name
          description
          time
          prize
          prize_currency
          creator
          platform
          createdAt
          updatedAt
          gameTournamentsId
          tournamentGameId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      tournaments {
        items {
          id
          region
          name
          description
          time
          prize
          prize_currency
          creator
          platform
          createdAt
          updatedAt
          gameTournamentsId
          tournamentGameId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createGameAccount = /* GraphQL */ `
  mutation CreateGameAccount(
    $input: CreateGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    createGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
      owner
    }
  }
`;
export const updateGameAccount = /* GraphQL */ `
  mutation UpdateGameAccount(
    $input: UpdateGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    updateGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
      owner
    }
  }
`;
export const deleteGameAccount = /* GraphQL */ `
  mutation DeleteGameAccount(
    $input: DeleteGameAccountInput!
    $condition: ModelGameAccountConditionInput
  ) {
    deleteGameAccount(input: $input, condition: $condition) {
      tag
      platform
      id
      createdAt
      updatedAt
      playerAccountsId
      owner
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTournamentPlayer = /* GraphQL */ `
  mutation CreateTournamentPlayer(
    $input: CreateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    createTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          id
          name
          createdAt
          updatedAt
          owner
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        gameTournamentsId
        tournamentGameId
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTournamentPlayer = /* GraphQL */ `
  mutation UpdateTournamentPlayer(
    $input: UpdateTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    updateTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          id
          name
          createdAt
          updatedAt
          owner
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        gameTournamentsId
        tournamentGameId
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTournamentPlayer = /* GraphQL */ `
  mutation DeleteTournamentPlayer(
    $input: DeleteTournamentPlayerInput!
    $condition: ModelTournamentPlayerConditionInput
  ) {
    deleteTournamentPlayer(input: $input, condition: $condition) {
      id
      tournamentID
      playerID
      tournament {
        id
        players {
          nextToken
        }
        region
        name
        description
        game {
          id
          name
          createdAt
          updatedAt
          owner
        }
        time
        prize
        prize_currency
        creator
        platform
        createdAt
        updatedAt
        gameTournamentsId
        tournamentGameId
        owner
      }
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTeamMember = /* GraphQL */ `
  mutation CreateTeamMember(
    $input: CreateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    createTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      team {
        id
        players {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTeamMember = /* GraphQL */ `
  mutation UpdateTeamMember(
    $input: UpdateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    updateTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      team {
        id
        players {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTeamMember = /* GraphQL */ `
  mutation DeleteTeamMember(
    $input: DeleteTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    deleteTeamMember(input: $input, condition: $condition) {
      id
      playerID
      teamID
      player {
        id
        userId
        username
        email
        date_of_birth
        password
        is_active
        tournaments {
          nextToken
        }
        points
        accounts {
          nextToken
        }
        title
        teams {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        playerFriendsId
        owner
      }
      team {
        id
        players {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
