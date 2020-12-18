export class Search{
compare(){
    let input, filter;
    let list= document.querySelectorAll('.list-block-item')
    input = document.querySelector('.use-keyboard-input');
    filter = input.value.toUpperCase();
   const text= document.querySelectorAll('.country_name')
    for(let i = 0; i<list.length; i++){
if(text[i].textContent.toUpperCase().indexOf(filter) > -1){
  
    list[i].style.display='';

}else{
    list[i].style.display='none';
}
    }
}
listen(){
    const textarea = document.querySelector('.use-keyboard-input')
   
    let that=this;
    setTimeout(function(){
        const keyboard = document.querySelectorAll('.keyboard__key')
        for(let i = 0;i<keyboard.length;i++){
            keyboard[i].addEventListener('click',()=>{
                    that.compare() 
            })
        }
       },0)   
   
    textarea.addEventListener('keydown',()=>{
       setTimeout(function(){
        that.compare()
       },0) 
    })
}
}