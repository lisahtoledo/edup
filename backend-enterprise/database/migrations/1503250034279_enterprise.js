'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class EnterpriseSchema extends Schema {
  up () {
    this.create( 'enterprises', ( table ) => {
      table.increments()
      table.string( 'username', 80 ).notNullable().unique()
      table.string( 'email', 254 ).notNullable().unique()
      table.string( 'password', 60 ).notNullable()
      table.timestamp( 'token_created_at' )
      table.string( 'token' )
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'enterprises' )
  }
}

module.exports = EnterpriseSchema
