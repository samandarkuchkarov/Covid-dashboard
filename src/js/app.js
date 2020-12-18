import {list} from './list_country';
import {Keyboard} from './keyboard'
import {Search} from './search'
window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
list('case');
document.querySelector('.cases-btn').addEventListener('click',()=>{
  list('case');
})
document.querySelector('.deathes-btn').addEventListener('click',()=>{
  list('deaths');
})
document.querySelector('.recover-btn').addEventListener('click',()=>{
  list('recovered');
})
let search = new Search;
search.listen()
