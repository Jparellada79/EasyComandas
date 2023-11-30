export class FamiliaDTO {
  id: number;
  familia: number;
  nombre: string;
  foto: string;
  bloqueado:number;
  
    constructor(   
      id: number,
      familia: number,
      nombre: string,
      foto: string,
        bloqueado:number,
    ) {
     this.id=0;
     this.familia = familia;
    this.nombre = nombre;    
      this.foto = foto;   
      this.bloqueado = bloqueado;
    }
  }
