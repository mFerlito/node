const figlet = require('figlet');

figlet( 'Hello World!!' , function(err, data) {
    if (err) {
        console.log('And they said "nothing can go wrong"...');
        console.dir(err);
        return;
        
    }
    console.log(data);
});
