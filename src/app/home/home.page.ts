import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  characters: any; 
  filteredCharacters: any; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dragonball-api.com/api/characters')
      .subscribe(res => {
        this.characters = res.items; // Asegúrate de que la API devuelve `items`
        this.filteredCharacters = [...this.characters]; // Copia de la lista original
      });
  }

  // 🔍 Función para filtrar los personajes
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCharacters = this.characters.filter((character: { name: string; }) =>
      character.name.toLowerCase().includes(query)
    );
  }
}


