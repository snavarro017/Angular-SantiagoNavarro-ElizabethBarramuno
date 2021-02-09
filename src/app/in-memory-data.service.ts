/*
Generacion de array con juegoos en la BD remota
*/
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const juegos = [
      {id:0,name:'Tomb Raider'},
      {id:1,name:'Call of Duty'},
      {id:2,name:'Destiny 2'},
      {id:3,name:'Far Cry 3'},
      {id:4,name:'Civilization 3'},
      {id:5,name:'Star Craft 2'},
      {id:6,name:'NBA 2k'},
      {id:7,name:'Pac-Man'},
      {id:8,name:'Super Mario Bros'},
      {id:9,name:'Mortal Kombat 4'},
    ];
    return {juegos};
  }
}
