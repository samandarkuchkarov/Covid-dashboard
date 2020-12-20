export class Search {
    compare() {
        let input, filter;
        let list = document.querySelectorAll('.list-block-item');
        let list2 = document.querySelectorAll('.death-list-item');
        let list3 = document.querySelectorAll('.recovery-list-item')
        input = document.querySelector('.use-keyboard-input');
        const text = document.querySelectorAll('.country_name')
        const text2 = document.querySelectorAll('.country_name2')
        const text3 = document.querySelectorAll('.country_name3')
        filter = input.value.toUpperCase();

        for (let i = 0; i < list.length; i++) {
            if (text[i].textContent.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = '';
            } else {
                list[i].style.display = 'none';
            }
            if (text2[i].textContent.toUpperCase().indexOf(filter) > -1) {
                list2[i].style.display = '';
            } else {
                list2[i].style.display = 'none';
            }
            if (text3[i].textContent.toUpperCase().indexOf(filter) > -1) {
                list3[i].style.display = '';
            } else {
                list3[i].style.display = 'none';
            }
        }
    }
    async listen() {
        const url = `https://corona.lmao.ninja/v2/countries`;
        const res = await fetch(url);
        const data = await res.json();
        let that = this;
        const textarea = document.querySelector('.use-keyboard-input')
        const name_list1 = document.getElementsByClassName('list-block-item')
        const name_list2 = document.getElementsByClassName('death-list-item')
        const name_list3 = document.getElementsByClassName('recovery-list-item')
        for (let i = 0; i < name_list1.length; i++) {
            let textcontent=document.querySelectorAll('.country_name')[i].textContent;
            let textcontent2=document.querySelectorAll('.country_name2')[i].textContent;
            let textcontent3=document.querySelectorAll('.country_name3')[i].textContent;
            name_list1[i].addEventListener('click',()=>{
                document.querySelector('.use-keyboard-input').value=textcontent
                that.compare()
            })
            name_list2[i].addEventListener('click',()=>{
                document.querySelector('.use-keyboard-input').value=textcontent2
                that.compare()
            })
            name_list3[i].addEventListener('click',()=>{
                document.querySelector('.use-keyboard-input').value=textcontent3
                that.compare()
            })
        }
       
        setTimeout(function () {
            const keyboard = document.querySelectorAll('.keyboard__key')
            for (let i = 0; i < keyboard.length; i++) {
                keyboard[i].addEventListener('click', () => {
                    that.compare()
                })
            }
        }, 0)

        textarea.addEventListener('keydown', () => {
            setTimeout(function () {
                that.compare()
            }, 0)
        })
        return data
    }
}