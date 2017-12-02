import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrarPerfilPage } from './administrar-perfil';

@NgModule({
  declarations: [
    AdministrarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministrarPerfilPage),
  ],
})
export class AdministrarPerfilPageModule {}
