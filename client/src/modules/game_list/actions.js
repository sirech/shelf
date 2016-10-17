import fetch from 'isomorphic-fetch'

import prepareUrl from './../utils/url'

export const REQUEST_GAMES = 'games:request'
export const RECEIVE_GAMES = 'games:receive'

const requestGames = () => ({
  type: REQUEST_GAMES
})

const receiveGames = (games) => ({
  type: RECEIVE_GAMES,
  games: games
})

export function fetchGames (year) {
  return (dispatch) => {
    dispatch(requestGames())

    const url = prepareUrl(`/rest/games?year=${year}`)
    const headers = { 'Accept': 'application/json' }

    return fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => dispatch(receiveGames(data)))
  }
}
