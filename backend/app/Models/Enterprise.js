'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
<<<<<<< HEAD
=======

>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
class Enterprise extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

<<<<<<< HEAD
=======
  course () {
    return this.belongsToMany('App/Models/Course')
  }

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }

>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Enterprise
