import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  myControl = new FormControl('');
  @Input() label!: string; // o ponto de exclamação é para tirar o problema de não inicialização da variável label
  @Input() iconePrefixo!: string;

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    // Busca inicial da lista completa de unidades federativas
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;

      // Configura o Observable para filtrar os resultados
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();
    return this.unidadesFederativas.filter((option) =>
      option.nome.toLowerCase().includes(filterValue)
    );
  }
}
