'use strict'

const User = use( 'App/Models/User' )
const Database = use( 'Database' )

class UserController {
  async store ( { request } ) {
    const data = request.only( ['username', 'email', 'password'] )
    const addresses = request.input( 'addresses' )

    const trx = await Database.beginTransaction()

    const user = await User.create( data, trx )
    await user.addresses().createMany( addresses, trx )

    await trx.commit()
    return user
  }

  async show ( { auth, params } ) {
    if ( auth.user.id !== Number( params.id ) ) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async update ( { auth, params, request } ) {
    if ( auth.user.id !== Number( params.id ) ) {
      return "You cannot see someone else's profile"
    }

    const data = request.only( ['username', 'email', 'password'] )
    const addresses = request.input( 'addresses' )

    const trx = await Database.beginTransaction()
    const user = await User.findOrFail( params.id )

    user.merge( data, ...addresses, trx )

    await user.save( trx )

    await user.addresses().createMany( addresses, trx )
    trx.commit()

    return user
  }

  async destroy ( { auth, params } ) {
    if ( auth.user.id !== Number( params.id ) ) {
      return "You cannot see someone else's profile"
    }
    try {
      const user = await User.findOrFail( params.id )
      await user.delete()
      return 'Usuario deletado com sucesso'
    } catch ( error ) {
      return 'Algo deu erro com a exclusão de usuario'
    }
  }
}

module.exports = UserController
