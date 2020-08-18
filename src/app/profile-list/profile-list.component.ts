import { Component, OnInit } from '@angular/core';
import { ProfilePageService } from '../profile-page.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public users = [];
  public stats = [];
  constructor(private _profilePageService: ProfilePageService) { }

  ngOnInit(): void {
    this._profilePageService.getProfile()
      .subscribe(data => {
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            this.users.push(data[key]);
          }
        }
        this.stats = this.users[0].stats;
      });
  }

}
