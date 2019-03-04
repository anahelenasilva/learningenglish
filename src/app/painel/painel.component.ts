import { FRASES } from './frases-mock';
import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta: string;

  public rodada = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  verificarResposta(): void {
    if (this.resposta === '' || this.resposta === undefined || this.resposta === ' ') {
      alert('Informe uma resposta');
      return;
    }

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('A resposta está correta!');
      this.rodada = this.rodada + 1;

      if (this.rodada <= this.frases.length) {
        this.rodadaFrase = this.frases[this.rodada];
      }
    } else {
      alert('A resposta está incorreta');
    }
  }

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
}
