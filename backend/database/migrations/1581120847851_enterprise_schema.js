'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnterpriseSchema extends Schema {
  up () {
    this.create('enterprises', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('enterprises')
  }
}

module.exports = EnterpriseSchema
