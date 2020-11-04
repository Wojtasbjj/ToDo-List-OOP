
class ItemList {
    constructor() {
        this.myItems = [];
        document.querySelector('button').addEventListener('click', this.addLi.bind(this));
        this.inputText = document.querySelector('input');
        this.ulElement = document.getElementById('liList')
        console.log('constraktor koniec');
    }
addLi () {
    if (this.inputText.value == "") {
        alert('Wprowadź text')
        return
    }
    this.myItems.push(this.inputText.value);
    console.log(this.myItems);

    this.liElement = document.createElement('li');

    for (let i=0; i < this.myItems.length; i++) {
        console.log('uruchomienie petli')
        this.liElement.textContent = this.myItems[i]
        this.liElement.setAttribute('id', [i])
        this.liElement.innerHTML += ` <button type="button" class="btn btn-primary" id="doneBtn">done</button>`
        this.ulElement.appendChild(this.liElement);
    }
    this.inputText.value = ""
}

deleteLi () {
    console.log('usuwa element z tablicy');
}
}
const liItem = new ItemList();





// for (i=0; i<items.length; i++) {
//     const liElement = document.createElement('li');
//     liElement.textContent = items[i];
//     ulElement.appendChild(liElement)
//     console.log(liElement.textContent)
// }

