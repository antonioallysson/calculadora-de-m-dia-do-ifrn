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
    if (this.validaNota(b1) && this.validaNota(b2) && this.validaNota(b3) && this.validaNota(b4)) {
      this.boletim = new Boletim(b1, b2, b3, b4);
      this.mediaParcial = this.boletim.getMediaParcial();
      this.situacao = this.boletim.getSituacao();
    } else {
      alert("Todas as notas devem estar entre 0 e 100.");
    }
  }

  calcularMediaFinal(naf: number) {
    if (this.boletim && this.validaNota(naf)) {
      this.boletim.registrarNotaFinal(naf);
      this.mediaFinal = this.boletim.getMediaFinal();
      this.situacao = this.boletim.getSituacao();
    } else {
      alert("A nota da avaliação final deve estar entre 0 e 100.");
    }
  }

  private validaNota(nota: number): boolean {
    return nota >= 0 && nota <= 100;
  }
}
