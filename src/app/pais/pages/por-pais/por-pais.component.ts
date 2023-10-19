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
  hayError : boolean = false;
  paises : Country [] = [];
  constructor(private paisservice: PaisService) { }
  buscar(termino : string ) {
    this.termino=termino;
    this.hayError=false;
    this.paisservice.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          this.paises= paises;
          console.log(paises);
          console.log(paises[0].capital);
        }
        ,
        error: (e) => {
          console.log(e);
          this.hayError=true;
        }
      }
      );

    //console.log(this.termino);
  }
}
