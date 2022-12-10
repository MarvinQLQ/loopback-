import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GaleriaDataSource} from '../datasources';
import {Usuarios, UsuariosRelations} from '../models';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.Id,
  UsuariosRelations
> {
  constructor(
    @inject('datasources.galeria') dataSource: GaleriaDataSource,
  ) {
    super(Usuarios, dataSource);
  }
}
