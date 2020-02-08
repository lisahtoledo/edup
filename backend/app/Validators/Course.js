'use strict'

const Antl = use('Antl')

class Course {
  get messages () {
    return Antl.list('validation')
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
}

module.exports = Course
