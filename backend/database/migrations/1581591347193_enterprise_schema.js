'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class EnterpriseSchema extends Schema {
  up () {
    this.create( 'enterprises', ( table ) => {
      table.increments()
      table.string( 'cnpj', 14 )
        .unique()
        .notNullable()
      table.string( 'name_enterprise', 200 )
        .unique()
        .notNullable()
      table.string( 'raz_soc', 200 )
      table
        .integer( 'user_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'users' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'SET NULL' )
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'enterprises' )
  }
}

module.exports = EnterpriseSchema
