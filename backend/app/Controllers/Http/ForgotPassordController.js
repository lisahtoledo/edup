'use strict'

const moment = require('moment')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPassordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password', 'emails.forgot_password-text.txt'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from('andre.bluiz94@gmail.com', 'staf | EdUp')
            .subject('Recuperação de senha')
        }
      )

      return response
        .status(204)
        .send({
          message: 'E-mail enviado, virifique sua caixa de entrada do seu E-mail.'
        })
    } catch (err) {
      return response
        .status(err.status)
        .send({ Error: { message: 'Algo não deu certo esse Email exit?' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)
      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Algo deu errado, o token está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ Error: { message: 'Algo não deu errado ao resetar sua senha' } })
    }
  }
}

module.exports = ForgotPassordController
