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
        addedBy
        createdAt
        updatedAt
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
        addedBy
        createdAt
        updatedAt
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
        addedBy
        createdAt
        updatedAt
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
  subscription OnCreatePlayer($id: String) {
    onCreatePlayer(id: $id) {
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
          id
          playerId
          tag
          platform
          createdAt
          updatedAt
          playerAccountsId
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
          creator
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
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($id: String) {
    onUpdatePlayer(id: $id) {
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
          id
          playerId
          tag
          platform
          createdAt
          updatedAt
          playerAccountsId
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
          creator
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
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($id: String) {
    onDeletePlayer(id: $id) {
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
          id
          playerId
          tag
          platform
          createdAt
          updatedAt
          playerAccountsId
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
          creator
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
        }
        nextToken
      }
      createdAt
      updatedAt
      playerFriendsId
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($addedBy: String) {
    onCreateGame(addedBy: $addedBy) {
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
      addedBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($addedBy: String) {
    onUpdateGame(addedBy: $addedBy) {
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
      addedBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($addedBy: String) {
    onDeleteGame(addedBy: $addedBy) {
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
      addedBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGameAccount = /* GraphQL */ `
  subscription OnCreateGameAccount($playerId: String) {
    onCreateGameAccount(playerId: $playerId) {
      id
      playerId
      tag
      platform
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const onUpdateGameAccount = /* GraphQL */ `
  subscription OnUpdateGameAccount($playerId: String) {
    onUpdateGameAccount(playerId: $playerId) {
      id
      playerId
      tag
      platform
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const onDeleteGameAccount = /* GraphQL */ `
  subscription OnDeleteGameAccount($playerId: String) {
    onDeleteGameAccount(playerId: $playerId) {
      id
      playerId
      tag
      platform
      createdAt
      updatedAt
      playerAccountsId
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($creator: String) {
    onCreateTeam(creator: $creator) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($creator: String) {
    onUpdateTeam(creator: $creator) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($creator: String) {
    onDeleteTeam(creator: $creator) {
      id
      creator
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTournamentPlayer = /* GraphQL */ `
  subscription OnCreateTournamentPlayer($owner: String, $id: String) {
    onCreateTournamentPlayer(owner: $owner, id: $id) {
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
          addedBy
          createdAt
          updatedAt
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTournamentPlayer = /* GraphQL */ `
  subscription OnUpdateTournamentPlayer($owner: String, $id: String) {
    onUpdateTournamentPlayer(owner: $owner, id: $id) {
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
          addedBy
          createdAt
          updatedAt
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTournamentPlayer = /* GraphQL */ `
  subscription OnDeleteTournamentPlayer($owner: String, $id: String) {
    onDeleteTournamentPlayer(owner: $owner, id: $id) {
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
          addedBy
          createdAt
          updatedAt
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTeamMember = /* GraphQL */ `
  subscription OnCreateTeamMember($id: String, $creator: String) {
    onCreateTeamMember(id: $id, creator: $creator) {
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
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
export const onUpdateTeamMember = /* GraphQL */ `
  subscription OnUpdateTeamMember($id: String, $creator: String) {
    onUpdateTeamMember(id: $id, creator: $creator) {
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
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
export const onDeleteTeamMember = /* GraphQL */ `
  subscription OnDeleteTeamMember($id: String, $creator: String) {
    onDeleteTeamMember(id: $id, creator: $creator) {
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
      }
      team {
        id
        creator
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      creator
    }
  }
`;
