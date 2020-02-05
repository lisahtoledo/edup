'use strict'

const Antl = use('Antl')

class File {
  get messages () {
    return Antl.list('validation')
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      avatar: 'file|file_ext:png,jpg|file_size:2mb|file_types:image'
    }
  }
}

module.exports = File
