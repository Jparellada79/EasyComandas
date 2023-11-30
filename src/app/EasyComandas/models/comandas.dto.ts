export class ComandaDTO {
    id: number;
    fecha:Date;
    nota:number;
    linea:number;
    mesa:number;
    articulo:number;
    nombreArticulo:string;
    cantidad:number;
    pvp:number;
    usuario:string;
    servido:number;
    cerrada:number;
    
      constructor(   
        id: number,
    fecha:Date,
    nota:number,
    linea:number,
    mesa:number,
    articulo:number,
    nombreArticulo:string,
    cantidad:number,
    pvp:number,
    usuario:string,
    servido:number,
    cerrada:number
      ) {
       this.id=0;
        this.fecha = fecha;
          this.nota = nota;
          this.linea = linea;
        this.mesa = mesa;
        this.articulo=articulo;
        this.nombreArticulo=nombreArticulo;
        this.cantidad=cantidad;
        this.pvp = pvp;
        this.usuario = usuario;
        this.servido = servido;
        this.cerrada = cerrada;
      }
    }
    