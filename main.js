 // moge zadeklarować tablice tutaj poza obiektem ? 
const inputText = document.querySelector('input'); // pobieram input tutaj. Lepiej zrobić to gdzieś indziej ? 
const items = [];

class ItemList {
    constructor() {
        this.textcontent = inputText.value;
    }
addLi () {
    
    items.push(liItem.textcontent)
    console.log(this)
}
deleteLi () {
    console.log('usuwa element z tablicy')
}
}

const liItem = new ItemList();
console.log(liItem)




// for (i=0; i<items.length; i++) {
//     const liElement = document.createElement('li');
//     liElement.textContent = items[i];
//     ulElement.appendChild(liElement)
//     console.log(liElement.textContent)
// }

