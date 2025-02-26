import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  profileId: any;
  character: any ;
  constructor(
    private activateRoute: ActivatedRoute ,
    private http: HttpClient
  ) {
      }

  ngOnInit() {
    this.profileId = this.activateRoute.snapshot.paramMap.get('id')
    this.http.get('https://dragonball-api.com/api/characters/' + this.profileId)
    .subscribe(res => this.character = res
        
  );
  }

}

