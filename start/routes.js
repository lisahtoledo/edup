'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use( 'Route' )

/* register user: Enterprise or person commum */
Route.post( 'user', 'UserController.store' )

/* Log((In) or (Out)) */
Route.post( 'login', 'SessionController.store' )
    .middleware( ['guest'] )

Route.post( 'logout', 'SessionController.destroy' )
    .middleware( ['auth'] )

Route.get( 'user/:id', 'UserController.show' )
    .middleware( ['auth'] )

/* ForgotPassword */
Route.post( 'passwords', 'ForgotPassordController.store' )
Route.put( 'passwords', 'ForgotPassordController.update' )


Route.get( 'files/:id', 'FileController.show' )
Route.group( () => {
    /* files update */
    Route.post( 'files', 'FileController.store' )
    /* Courses */
    Route.resource( 'enterprise.course', 'CourseController' ).apiOnly()
    /* Person add course */
} ).middleware( ['auth'] )

