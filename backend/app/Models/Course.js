'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {
  use () {
    return this.belongsToMany('App/Models/User')
  }
}

module.exports = Course
