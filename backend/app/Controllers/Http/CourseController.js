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
  async index ( { request, response, view } ) {
    const courses = await Course.query().with( 'enterprise' ).fetch()

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
  async store ( { request, auth } ) {
    const data = request.only( ['title', 'description'] )

    const id = await Databsae
      .select( 'id' )
      .table( 'enterprises' )
      .where( { user_id: auth.user.id } )

    const course = await Course
      .create( { ...data, enterprise_id: id[0].id } )

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
  async show ( { params, request, response, view } ) {
    const course = await Course.findOrFail( params.id )

    await course.load( 'enterprise' )

    return course
  }



  /**
   * Update course details.
   * PUT or PATCH courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ( { params, request, response } ) {
    const course = await Course.findOrFail( params.id )
    const data = request.only( ['title', 'description'] )

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
  async destroy ( { params, request, response } ) {
    const course = await Course.findOrFail( params.id )

    await course.delete()
  }
}

module.exports = CourseController
