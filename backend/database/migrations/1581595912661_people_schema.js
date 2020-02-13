'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class PeopleSchema extends Schema {
  up () {
    this.create( 'people', ( table ) => {
      table.increments()
      table.string( 'username', 80 )
        .notNullable()
        .unique()
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
    this.drop( 'people' )
  }
}

module.exports = PeopleSchema
