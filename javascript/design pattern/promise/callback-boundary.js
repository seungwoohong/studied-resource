try {
    setTimeout(function() {
         throw '에러다'; 
        }, 0);
} catch (e) {
    console.log('잡아봐라~!');
    console.log(e);
}
