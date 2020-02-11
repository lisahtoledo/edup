'use strict'

const Route = use( 'Route' )
// User
Route.post( 'users', 'UserController.store' )
  .validator( 'User' )
Route.get( 'users/:id', 'UserController.show' )
  .middleware( 'auth' )
Route.put( 'users/:id', 'UserController.update' )
  .middleware( 'auth' )
Route.delete( 'users/:id', 'UserController.destroy' )
  .middleware( 'auth' )

/* Login user */
Route.post( 'sessions', 'SessionController.login' )

/* LogOut user */
Route.post( 'logout', 'SessionController.logout' )
  .middleware( 'auth' )

/* Forgot password */
Route.post( 'passwords', 'ForgotPassordController.store' )
  .validator( 'ForgotPassword' )
Route.put( 'passwords', 'ForgotPassordController.update' )
  .validator( 'ResetPassword' )

/* Course */
Route.post( 'enterprises.courses', 'CourseController.register' )
  .middleware( 'auth' )

/* Upload files */
Route.post( '/files', 'FileController.store' )
  .validator( 'File' )
  .middleware( 'auth' )
Route.get( '/files/:id', 'FileController.show' )
  .validator( 'File' )
  .middleware( 'auth' )
