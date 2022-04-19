# Modelo de datos de My Data

## Consideraciones

- Todas las interfaces empiezan con I, para diferenciarlas de las clases. ej: IUsuario.

- Todas las interfaces se deben exportar en el archivo src/index.ts.

- Todos los campos que representen fechas se definen de tipo string, ya que MongoDB los devuelve como ISO string.

- Los \_id y id de referencia a otro documento de MongoDB son tipo string.

- Generalmente todas las entidades van a tener 3 interfaces
  - **ICreateEntidad** Con los datos necesario que se deben ingresar para crear la entidad.
  - **IUpdateEntidad** Con todos los campos que pudan ser modificados como opcionales.
  - **IEntidad** Representa el modelo que se guarda en la DB.

# Uso de la dependencia

## _1-_ En package.json agregar la dependencia

```
"modelos": "https://github.com/GPE-Sistemas/my-data-modelos.git"
```

## _2-_ En package.json agregar el script para actualizar

```
"modelos": "yarn upgrade modelos"
```

## _3-_ Instalar la dependencia

```
# yarn install
```

## _4-_ Importar los modelos requeridos

```
import { ICoordenadas } from 'modelos/src';
```
