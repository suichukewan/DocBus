import { environment as prodEnvironment } from './environment.prod';
import { environment as cpeccEnvironment } from './environment.cpecc';

export const environment = Object.assign({}, prodEnvironment, cpeccEnvironment);
