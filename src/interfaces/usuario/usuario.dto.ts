export interface IDatosPersonales {
  nombre?: string;
  email?: string;
}

/**
 * Interface para crear un usuario
 */
export interface ICreateUsuario {
  username: string;
  /**
   * La clave que ingresa el usuario, no se guarda, se usa para generar el hash en el backend
   */
  clave: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}

/**
 * Interface para actualizar un usuario, todos los campos son opcionales
 */
export interface IUpdateUsuario {
  username?: string;
  /**
   * La clave que ingresa el usuario, no se guarda, se usa para generar el hash en el backend
   */
  clave?: string;
  hash?: string;
  activo?: boolean;
  datosPersonales?: IDatosPersonales;
}
