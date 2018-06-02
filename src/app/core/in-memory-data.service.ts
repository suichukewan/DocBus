import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todoLists = [
      { id: 1,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
      { id: 2,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
      { id: 3,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
      { id: 4,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
      { id: 5,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
      { id: 6,title:'fsdf', name: 'Mr. Nice',time:'2012/12/2' },
    ];
    return {todoLists};
  }
}
