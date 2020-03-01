'use strict'

const moment = require( 'moment' )
const crypto = require( 'crypto' )
const User = use( 'App/Models/User' )
const Mail = use( 'Mail' )
const LogOut = require( './SessionController' )

class ForgotPassordController {
    async store ( { request, response } ) {
        try {
            const email = request.input( 'email' )
            const user = await User.findBy( 'email', email )

            user.token = crypto.randomBytes( 10 ).toString( 'hex' )
            user.token_created_at = new Date()



            await user.save()
            await Mail.send(
                ['emails.forgot_password'],
                { email, token: user.token, link: `${request.input( 'redirect_url' )}?token=${user.token}` },
                message => {
                    message
                        .to( user.email )
                        .from( 'Andre@edu.com.br', 'STAF | EDUP' )
                        .subject( 'Recuperação de senha!' )
                } )
        } catch ( error ) {
            console.log( 'Error:', error );

            return response
                .status( error.status )
                .send( { error: { message: 'Same wrong, this email exist?' } } )
        }
    }
    async update ( { request, response, auth } ) {
        try {
            const { token, password } = request.all()

            const user = await User.findByOrFail( 'token', token )

            const tokenExpired = moment()
                .subtract( '2', 'days' )
                .isAfter( user.token_created_at )

            if ( tokenExpired ) {
                return response
                    .status( 401 )
                    .send( { error: { message: 'O token está expired' } } )
            }

            user.token = null
            user.token_created_at = null
            user.password = password
            console.log( `Usuario: ${user.token}
                                Usuario token criado: ${user.token_created_at}
                                Usuario password: ${user.password}
            `
            );

            await user.save()
            await LogOut.destroy( auth, response )
        } catch ( error ) {
            console.log( 'Error:', error );

            return response
                .status( error.status )
                .send( { error: { message: 'Same wrong to reset password!' } } )
        }
    }
}

module.exports = ForgotPassordController
