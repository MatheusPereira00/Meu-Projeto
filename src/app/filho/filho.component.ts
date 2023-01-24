import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit{








  @Output() botaoClicadoFilho = new EventEmitter<any>();

  ngOnInit(): void {}


  botaoClicado(entradaValor: string | null) {
    this.botaoClicadoFilho.emit(entradaValor);
  }

}


//import { outputAst } from '@angular/compiler';