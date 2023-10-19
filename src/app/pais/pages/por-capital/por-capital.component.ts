import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError : boolean = false;
  paises : Country [] = [];
  constructor(private paisservice: PaisService) { }
  buscar(termino : string ) {
    this.termino=termino;
    this.hayError=false;
    this.paisservice.buscarCapital(this.termino)
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
