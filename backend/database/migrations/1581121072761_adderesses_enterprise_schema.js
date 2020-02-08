'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdderessesEnterpriseSchema extends Schema {
  up () {
    this.create('adderesses_enterprises', (table) => {
      table
        .integer('enterprise_id')
        .unsigned()
        .references('id')
        .inTable('enterprise')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
    })
  }

  down () {
    this.drop('adderesses_enterprises')
  }
}

module.exports = AdderessesEnterpriseSchema
