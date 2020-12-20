import {
  List,
  List_const
} from './list_country';
import {
  Keyboard
} from './keyboard'
import {
  Search
} from './search'
window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
let list = new List('case')
list.list();
document.querySelector('.cases-btn').addEventListener('click', () => {
  let list = new List('case')
  list.list();
  let search = new Search;
  search.listen()
})
document.querySelector('.deathes-btn').addEventListener('click', () => {
  let list = new List('deaths')
  list.list();
  let search = new Search;
  search.listen()
})
document.querySelector('.recover-btn').addEventListener('click', () => {
  let list = new List('recovered')
  list.list();
  let search = new Search;
  search.listen()
})


let list_const = new List_const;
list_const.list_const()
let search = new Search;
search.listen()
document.querySelector('.sort-time').addEventListener('click', () => {
  list_const.sort_by_date()
  let search = new Search;
  search.listen()
})
document.querySelector('.sort-amount').addEventListener('click', () => {
  list_const.per_thousand = true;
  list.per_thousand = true;
  list_const.list_const()
  list.list()
})
document.querySelector('.sort-both').addEventListener('click', () => {
  list_const.per_thousand = true;
  list.per_thousand = true;
  list.sort_by_date();
  list_const.sort_by_date();
})
document.querySelector('.sort-time').addEventListener('click', () => {
  list.sort_by_date();
})
document.querySelector('.default').addEventListener('click', () => {
  let list = new List('case')
  list.list();
  let list_const = new List_const;
  list_const.list_const()
  let search = new Search;
  search.listen()
})