'use strict'

class NewTaskMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewTaskMail-job'
  }

  async handle (data) {
    console.log('NewTaskMail-jobs started')
  }
}

module.exports = NewTaskMail
