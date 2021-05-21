export class User {
  id: number
  firstName: string
  email: string
  phone: string
  gender: string
  constructor({
    id = 0,
    firstName = '',
    email = '',
    phone = '',
    gender = ''
  }) {
    this.id = id
    this.firstName = firstName
    this.email = email
    this.phone = phone
    this.gender = gender
  }
}
