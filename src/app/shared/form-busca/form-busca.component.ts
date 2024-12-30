import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog, 
    public formBuscaService: FormBuscaService) {}
// injetei o meu formBuscaService do tipo FormBuscaService para que eu possa usar o service aqui nessa class 
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
  
}
