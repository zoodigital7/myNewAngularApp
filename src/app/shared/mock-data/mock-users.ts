import { User } from '../models/user'
export const MockUsers = [
  new User({id: 1, firstName: 'Jenny', email: 'jennysomething@gmail.com', phone: '8675309', gender: 'F' }),
  new User({id: 2, firstName: 'Bill', email: 'billsomething@gmail.com', phone: '4444444', gender: 'M' }),
  new User({id: 3, firstName: 'Ted', email: 'tedsomething@gmail.com', phone: '7777777', gender: 'M' }),
  new User({id: 4, firstName: 'Sheila', email: 'sheilasomething@gmail.com', phone: '8888888', gender: 'F' }),
  new User({id: 5, firstName: 'Evelyn', email: 'evelynsomething@gmail.com', phone: '9999999', gender: 'F' }),
  new User({id: 6, firstName: 'Johhny', email: 'johnnysomething@gmail.com', phone: '3333333', gender: 'M' }),
]
