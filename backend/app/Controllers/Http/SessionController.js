'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, auth, response }) {

  }

  async login ({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async logout ({ auth, response, request }) {
    try {
      await auth.logout()
        .then(() => console.log('Usuario deslogado'))
        .catch(() => console.log('Error ao tentar deslogar'))
    } catch (error) {
      return response.send('Algo de errado aconteceu!!', error)
    }
  }
}

module.exports = SessionController
