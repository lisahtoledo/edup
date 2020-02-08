'use strict'

const Antl = use('Antl')

class ResetPassword {
  get messages () {
    return Antl.list('validation')
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ResetPassword
