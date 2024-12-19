// function add(x , y){
// return x+y;
// }
// function sub(x , y){
//     return x+y;
//     }
//     function mul(x , y){
//         return x+y;
//         }
//         let databasename = 'robogarden';
        
//         module.exports.add = add;
//         module.exports.sub = sub;
//         module.exports.mul = mul;
//         module.exports

// const express =required('express');
// canst app =express();
// app.get('/' function (req, res)({
//     res.send('Hello World')
// });

// app.listen(3000, function(){
//     console.log('serverrunning on port 3000...');
// });

application.get('/about', function(req, res){
    res.send('Hello World');
});