'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with people
 */

const Database = use( 'Database' )
const Person = use( 'App/Models/Person' )
const Database = use( 'Database' )
const Course = use( 'App/Models/Course' )
class PersonController {
  /**
   * Create/save a new person.
   * POST people
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ( { request } ) {
    const data = request.only( ['username'] )
    const userLoging = request.input( 'user' )

    const trx = await Database.beginTransaction()

    const person = await Person.create( data, trx )
    await person.user().create( userLoging, trx )

    await trx.commit()
    return person
  }

  /**
   * Display a single person.
   * GET people/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ( { params, request, response, view } ) {
  }

  /**
   * Update person details.
   * PUT or PATCH people/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ( { params, request, response } ) {
  }

  /**
   * Delete a person with id.
   * DELETE people/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ( { params, request, response } ) {
  }

  async addCourse ( { params, request, response } ) {
    const course = await Course.findOrFail( params.id )

    return course
  }
}

module.exports = PersonController
