var addComentario=document.getElementById('addComentario');
var btnComentar=document.getElementById('btnComentar');

btnComentar.addEventListener('click',function(){
     create(addComentario.value);
});

function create(comentario){
    var data={
       comentario:comentario
    };
    return firebase.database('restaurantes').ref('r3').child('coments').push(data);

}

firebase.database().ref('coments').on('value',function(snapshot){
    coments.innerHTML='';
    snapshot.forEach(function(item){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(item.val().comentario+''));
        coments.appendChild(li);

    });
});