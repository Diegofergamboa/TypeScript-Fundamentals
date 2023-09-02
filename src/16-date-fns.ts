// To check and use libraries is better if the library have support to typescript
// This with the case of internal libraries
import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 30);
// I can check the usefull types with this kind of variables
const rta = subDays(date, 30);
const str = format(rta, 'MM/dd/yy');
console.log(str);
