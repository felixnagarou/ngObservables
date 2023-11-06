import { Component } from '@angular/core';
import {ModuloService} from "../../services/modulo.service";

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent {
  letter:string = ""

  constructor( private moduloServce: ModuloService){}


  alphabetHandler(){
    this.moduloServce.convertNumbersToAscii().subscribe({
      next: (value) => {
        this.letter = value
      },
      complete:() =>{
        this.letter = "done"
      }
    })
  }



}
