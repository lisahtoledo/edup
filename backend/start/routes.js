'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.login')

Route.post('logout', 'SessionController.logout')
  .middleware('auth')

Route.post('passwords', 'ForgotPassordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPassordController.update').validator('ResetPassword')

Route.post('/files', 'FileController.store')
  .validator('File')
  .middleware('auth')

Route.get('/files/:id', 'FileController.show')
  .validator('File')
  .middleware('auth')
