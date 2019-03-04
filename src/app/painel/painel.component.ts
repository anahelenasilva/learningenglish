import { FRASES } from './frases-mock';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';

  public progresso = 0;

  public rodada = 0;
  public rodadaFrase: Frase;

  public tentativas = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizarFraseRodada();
  }

  ngOnInit() {
  }

  verificarResposta(): void {
    if (this.resposta === '' || this.resposta === undefined || this.resposta === ' ') {
      alert('Informe uma resposta');
      return;
    }

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada = this.rodada + 1;
      this.progresso = this.progresso + (100 / this.frases.length);
      console.log(this.progresso);

      if (this.rodada < this.frases.length) {
        this.atualizarFraseRodada();
      } else {
        this.encerrarJogo.emit('vitoria');
      }
    } else {
      this.tentativas = this.tentativas - 1;

      if (this.tentativas <= -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  private atualizarFraseRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
