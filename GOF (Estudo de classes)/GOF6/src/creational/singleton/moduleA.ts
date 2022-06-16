import { MyDatabaseFuncion } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFuncion;
myDatabaseClassic.add({ name: 'Flavio', age: 27 });
myDatabaseClassic.add({ name: 'Lulinha', age: 1 });
myDatabaseClassic.add({ name: 'Kalita', age: 24 });

//myDatabaseClassic.remove(1);
//myDatabaseClassic.show();

export { myDatabaseClassic };
