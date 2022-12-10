import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'galeria',
  connector: 'mongodb',
  url: 'mongodb://root@0.0.0.0:27017/galeria',
  host: '0.0.0.0',
  port: 27017,
  user: 'root',
  password: '',
  database: 'galeria',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GaleriaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'galeria';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.galeria', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
