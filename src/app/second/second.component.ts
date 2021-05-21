import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  userId: number
  foundUser: User
  userNotFound = true
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.subToRouteParams()
  }

  subToRouteParams() {
    if (this.route && this.route.params) {
      this.route.params.subscribe(params => {
        if (params && params.userId) {
          this.userId = +params.userId
          this.userNotFound = false
          if (this.userId) {
            const user = this.userService.getUserById(this.userId)
            if (user) {
              this.foundUser = user
            } else {
              this.userNotFound = true
            }
          }
        } else {
          this.userId = null
          this.userNotFound = true
        }
      })
    } else {
      this.userId = null
    }
  }

}
