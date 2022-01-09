import pug from 'pug';
import fs from 'fs';


const res = pug.compileFile('./views/index.pug');
fs.writeFile('./public/index.html', res(), {}, () => {
  console.log('done');
})
