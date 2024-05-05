// basic
import { age, callback, empty, toggle } from './basic/1';
import { person } from './basic/2';
import { mixedValue, value } from './basic/3';
import { calc, customError, showMessage } from './basic/4';
import { DayOfWeek, isWeekend } from './basic/5';
import { mango, poly } from './basic/6';
import { page1, page2 } from './basic/7';
import { fetchData } from './generics/1';
import { result} from './generics/2';
import { mergedObj } from './generics/3';
import { newUser } from './generics/4';
import { RoleDescription } from './generics/5';
import { params } from './generics/6';
// generics

import './style.css';

// basic
console.log('1.1 age: ', age);
console.log('1.2 toggle: ', toggle);
console.log('1.3 empty: ', empty);
console.log('1.4 callback: ', callback);

console.log('2 person: ', person);

console.log('3.1 mixedValue: ', mixedValue);
console.log('3.2 value: ', value);

console.log(showMessage('Hello World!'));
console.log('4.2 calc: ', calc(1, 2));
console.log('4.3 customError: ', customError);

const day: DayOfWeek = DayOfWeek.Saturday;
console.log(isWeekend(day));

console.log('6.1 mango: ', mango);
console.log('6.2 poly: ', poly);

console.log('7.1 page1: ', page1);
console.log('7.2 page2: ', page2);

// generics
console.log('1 fetchData(): ', fetchData("https://jsonplaceholder.typicode.com/todos/1"))

console.log('2 result: ', result);

console.log('4 mergedObj: ', mergedObj);

console.log('5 newUser: ', newUser);

console.log('6 RoleDescription: ', RoleDescription);

console.log('7 params: ', params);