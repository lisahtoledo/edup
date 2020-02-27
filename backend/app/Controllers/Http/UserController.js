'use strict'

const User = use( 'App/Models/User' )
const Database = use( 'Database' )
const Enterprise = use( 'App/Models/Enterprise' )

class UserController {

    async store ( { request } ) {
        const data = request.only( ['email', 'password', 'isEnterprise'] )
        const person = request.input( 'person' )

        const trx = await Database.beginTransaction()

        const user = await User.create( data, trx )
        if ( data.isEnterprise === '1' ) {
            await user.enterprise().createMany( person, trx )
            await trx.commit()
            return user
        } else {
            await user.person().createMany( person, trx )

            await trx.commit()
            return user
        }
    }

    async show ( { auth, params } ) {
        if ( auth.user.id !== Number( params.id ) ) {
            return "You cannot see someone else's profile"
        }
        const usuario = await auth.user
        const enterprise = Enterprise.findOrFail( usuario.id )
        return enterprise
        /* return auth.user */
    }

    async update () {

    }
}

module.exports = UserController
