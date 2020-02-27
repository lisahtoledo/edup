'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with enterprises
 */
const Course = use( 'App/Models/Course' )
const Enterprise = use( 'App/Models/Enterprise' )
const Database = use( 'Database' )
class EnterpriseController {
  async index ( { params } ) {
    const enterprise = await Enterprise.all()
    return enterprise
  }
  /**
   * Create/save a new enterprise.
   * POST enterprises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ( { request, response } ) {
    /*     const data = request.only( ['cnpj', 'name_enterprise', 'raz_soc'] )
        const log = request.input( 'log' )
    
        const trx = await Database.beginTransaction()
    
        const enterprise = await Enterprise.create( data, trx )
    
        await enterprise.user().create( log, trx )
    
        trx.commit()
        return enteprise */
  }

  /**
   * Display a single enterprise.
   * GET enterprises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ( { params, request, response, view } ) {
    const course = await Course.findOrFail( params.id )


  }

  /**
   * Update enterprise details.
   * PUT or PATCH enterprises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ( { params, request, response } ) {
  }

  /**
   * Delete a enterprise with id.
   * DELETE enterprises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ( { params, request, response } ) {
  }
}

module.exports = EnterpriseController
