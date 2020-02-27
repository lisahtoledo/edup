'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Course = use( 'App/Models/Course' )
const Enterprise = use( 'App/Models/Enterprise' )
const User = use( 'App/Models/User' )
const Databsae = use( 'Database' )
class CourseController {
  /**
   * Show a list of all courses.
   * GET courses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ( { params } ) {
    const courses = await Course.query()
      .where( 'enterprise_id', params.enterprise_id )
      .with( 'enterprise' )
      .fetch()

    return courses
  }

  /**
   * Create/save a new course.
   * POST courses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ( { request, auth, params, response } ) {
    const data = request.only( [
      'title',
      'description',
      'nicho',
      'due_date',
      'person_id'
    ] )
    const course = await Course
      .create( { ...data, enterprise_id: params.enterprise_id } )

    return course
  }

  /**
   * Display a single course.
   * GET courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ( { params } ) {
    try {
      const course = await Course.findOrFail( params.id )

      await course.load( 'enterprise' )

      return course

    } catch ( error ) {
      console.log( `Same wrong on: ${error}` );
    }
  }



  /**
   * Update course details.
   * PUT or PATCH courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ( { params, request, auth } ) {
    const course = await Course.findOrFail( params.id )
    let data = request.only( [
      'title',
      'description',
      'nicho',
      'due_date',

    ] )
    const user_auth = await auth.getUser()
    const user = await User.findOrFail( user_auth.id )

    if ( user.isEnterprise === '0' ) {
      const person = await Database.select( 'id', 'etnia' )
        .from( 'people' )
        .where( 'user_id', user_auth.id )

      /*       if ( person.etnia !== course.nicho ) {
              return
            } */

      let value
      if ( course.person_id === person[0].id ) {
        value = { person_id: null }
      } else {
        value = { person_id: person[0].id }
      }
      data = value
    }
    course.merge( data )
    await course.save()
    return course
  }

  /**
   * Delete a course with id.
   * DELETE courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ( { params, response } ) {
    const course = await Course.findOrFail( params.id )
    const enterprise = await Enterprise.findOrFail( course.enterprise_id )
    if ( course.enterprise_id === enterprise.id )
      return await course.delete()
    return response.send( 'Something wrong' )
  }
}

module.exports = CourseController
