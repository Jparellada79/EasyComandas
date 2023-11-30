import {ComandaDTO} from '../Models/comandas.dto'

export class MesaDTO {
 
  id:number;
    mesa: number;
    texto: string;
    comandas:ComandaDTO[];
    
    constructor(  id:number,mesa: number, texto: string,comandas:ComandaDTO[]) {
      this.id=0;
      this.mesa = mesa;
      this.texto = texto;
      this.comandas = comandas;
       }
  }
  export class MesaResumen {
    numeroMesa: number;
    usuarioComanda: string;
    comensales: number;
    totalComanda: number;
    tieneServidoPendiente: boolean;
  
    constructor(
      numeroMesa: number,
      usuarioComanda: string,
      comensales: number,
      totalComanda: number,
      tieneServidoPendiente: boolean
    ) {
      this.numeroMesa = numeroMesa;
      this.usuarioComanda = usuarioComanda;
      this.comensales = comensales;
      this.totalComanda = totalComanda;
      this.tieneServidoPendiente = tieneServidoPendiente;
    }
  }