'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCourseSelectedSchema extends Schema {
  up () {
    this.create('user_course_selecteds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_course_selecteds')
  }
}

module.exports = UserCourseSelectedSchema
