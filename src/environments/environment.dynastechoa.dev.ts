import { environment as devEnvironment } from './environment.dev';
import { environment as dynastechoaEnvironment } from './environment.dynastechoa';

export const environment = Object.assign({}, devEnvironment, dynastechoaEnvironment);
