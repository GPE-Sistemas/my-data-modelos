import { IDatosPersonales } from "./usuario.dto";

/**
 * Interface que representa un usuario en la base de datos
 */
export interface IUsuario {
  _id: string;
  username: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  /**
   * Indica si el usuario está activo o no, se autogenera en "true" al crearlo
   */
  activo: boolean;
  /**
   * Campo autogenerado por la db al crear la entidad
   */
  fechaCreacion: string;
}
