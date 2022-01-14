/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
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
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tournaments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGameAccount = /* GraphQL */ `
  query GetGameAccount($id: ID!) {
    getGameAccount(id: $id) {
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
export const listGameAccounts = /* GraphQL */ `
  query ListGameAccounts(
    $filter: ModelGameAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        players {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTournamentPlayer = /* GraphQL */ `
  query GetTournamentPlayer($id: ID!) {
    getTournamentPlayer(id: $id) {
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
export const listTournamentPlayers = /* GraphQL */ `
  query ListTournamentPlayers(
    $filter: ModelTournamentPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tournamentID
        playerID
        tournament {
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
        player {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamMember = /* GraphQL */ `
  query GetTeamMember($id: ID!) {
    getTeamMember(id: $id) {
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
export const listTeamMembers = /* GraphQL */ `
  query ListTeamMembers(
    $filter: ModelTeamMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          points
          title
          createdAt
          updatedAt
          playerFriendsId
          owner
        }
        team {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
