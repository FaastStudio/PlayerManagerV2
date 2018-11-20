import api from '@/services/api'

export default {
  getAllPlayers (jwt) {
    return api().get('/players', jwt)
  },
  createNewPlayer (input, jwt) {
    return api().post('/players', input, jwt)
  },
  deletePlayer (playerId, jwt) {
    return api().delete('/players/' + playerId, jwt)
  },
  getPlayerById (playerId, jwt) {
    return api().get('/players/' + playerId, jwt)
  },
  updatePlayer (playerId, update, jwt) {
    return api().put('/players/' + playerId, jwt, update)
  }
}
