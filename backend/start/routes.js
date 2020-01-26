'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords', 'ForgotPassordController.store')
Route.put('passwords', 'ForgotPassordController.update')
