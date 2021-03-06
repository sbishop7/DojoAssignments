import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { UserService } from "./../user/user.service"

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  user_id: string
  username: string
  user = {username: "", user_id: ""}

  constructor( private _userService: UserService, private _router: Router ) {
    this._userService.check_status()
      .then((data) => {
        if(data){
          this.user.username = data.username
          this.user.user_id = data.user_id
        }
      })
      .catch(() => this._router.navigate(["/login"]) )
   }

  ngOnInit() {
  }

  logout(){
    this._userService.logout()
                    .then(() => {
                      this._router.navigate(['/'])
                    })
                    .catch((err) => {
                      console.log(err)
                      this._router.navigate(['/'])
                    })
  }
}
