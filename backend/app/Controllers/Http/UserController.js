'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.addresses().createMany(addresses, trx)

    await trx.commit()
    return user
  }

  async show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async update ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    const user = await User.findOrFail(1)
      .then(() => console.log('Resolve updated user'))
      .catch(() => console.log('Death updated is not resolved'))
    return user
  }
}

module.exports = UserController
