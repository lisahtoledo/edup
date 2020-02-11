'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class EnterpriseSchema extends Schema {
  up () {
    this.create( 'Enterprises', ( table ) => {
      table.increments()
      table.string( 'username', 80 ).notNullable().unique()
      table.string( 'email', 254 ).notNullable().unique()
      table.string( 'password', 60 ).notNullable()
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'Enterprises' )
  }
}

module.exports = EnterpriseSchema
