'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class PeopleSchema extends Schema {
  up () {
    this.create( 'people', ( table ) => {
      table
        .increments()
      table
        .integer( 'user_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'users' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'CASCADE' )
      table
        .string( 'username', 80 )
        .notNullable()
      table
        .enu( 'etnia', ['branco', 'negro', 'outros'] )
        .notNullable()
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'people' )
  }
}

module.exports = PeopleSchema
