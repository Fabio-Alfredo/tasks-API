import {helloWorldService} from '../service/hello.service.js'

export const helloWorld = (req, res )=>{
    try{
        const response = helloWorldService();
        res.send(response);
    }catch(err){
        console.error(err);
    }
}