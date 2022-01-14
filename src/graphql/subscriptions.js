/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament($owner: String) {
    onCreateTournament(owner: $owner) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament($owner: String) {
    onUpdateTournament(owner: $owner) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament($owner: String) {
    onDeleteTournament(owner: $owner) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($owner: String) {
    onCreateGame(owner: $owner) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($owner: String) {
    onUpdateGame(owner: $owner) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($owner: String) {
    onDeleteGame(owner: $owner) {
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
export const onCreateGameAccount = /* GraphQL */ `
  subscription OnCreateGameAccount($owner: String) {
    onCreateGameAccount(owner: $owner) {
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
export const onUpdateGameAccount = /* GraphQL */ `
  subscription OnUpdateGameAccount($owner: String) {
    onUpdateGameAccount(owner: $owner) {
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
export const onDeleteGameAccount = /* GraphQL */ `
  subscription OnDeleteGameAccount($owner: String) {
    onDeleteGameAccount(owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
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
export const onCreateTournamentPlayer = /* GraphQL */ `
  subscription OnCreateTournamentPlayer($owner: String) {
    onCreateTournamentPlayer(owner: $owner) {
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
export const onUpdateTournamentPlayer = /* GraphQL */ `
  subscription OnUpdateTournamentPlayer($owner: String) {
    onUpdateTournamentPlayer(owner: $owner) {
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
export const onDeleteTournamentPlayer = /* GraphQL */ `
  subscription OnDeleteTournamentPlayer($owner: String) {
    onDeleteTournamentPlayer(owner: $owner) {
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
export const onCreateTeamMember = /* GraphQL */ `
  subscription OnCreateTeamMember($owner: String) {
    onCreateTeamMember(owner: $owner) {
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
export const onUpdateTeamMember = /* GraphQL */ `
  subscription OnUpdateTeamMember($owner: String) {
    onUpdateTeamMember(owner: $owner) {
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
export const onDeleteTeamMember = /* GraphQL */ `
  subscription OnDeleteTeamMember($owner: String) {
    onDeleteTeamMember(owner: $owner) {
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
