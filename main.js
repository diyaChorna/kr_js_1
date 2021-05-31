let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y)


sel('.pBox').style.display = 'none';

getId('edit').onclick = function(event){
    sel('.pBox').style.display = 'block';
    sel('.styleBox').style.display = 'none';
}

sel('.styleBox').style.display = 'none';
getId('style').onclick = function(event){
    sel('.styleBox').style.display = 'flex';
    sel('.pBox').style.display = 'none';
}

// sel('.styleBox').style.display = 'flex';

// box style color text
sel('.boxColor').style.display = 'none';
getId('buttonColor').addEventListener('click', function () {
    sel('.boxColor').style.display = 'flex';
    sel('.boxBackground').style.display = 'none';
})
sel('.boxColor').addEventListener('click', function () {
    functionTextColor();
})

function functionTextColor() {
    for (i = 0; i < sel('.boxColor').children.length; i++) {
        sel('.boxColor').children[i].addEventListener('click', function () {
            for (j = 0; j < sel('.box1').children.length; j++) {
                sel('.box1').style.color = this.className;
            }
        })
    }
}

// box style backgroundColor text
sel('.boxBackground').style.display = 'none';
getId('buttonBackground').addEventListener('click', function () {
    sel('.boxColor').style.display = 'none';
    sel('.boxBackground').style.display = 'flex';
})
sel('.boxBackground').addEventListener('click', function () {
    functionTextBackground();
})

function functionTextBackground() {
    for (i = 0; i < sel('.boxBackground').children.length; i++) {
        sel('.boxBackground').children[i].addEventListener('click', function () {
            for (j = 0; j < sel('.box1').children.length; j++) {
                sel('.box1').style.backgroundColor = this.className;
            }
        })
    }
}
// box font size text
let myFontSize = document.forms['myFontSize'];
myFontSize.addEventListener('click', function () {
    functionFontSize();
})

function functionFontSize() {
    for (i = 0; i < myFontSize.elements.length; i++) {
        myFontSize.elements[i].addEventListener('click', function () {
            for (i = 0; i < sel('.box1').children.length; i++) {
                sel('.box1').children[i].style.fontSize = this.value;
            }
        })
    }
}

// box font family text
let myFontFamily = document.forms['myFontFamily'];
myFontFamily.addEventListener('click', function () {
    functionFontFamily();
})

function functionFontFamily() {
    for (i = 0; i < myFontFamily.elements.length; i++) {
        myFontFamily.elements[i].addEventListener('click', function () {
            for (i = 0; i < sel('.box1').children.length; i++) {
                sel('.box1').children[i].style.fontFamily = this.value;
            }
        })
    }
}


// box font style text
let myFontStyle = document.forms['myFontStyle'];

myFontStyle.cursive.addEventListener('click', function () {
    if (myFontStyle.cursive.checked) {
        for (i = 0; i < sel('.box1').children.length; i++) {
            sel('.box1').style.fontStyle = 'italic';
        }
    } 
    else {
        for (i = 0; i < sel('.box1').children.length; i++) {
            sel('.box1').style.fontStyle = '';
        }
    }
})

myFontStyle.bold.addEventListener('click', function () {
    if (myFontStyle.bold.checked) {
        for (i = 0; i < sel('.box1').children.length; i++) {
            sel('.box1').style.fontWeight = 'bold';
        }
    } else {
        for (i = 0; i < sel('.box1').children.length; i++) {
            sel('.box1').style.fontWeight = '';
        }
    }
})

//text innerHTML 
sel('.edit').addEventListener('click', function () {
    sel('.area').classList.add('textTask');
    sel('textarea').innerHTML = sel('.box1').innerHTML;
    sel('.box_style').classList.remove('textTask2');
})
sel('.save').addEventListener('click', function () {
    sel('.box1').innerHTML = sel('textarea').value;
    sel('.pBox').style.display = 'none';
})
sel('.style').addEventListener('click', function () {
    sel('.box_style').classList.add('textTask2');
    sel('.area').classList.remove('textTask');
})


// for greenBox list vs table
document.querySelector('.listFon').style.display = 'none';
document.querySelector('.tableBox').style.display = 'none';
let radios = document.forms['radios'];
for(let i=0; i<radios.elements.length; i++){
    console.log('here');
    radios.elements[i].addEventListener('click', function(){
        console.log('here');
        if(this.className==='table'){
            document.querySelector('.tableBox').style.display = 'flex';
            document.querySelector('.listFon').style.display = 'none';
        }
        else{
            document.querySelector('.listFon').style.display = 'flex';
            document.querySelector('.tableBox').style.display = 'none';
        }
    })
}

sel('.greenBox').style.display = 'none';
// block vs greenBox
sel('.add').addEventListener('click', function () {
    sel('.block').style.display = 'none';
    sel('.greenBox').style.display = 'block';
})


//create table
sel('.table').addEventListener('click', function () {
    sel('.tableBox').style.display = 'block';
    sel('.list_box').style.display = 'none';
})


function functionTable() {
    let tr = sel('.inputTR').value;
    let td = sel('.inputTD').value;
    let widthTD = sel('.wOfTD').value;
    let heightTD = sel('.hOfTD').value;
    let inputWidth = sel('.inputWidth').value;
    let solid = sel('.solid').value;
    let black = sel('.black').value;
    let table = document.createElement('table');
    for (let i = 0; i < tr; i++) {
        let createRow = document.createElement('tr');
        for (let j = 0; j < td; j++) {
            let createColumn = document.createElement('td');
            createColumn.style.width = widthTD * 10 + 'px';
            createColumn.style.height = heightTD * 10 + 'px';
            createColumn.style.borderWidth = inputWidth + 'px';
            createColumn.style.borderStyle = solid;
            createColumn.style.borderColor = black;
            createColumn.innerHTML = 'TD';
            createColumn.appendChild(createColumn);
        }
        table.appendChild(createRow);
    }
    let tabBlock = document.createElement('table');
    tabBlock.appendChild(table);
    sel('textarea').value += tabBlock.innerHTML;
}

sel('.createTable').addEventListener('click', function () {
    sel('.block').style.display = 'block';
    sel('.greenBox').style.display = 'none';
    functionTable();
})

// create li
sel('.list').addEventListener('click', function () {
    sel('.list_box').style.display = 'block';
    sel('.table_box').style.display = 'none';
})

function addList(){
    let cL = sel('.cL').value;
    let circle = sel('.circle').value;
    let list = document.createElement('ul');
    for(i = 0; i < cL; i++){
        let addLi = document.createElement('li');
        addLi.style.listStyleType = li_type;
        list.appendChild(addLi);
    }
    let boxList = document.createElement('ul');
    boxList.appendChild(list);
    sel('textarea').value += boxList.innerHTML;
}

sel('.createList').addEventListener('click', function(){
    sel('.block').style.display = 'flex';
    sel('.greenBox').style.display = 'none';
    addLi();
})