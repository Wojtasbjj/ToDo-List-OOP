
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
    
    if(this.myItems.includes(this.inputText.value)) {
        alert('taki task już istnieje !')
        return;
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
    console.log(this.myItems);
}
}
const liItem = new ItemList();
