'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use( 'Model' )

class Course extends Model {
    enterprise () {
        return this.belongsTo( 'App/Models/Enterprise' )
    }
    people () {
        return this.hasMany( 'App/Models/Person' )
    }

    file () {
        return this.belongsTo( 'App/Models/File' )
    }
}

module.exports = Course
