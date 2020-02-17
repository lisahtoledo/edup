'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use( 'Model' )

class Person extends Model {
    user () {
        return this.hasOne( 'App/Models/User' )
    }
    courses () {
        return this.hasMany( 'App/Models/Course' )
    }
}

module.exports = Person
