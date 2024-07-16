import {Router} from 'express';
import {readdirSync} from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const PATH_ROUTER = path.dirname(__filename);
const router = Router();

const cleanFileName = (fileName) => {
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){
      import(`./${cleanName}.js`).then((module)=>{
          router.use(`/${cleanName}`, module.router);
      }).catch((err)=>{
          console.error(`Error to import ${cleanName} route`, err);
      })

    }
})

export {router};
