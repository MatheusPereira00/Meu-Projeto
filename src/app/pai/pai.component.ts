import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {








  botaoClicadoPai(textoRecebidoPai: string){

    console.log(`${textoRecebidoPai}`)
    //this.mensagem = `Óla ${textoRecebidoPai}, obrigado por clicar`;
    //this.openDialog();
  }

}
