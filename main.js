
class ItemList {
    constructor() {
        this.myItems = [];
        this.doneBtns = [];
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
        this.inputText.value = ""
        return;
    }

    this.myItems.push(this.inputText.value);
    this.doneBtns.push('przycisk');
    console.log(this.myItems);

    this.liElement = document.createElement('li');
    this.doneBtn = document.createElement("button");
    this.doneBtn.className = 'doneBtn';

    for (let i=0; i < this.myItems.length; i++) {
        console.log('uruchomienie petli')
        this.liElement.textContent = this.myItems[i];
        this.liElement.setAttribute('id', [i]);
        this.doneBtn.setAttribute('id', [i])
        this.doneBtn.textContent = 'done'
        // this.liElement.innerHTML += `<button type="button" class="btn btn-primary" id="doneBtn" index="${i}">done</button>`
        this.ulElement.appendChild(this.liElement);
        this.liElement.appendChild(this.doneBtn);
    }
    this.inputText.value = ""

    document.querySelectorAll(`.doneBtn`).forEach(item => item.addEventListener('click', this.deleteLi));

}

deleteLi () {
    console.log(`usuwanie elementu`);
}
}
const liItem = new ItemList();
