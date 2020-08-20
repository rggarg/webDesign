console.log("hi");
showWishes();    // calling function to show saved wishes on screen by default.
// localStorage.clear();

// Accessing the elements from html to Js so that we apply operations on them to make then working..
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let wishes = localStorage.getItem("wishes");
    let titles = localStorage.getItem("titles");
    //checking whether the data is stored in wishes or not.If stored then access it in wishesObj. If not then set it as empty array. sam eprocess is fore titles.
    if (wishes == null) {
        wishesObj = [];
    }
    else {
        wishesObj = JSON.parse(wishes);
        // console.log(wishesObj);
    }
    if (titles == null) {
        titlesObj = [];
    }
    else {
        titlesObj = JSON.parse(titles);
        // console.log(titlesObj);
    }
    // saving the value of wish and title entered by user in our arrays and store them in our localStorage in form of array..
    wishesObj.push(addTxt.value);
    titlesObj.push(addTitle.value);
    localStorage.setItem("wishes", JSON.stringify(wishesObj));
    localStorage.setItem("titles", JSON.stringify(titlesObj));
    //   making the textBoxes empty so that user enter a new wish.
    addTxt.value = "";
    addTitle.value = "";
    showWishes();
})

function showWishes() {
    let wishes = localStorage.getItem("wishes");
    let titles = localStorage.getItem("titles");
    if (wishes == null) {
        wishesObj = [];
    }
    else {
        wishesObj = JSON.parse(wishes);
    }
    if (titles == null) {
        titlesObj = [];
    }
    else {
        titlesObj = JSON.parse(titles);
    }
    let html = "";
    for (var i = 0; i < titlesObj.length; i++) {
        html += `
                        <div class="cardBody">
                        <h3 class="cardTitle">${titlesObj[i]}</h3>
                        <h3 class="cardData">${wishesObj[i]}</h3>
                        <button class="deleteBtn" id="${i}" onclick="deleteNote(this.id)">Delete Wish </button>
                        </div>
                `
    }

let wishesElm = document.getElementById("wishes");
let titleElm = document.getElementById("titles");
if (titlesObj.length != 0) {
    wishesElm.innerHTML = html;
}
if (wishesObj != 0) {
    wishesElm.innerHTML = html;
} else {
    wishesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
}
}

function deleteNote(index) {
    let wishes = localStorage.getItem("wishes");
    let titles = localStorage.getItem("titles");
    if (wishes == null) {
        wishesObj = [];
    }
    else {
        wishesObj = JSON.parse(wishes);
    }
    if (titles == null) {
        titlesObj = [];
    }
    else {
        titlesObj = JSON.parse(titles);
    }
    wishesObj.splice(index, 1);
    titlesObj.splice(index, 1);
    localStorage.setItem("wishes", JSON.stringify(wishesObj));
    localStorage.setItem("titles", JSON.stringify(titlesObj));

    showWishes();
}
