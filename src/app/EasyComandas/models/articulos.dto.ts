export class ArticuloDTO {
  id: number;
  articulo: string;
  nombre: string;
  familia: string;
  foto: string;
  pvp:number;
  ingredientes:string;
  alergenos:string;
  bloqueado:number;
  error: any;
  
    constructor(   
      id: number,
      articulo: string,
      nombre: string,
      familia: string,
      foto: string,
      pvp:number,
      ingredientes:string,
      alergenos:string,
      bloqueado:number,
    ) {
     this.id=0;
      this.articulo = articulo;
        this.nombre = nombre;
        this.familia = familia;
      this.foto = foto;
      this.pvp = pvp;
      this.ingredientes = ingredientes;
      this.alergenos = alergenos;
      this.bloqueado = bloqueado;
    }
  }


  /* 'articulo' => 'required|numeric',
  'nombre' => 'required|max:60|string',
  'familia' => 'required|numeric',
  'foto' => 'max:40|string',
  'pvp' => 'required|numeric',
  'ingredientes' => 'max:1024|string',
  'alergenos' => 'max:1024|string',
  'bloqueado' => 'required|numeric', */