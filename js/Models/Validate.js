function Validate() {
    this.checkTag = function (tagName){
        var isValis = true;
        var nameTag = "";
        for (var i = 0; i < toDoList.arr.length; i++) {
            nameTag = toDoList.arr[i].tagName;
            if (tagName === "") {
                alert("Chưa nhập tag name. Vui lòng nhập tag name!");
                isValis = false;
                break;
            }
            else if (tagName.toLowerCase() === nameTag.toLowerCase()) {
                alert("Tag name đã tồn tại. Vui lòng nhập tag name khác!");
                isValis = false;
                break;
            }
        }
        return isValis;
    }
}