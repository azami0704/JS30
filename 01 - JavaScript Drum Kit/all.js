const keys=document.querySelectorAll('.key');
const audios=document.querySelectorAll('audio');
let flag=false;
window.addEventListener('keydown',function(e){
    keys.forEach(function(item,idx){
        if(!flag&&item.dataset.key==e.key.toUpperCase()){
            item.classList.add('playing');
            audios[idx].load();
            audios[idx].play();
            flag=true;
        }
    })
})
window.addEventListener('keyup',function(e){
    keys.forEach(function(item){
        if(item.dataset.key==e.key.toUpperCase()){
            item.classList.remove('playing');
            flag=false;
        }
    })
})
