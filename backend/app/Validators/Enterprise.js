'use strict'

const Antl = use('Antl')

class Enterprise {
  get messages () {
    return Antl.list('validation')
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|unique:enterprises',
      password: 'required|confirmed'
    }
  }
}

module.exports = Enterprise
