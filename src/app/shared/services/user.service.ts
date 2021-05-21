import { Injectable } from '@angular/core';
import { MockUsers } from '../mock-data/mock-users'
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockUsers = MockUsers
  constructor() { }

  getAllUsers(): User[] {
    return this.mockUsers
  }

  getUserById(id: number): User {
    debugger
    const foundUser = this.mockUsers.find(x => x.id === id)
    if (foundUser) {
      return foundUser
    } else {
      return null
    }
  }

}
