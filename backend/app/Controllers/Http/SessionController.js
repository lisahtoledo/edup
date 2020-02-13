'use strict'
class SessionController {
  async login ( { auth, request, response } ) {
    try {
      const { email, password } = request.all()
      await auth.attempt( email, password )

      return 'Logged in successfully'
    } catch ( error ) {
      return response.status( 401 ).send( { message: 'Usuario ou senha, invalido' } )
    }
  }

  async logout ( { auth, response } ) {
    try {
      await auth.logout()
        .then( () => console.log( 'Usuario deslogado' ) )
        .catch( () => console.log( 'Error ao tentar deslogar' ) )
      return response.status( 200 ).send( { message: 'Usuario deslogado com sucesso' } )
    } catch ( error ) {
      return response.status( 500 ).send( 'Algo de errado aconteceu!!', error )
    }
  }
}

module.exports = SessionController
