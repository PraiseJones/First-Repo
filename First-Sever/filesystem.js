// file system

//read files

var http = require('http')

// http.createServer((req, res)=>{
//     fs.readFile('myFirstFile.txt', (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, {
//             'Content-type': 'text/plain'
//         });
//         res.write(data)
//         res.end();
//         // console.log(data);
//     })
// }).listen(5000);


//create files

var fs = require('fs');

// fs.writeFile('myFirstFile.txt', 'Hello World', (err)=>{
//     if (err) throw err;
//     console.log('file created successfully')

// })

// fs.open()
// fs.appendFile() ---> works also for updating file without overwriting the text

// fs.writeFile('myFirstFile.txt', 'Hello World \n Zuri Internship', (err)=>{
//     if (err) throw err

//     console.log('file was updated successfully');
// })
// ---> updated the 'myFirstFile.txt' with a new line

// fs.appendFile('myFirstFile.txt', '\n I learnt the file system', (err)=>{
//     if (err) throw err

//     console.log('file was updated successfully');
// })

//update  files

//delete files

fs.unlink('demo.txt',(err) => {
    if (err) throw err;
    console.log('File deleted');
})

//rename files

fs.rename('server.js', 'firstserver.js', (err) =>{
    if (err) throw err;
    console.log('file renamed succesfully');
}) 
