//unlink FS = hapus data/ file

//panggil library FS
const fs = require ('fs');

/*baca file terserah.txt apakah ada filenya?
menggunakan fs.readFile*/
fs.readFile('terserah.txt',async(err,data)=>{
    if(err) return console.log("data tidak di temukan!");

    await console.log("data di temukan!");

    fs.unlink('terserah.txt',(err)=>{
        
        if(err) return console.log("gagal hapus data");

        console.log("hapus data brhasil");
    })
})