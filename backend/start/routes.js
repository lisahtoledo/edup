'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.resource('enterprise', 'EnterpriseController').validator('Enterprise').apiOnly()

Route.post('passwords', 'ForgotPassordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPassordController.update').validator('ResetPassword')

Route.post('/files', 'FileController.store').validator('File')
Route.get('/files/:id', 'FileController.show')
