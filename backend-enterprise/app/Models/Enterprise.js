'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use( 'Model' )

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use( 'Hash' )

class Enterprise extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the enterprise password before saving
     * it to the database.
     */
    this.addHook( 'beforeSave', async ( enterpriseInstance ) => {
      if ( enterpriseInstance.dirty.password ) {
        enterpriseInstance.password = await Hash.make( enterpriseInstance.password )
      }
    } )
  }

  addresses () {
    return this.hasMany( 'App/Models/EnterpriseAddress' )
  }

  tokens () {
    return this.hasMany( 'App/Models/Token' )
  }
}

module.exports = enterprise
