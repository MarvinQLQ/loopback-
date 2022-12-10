import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GaleriaDataSource} from '../datasources';
import {Restaurantes, RestaurantesRelations} from '../models';

export class RestaurantesRepository extends DefaultCrudRepository<
  Restaurantes,
  typeof Restaurantes.prototype.Id,
  RestaurantesRelations
> {
  constructor(
    @inject('datasources.galeria') dataSource: GaleriaDataSource,
  ) {
    super(Restaurantes, dataSource);
  }
}
