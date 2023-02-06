import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  //EVENT BINDING COM O BUTTON//

  atributoLegal = 'recebendo clique'

  ngOnInit(): void {
    
  }
  clicarButton(): void {
    console.log('clicou no button');
  }
}
