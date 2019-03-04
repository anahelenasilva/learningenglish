import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  @Input()
  public tentativas: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    if (this.tentativas >= 0) {
      if (this.tentativas !== this.coracoes.length) {
        const indice = this.coracoes.length - this.tentativas;
        this.coracoes[indice - 1].cheio = false;
      }
    }
  }

  ngOnInit() {}
}
