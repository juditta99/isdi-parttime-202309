import { validateText } from '../utils/validators'
import context from './context'

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
  validateText(newEmail, 'email')
  validateText(newEmailConfirm, 'new email confirm')
  validateText(password, 'password')

  // TODO refactor to call API

  // const user = db.users.findById(context.sessionUserId, (error, user) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }

  //   if (!user || user.password !== password) {
  //     callback(new Error('wrong credentials'))

  //     return
  //   }

  //   if (newEmail !== newEmailConfirm) {
  //     callback(new Error('emails do not match'))
  //   }

  //   user.email = newEmail

  //   db.users.update(user, (error) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     callback(null)
  //   })
  // })
}

export default changeUserEmail
