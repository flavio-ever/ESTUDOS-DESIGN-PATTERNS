import { MyDatabaseFuncion } from './db/my-database-function';

import { myDatabaseClassic as myDatabaseFromModuleA } from './moduleA';

const myDatabaseClassic = MyDatabaseFuncion;

myDatabaseClassic.add({ name: 'Everton', age: 27 });
myDatabaseClassic.add({ name: 'Trevisan', age: 1 });

myDatabaseClassic.show();
console.log(myDatabaseClassic === myDatabaseFromModuleA);
