'use strict'
const Mail = use('Mail')
const CreateUserMailHook = exports = module.exports = {}

CreateUserMailHook.sendNewUserCreated = async (userInstance) => {
  if (!userInstance.id) return
  const { username, email } = userInstance

  await Mail.send(
    ['emails.new_user'],
    { username },
    message => {
      message
        .to(email)
        .from('edup.staff@gmail.com', 'Admin | EdUp')
        .subject('Estamos Unidos :D')
    }
  )
}
