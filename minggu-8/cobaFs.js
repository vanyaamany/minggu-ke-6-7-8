const fs = require('fs');

console.log('star reading a file...');

fs.readFile ('text.txt','utf-8',(err,content)=>{
    if (err){
        console.log('error happened durring reading the file ')
        return console.log(err)
    }
    fs.rename('text.txt','terserah.txt',(err)=>{
        if (err) console.log("gagal rename"+err);
    })
    console.log("yaay, berhasil ");
})

console.log('end of the file');