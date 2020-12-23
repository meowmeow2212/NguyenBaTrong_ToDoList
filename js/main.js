var toDoList = new ToDoList();
var validate = new Validate();
getLocalStorage();

getElement("addItem").addEventListener("click", function () {
    var id = Math.floor(Math.random() * 100);
    var tagName = getElement("newTask").value;
    var status = "todo";

    var valid = validate.checkTag(tagName);
    if (!valid === false) {
        var newTag = new MyTag(id, tagName, status);
        toDoList.addTag(newTag);
        console.log(toDoList.arr);
        createTable(toDoList.arr);
        setLocalStorage();
        alert("Thêm tag thành công  !");
    }
});




function createTable(listTag) {
    var contentToDo = ""; 
    var contentCompleted = "";
    listTag.map(function (tag) {
        if (tag.tagStatus === "todo") {
            contentToDo += `
      

                <li>
                    <span> ${tag.tagName} </span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteTag('${tag.tagID}')">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                            <i class="fa fa-check-circle" onclick="changeStatus('${tag.tagID}')"></i>
                        </button>
                    </div>
                </li>
        `;
        }
        else {
            contentCompleted += `
            <li>
            <span>${tag.tagName}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteTag('${tag.tagID}')">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete">
                    <i class="fa fa-check-circle fas" onclick="changeStatus('${tag.tagID}')"></i>
                </button>
            </div>
        </li>
    `;
        }
    });
    getElement("todo").innerHTML = contentToDo;
    getElement("completed").innerHTML = contentCompleted;
    // getElement("nameCompleted").style.color = "green";
    // getElement("statusCompleted").style.color = "green";

};

function setLocalStorage() {
    // JSON.stringify : dùng để chuyển từ JSon sang chuỗi vì mảng ban đầu là JSON
    localStorage.setItem("DanhSachTag", JSON.stringify(toDoList.arr));
};

function getLocalStorage() {
    //Chueyn lai tu chuoi sang JSON cho trang web doc
    if (localStorage.getItem("DanhSachTag")) {
        toDoList.arr = JSON.parse(localStorage.getItem("DanhSachTag"));
        createTable(toDoList.arr);
    }
};
function getElement(id) {
    return document.getElementById(id);
}

function deleteTag(tagID) {
    // console.log(tagID);
    toDoList._deleteTag(tagID);
    // console.log(toDoList.arr);
   
    createTable(toDoList.arr);
    setLocalStorage();
    alert("Xóa tag thành công!")
}

function changeStatus(tagID) {
    console.log(tagID)
    toDoList._changeStatus(tagID);
    alert("Thay đổi trạng thái tag thành công!")
    createTable(toDoList.arr);
    setLocalStorage();
}
