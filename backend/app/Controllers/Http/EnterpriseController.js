'use strict'
const Enterprise = use( 'App/Models/Enterprise' )
const Database = use( 'Database' )

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with enterprises
 */
class EnterpriseController {
  /**
   * Show a list of all enterprises.
   * GET enterprises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ( { request, response, view } ) {
  }

  /**
   * Render a form to be used for creating a new enterprise.
   * GET enterprises/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ( { request, response, view } ) {
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
    const data = request.only( ['username', 'email', 'password'] )
    const addresses = request.input( 'addresses' )

    const trx = await Database.beginTransaction()

    const enterprise = await Enterprise.create( data, trx )
    await enterprise.addresses().createMany( addresses, trx )

    await trx.commit()
    return enterprise

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
  async show ( { params, auth } ) {
    if ( auth.enterprise.id !== Number( params.id ) ) {
      return "You cannot see someone else's profile"
    }
    return auth.enterprise
  }


  /**
   * Render a form to update an existing enterprise.
   * GET enterprises/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ( { params, request, response, view } ) {
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
