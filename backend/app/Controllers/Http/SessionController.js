'use strict'

const User = use( 'App/Models/User' )

class SessionController {
    async store ( { request, auth, response } ) {
        const { email, password } = request.all()
        try {
            await auth.attempt( email, password )
        } catch ( error ) {
            console.log( 'Algo deu errado: ', error );

            return response.status( error.status ).send( { message: "User not authentozed" } )
        }

        return response.status( 200 ).send( { message: "Login sucessfully" } )
    }

    async destroy ( { auth, response } ) {
        try {
            await auth.logout()
                .then( () => response.status( 200 ).send( { message: "User LogOutSucess" } ) )
                .catch( () => response.status( 401 ).send( { message: "You loged some alse" } ) )
        } catch ( error ) {
            console.log( "Same wrong: ", error );

        }
    }
}

module.exports = SessionController
