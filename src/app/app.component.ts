import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jogoEmAndamento = true;
  public vitoria = false;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.vitoria = tipo === 'vitoria';
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.vitoria = false;
  }
}
