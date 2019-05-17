var divs = document.getElementsByTagName('div');

for(var i = 0; i < divs.length; i++){

    divs[i].addEventListener('click', function(){
        console.log('You clicked div #' + i)
    })

}

