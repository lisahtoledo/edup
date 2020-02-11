'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class TokensSchema extends Schema {
  up () {
    this.create( 'tokens_enterprises', ( table ) => {
      table.increments()
      table.integer( 'enterprise_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'enterprises' )
      table.string( 'token', 255 )
        .notNullable()
        .unique()
        .index()
      table.string( 'type', 80 )
        .notNullable()
      table.boolean( 'is_revoked' )
        .defaultTo( false )
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'tokens_enterprise' )
  }
}

module.exports = TokensSchema
