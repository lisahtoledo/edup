'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnterpriseSchema extends Schema {
  up () {
    this.create('enterprises', (table) => {
      table.increments()
      table.string('nome', 60).notNullable()
      table.string('cnpj', 30).notNullable()
      table.text('raz_soc').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('token')
      table.string('nivel', 1).defaultTo('2')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('enterprises')
  }
}

module.exports = EnterpriseSchema
