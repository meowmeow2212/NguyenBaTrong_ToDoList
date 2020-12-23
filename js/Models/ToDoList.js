function ToDoList() {
    this.arr = [];

    this.addTag = function (tag) {
        this.arr.push(tag);
    };

    this._findIndex = function (tagID) {
        return this.arr.findIndex(function (item) {
            return tagID == item.tagID;
        });
    };

    this._findIndexName = function (name) {
        return this.arr.findIndex(function (item, i) {
            return name.toLowerCase() === item.tagName.toLowerCase();
        });
    };

    // this._checkTagByName = function (name, arr){
    //     var name = this._findtagByName(tagName);
    //     console.log(name);

    // };

    this._deleteTag = function (tagID) {
        var viTri = this._findIndex(tagID);
        if (viTri !== -1) {   
            this.arr.splice(viTri, 1);
        }
    };

    this._getTagById = function(tagID){
        var viTri = this.timViTri(tagID);
        if (viTri !== -1) {
            // : ham dung de xoa phan tu trong mang
            // 2 tham so : viTri, 1 phan tu
            return this.arr[viTri];
        }
    };

    this.findInforById = function (tagID) {
        var viTri = this._findIndex(tagID);
        if (viTri !== -1)
            return this.arr[viTri];
        return -1;
    };

    this._changeStatus = function (tagID) {
        var arr = this.findInforById(tagID);
        if (arr.tagStatus === "todo"){
                return   arr.tagStatus = "completed";
        }  
        else{
            return   arr.tagStatus = "todo";
        } 
    }
}