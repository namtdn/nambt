
// console.log('huhuhuhu');
// var fs = require('fs');
// fs.readFile('h.txt','utf8',(err,contents) => {
//   console.log(contents);
//   fs.readFile('hi.txt','utf8',(err,contents) => {
//     console.log(contents);
//     fs.readFile('test.txt','utf8',(err,contents) => {
//       console.log(contents);
//     });
//   });    
// });
// console.log('hahahaha');


var fs = require('fs');
// function writeFile(path){
//     return new Promise((reject,resolve)=>{
//         fs.writeFile('demo.txt',path,(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }             
//         })
//     })
// }
// writeFile("hello").then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


function readFile(path){
    return new Promise((reject,resolve)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }             
        })
    })
}
readFile('test.txt').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
