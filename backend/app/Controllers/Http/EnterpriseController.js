'use strict'

<<<<<<< HEAD
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
=======
const Enterprise = use('App/Models/Enterprise')

class EnterpriseController {
>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
  async index ({ request, response, view }) {
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
  async create ({ request, response, view }) {
<<<<<<< HEAD
=======

>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
  }

  /**
   * Create/save a new enterprise.
   * POST enterprises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
<<<<<<< HEAD
=======
    const data = request.only(['cnpj', 'raz_soc', 'email', 'password', 'nome'])

    const enterprise = await Enterprise.create(data)

    return enterprise
>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
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
  async show ({ params, request, response, view }) {
  }

  /**
<<<<<<< HEAD
   * Render a form to update an existing enterprise.
   * GET enterprises/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
=======
>>>>>>> 1e3ea32cd73f3af41df971935dc6c87aeecd4c7f
   * Update enterprise details.
   * PUT or PATCH enterprises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a enterprise with id.
   * DELETE enterprises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EnterpriseController
