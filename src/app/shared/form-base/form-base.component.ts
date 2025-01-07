import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidations } from '../form-validations';
@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  @Input() perfilComponent: boolean = false;
  @Input() titulo: string = 'CADASTRAR'
  @Input() textoBotao: string = 'Crie sua conta'



  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()
  // Output serve pra dizer algo pra outro componente. Nesse caso ele vai enviar um sinal para o componente pai dizendo (fui clicado) e ai o componente pai inicializa o processo de requisição

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ['12312312123', [Validators.required]],
      cidade: ['City', Validators.required],
      email: ['chapolin@email.com', [Validators.required, Validators.email]],
      senha: ['123', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['12312312123', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ['chapolin@email.com', [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: ['123', [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [false, [Validators.requiredTrue]]
    });
    this.formularioService.setCadastro(this.cadastroForm)
  }
  if(this.perfilComponent) {
    this.cadastroForm.get('aceitarTermos')?.setValidators (null)
  }
  executarAcao() {
    this.acaoClique.emit();
    // Emititindo o evento. Agora basta o componente pai escutar 

  }
}

