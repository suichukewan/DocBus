import { environment as prodEnvironment } from './environment.prod';
import { environment as dynastechoaEnvironment } from './environment.dynastechoa';

export const environment = Object.assign({}, prodEnvironment, dynastechoaEnvironment);
