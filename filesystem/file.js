//require the file from the module
const fs = require('fs');

// fs.readFile('filename.txt', 'how to read the file', (error, calltoreadthefile) =>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(calltoreadthefile);
//     }
// });

//fs.writeFile
//how to write file

fs.writeFile('filename.txt', 'this is funny and you know', (error)=>{
    if (error) {
        throw error;
    }else{
        console.log(`successfully created the file`)
    }
})

