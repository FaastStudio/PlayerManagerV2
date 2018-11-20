import api from '@/services/api'

export default {
  register (credentials) {
    let config = { 'Content-Type': 'application/json' }
    return api().post('/users/register', credentials, config)
  },
  authenticate (credentials) {
    let config = { 'Content-Type': 'application/json' }
    return api().post('/users/auth', credentials, config)
  }
}
