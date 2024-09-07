import { Component } from '@angular/core';
import { Boletim } from '../boletim/boletim';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  mediaParcial: number | undefined;
  mediaFinal: number | undefined;
  situacao: string | undefined;
  boletim: Boletim | undefined;

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    // Passando os valores dos bimestres para a classe Boletim
    this.boletim = new Boletim(b1, b2, b3, b4);
    this.mediaParcial = this.boletim.getMediaParcial();
    this.situacao = this.boletim.getSituacao();
  }

  calcularMediaFinal(naf: number) {
    if (this.boletim) {
      this.boletim.registrarNotaFinal(naf);
      this.mediaFinal = this.boletim.getMediaFinal();
      this.situacao = this.boletim.getSituacao();
    }
  }
}
