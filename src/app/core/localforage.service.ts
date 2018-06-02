import * as localforage from 'localforage';
import 'localforage-observable';
import { Observable } from 'rxjs/Observable';

localforage.newObservable.factory = (subscribeFn) => Observable.create(subscribeFn);

export default localforage;
