import { environment as devEnvironment } from './environment.dev';
import { environment as cpeccEnvironment } from './environment.cpecc';

export const environment = Object.assign({}, devEnvironment, cpeccEnvironment);
