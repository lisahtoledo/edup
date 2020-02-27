'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use( 'Schema' )

class CourseSchema extends Schema {
  up () {
    this.create( 'courses', ( table ) => {
      table.increments()
      table
        .integer( 'enterprise_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'enterprises' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'CASCADE' )
        .notNullable()
      table
        .integer( 'person_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'people' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'SET NULL' )
      table
        .integer( 'file_id' )
        .unsigned()
        .references( 'id' )
        .inTable( 'files' )
        .onUpdate( 'CASCADE' )
        .onDelete( 'SET NULL' )
      table.string( 'title' ).notNullable()
      table.text( 'description' ).notNullable()
      table.timestamp( 'due_date' )
<<<<<<< HEAD
=======
      table.string( 'nicho', 50 )
>>>>>>> 8bd24fd9294dd9b03fd9a9cfb7e9725c1f0b0bdf
      table.timestamps()
    } )
  }

  down () {
    this.drop( 'courses' )
  }
}

module.exports = CourseSchema
