   var http=require('http');
   http.createServer(function (request,response){
    response.writeHead(200);
    response.write(JSON.stringify(request.headers));
    response.end();
}).listen(8080);
    
    var EventEmitter=require('events').EventEmitter;
    var data= new EventEmitter;
    data.on('name',function(){
        console.log('Name' + 'Hülya' );
    });
    
    data.on('surname',function(){
        console.log('Surname' + 'Doğan');

    });
    
    data.on('department',function(){
        console.log('Depertment' + 'Molecular Biology and Genetics');
    });
    
    var interval= setInterval(function(){
        data.emit();
        clearInterval(interval);
        },500);