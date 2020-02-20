require('./index.scss');
import a from './a.js';
a();

console.log('test webpack!!!!!!!');

if(process.env.NODE_ENV === 'development'){
  console.log('baseurl is localhost')
} else {
  console.log('baseurl is https:XXXX')
}