

export class UserDTO {
  usuario: string;
  access_token: string;
  nombre: string;
  password: string;
  rol:number;
  foto:string;

  constructor(
    usuario: string,
    access_token: string,
    nombre: string,
    password: string,
    rol:number,
    foto:string
  ) {
    this.usuario = usuario;
    this.access_token = access_token;
      this.nombre = nombre;
      this.password = password;
    this.rol = rol;
    this.foto = foto;
  }
}

