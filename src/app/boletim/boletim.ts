export class Boletim {
  private bimestre1: number;
  private bimestre2: number;
  private bimestre3: number;
  private bimestre4: number;
  private naf: number | null;
  private mp: number;
  private md: number;
  private situacao: string;

  constructor(b1: number, b2: number, b3: number, b4: number) {
    this.bimestre1 = b1;
    this.bimestre2 = b2;
    this.bimestre3 = b3;
    this.bimestre4 = b4;
    this.naf = null;
    this.mp = this.calcularMediaParcial();
    this.md = this.mp;
    this.situacao = this.calcularSituacao();
  }

  private calcularMediaParcial(): number {
    return (this.bimestre1 * 2 + this.bimestre2 * 2 + this.bimestre3 * 3 + this.bimestre4 * 3) / 10;
  }

  private calcularSituacao(): string {
    if (this.mp >= 60) {
      return "Aprovado(a)";
    } else if (this.mp >= 10) {
      return "Avaliação final";
    } else {
      return "Reprovado(a)";
    }
  }

  public registrarNotaFinal(naf: number): void {
    if (this.situacao === "Avaliação final") {
      this.naf = naf;
      this.md = (this.mp + naf) / 2;
      this.situacao = this.md >= 60 ? "Aprovado(a)" : "Reprovado(a)";
    }
  }

  public getMediaParcial(): number {
    return this.mp;
  }

  public getMediaFinal(): number {
    return this.md;
  }

  public getSituacao(): string {
    return this.situacao;
  }
}
