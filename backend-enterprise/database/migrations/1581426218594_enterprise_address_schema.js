'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class EnterpriseAddressSchema extends Schema {
  up () {
    this.create( 'enterprise_addresses', ( table ) => {
      table.increments()
      table
        .integer( 'enterprise_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'enterprises' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'SET NULL' )
      table.string( 'street' ).notNullable()
      table.integer( 'number' ).notNullable()
      table.string( 'district' ).notNullable()
      table.string( 'city' ).notNullable()
      table.string( 'state' ).notNullable()
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'enterprise_addresses' )
  }
}

module.exports = EnterpriseAddressSchema
