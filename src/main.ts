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
console.log('age: ', age);
console.log('toggle: ', toggle);
console.log('empty: ', empty);
console.log('callback: ', callback);

console.log('person: ', person);

console.log('mixedValue: ', mixedValue);
console.log('value: ', value);

console.log(showMessage('Hello World!'));
console.log('calc: ', calc(1, 2));
console.log('customError: ', customError);

const day: DayOfWeek = DayOfWeek.Saturday;
console.log(isWeekend(day));

console.log('mango: ', mango);
console.log('poly: ', poly);

console.log('page1: ', page1);
console.log('page2: ', page2);

// generics
console.log('fetchData(): ', fetchData("https://jsonplaceholder.typicode.com/todos/1"))

console.log(result);

console.log(mergedObj);

console.log(newUser);

console.log('RoleDescription: ', RoleDescription);

console.log(params);