import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: false,
})
export class PersonajesPage implements OnInit {
  characters:  any; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dragonball-api.com/api/characters')
      .subscribe(res => {
        console.log(res);  
        this.characters = res.items || res.results || []; 
      });
  }
}

