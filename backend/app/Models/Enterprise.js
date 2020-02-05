'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Enterprise extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  course () {
    return this.belongsToMany('App/Models/Course')
  }

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Enterprise
