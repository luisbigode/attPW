import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';

const routes: Routes = [
  {path: 'cadastro-viagem', component: CadastroViagemComponent},
  {path: '', component: ListagemViagemComponent},
  {path: 'detalhes-viagem/:id', component: DetalhesViagemComponent},
  {path: 'exclusao-viagem/:id', component: ExclusaoViagemComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
