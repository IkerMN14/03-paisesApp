import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostarSugerencias:boolean=false;


  constructor(private paisservice: PaisService) { }

  sugerencias(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostarSugerencias=true;
    this.paisservice.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0,5);
        }
        ,
        error: (e) => {
          this.paisesSugeridos=[];
        }
      }
      );
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostarSugerencias=false;
    this.paisservice.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
          console.log(paises);
          console.log(paises[0].capital);
        }
        ,
        error: (e) => {
          console.log(e);
          this.hayError = true;
        }
      }
      );
  }
  
}
