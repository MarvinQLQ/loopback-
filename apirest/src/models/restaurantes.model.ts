import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Restaurantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  horario: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'number',
    required: true,
  })
  propietario: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Restaurantes>) {
    super(data);
  }
}

export interface RestaurantesRelations {
  // describe navigational properties here
}

export type RestaurantesWithRelations = Restaurantes & RestaurantesRelations;
