import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PersonajesPage } from './personajes.page';
import { PersonajesPageRoutingModule } from './personajes-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule
  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
