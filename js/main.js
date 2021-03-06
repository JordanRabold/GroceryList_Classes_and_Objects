var GroceryItems = (function () {
    function GroceryItems() {
    }
    return GroceryItems;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addGroceryItem;
};
function isValid() {
    var isDataValid = true;
    var itemBox = $("item");
    var enteredItem = itemBox.value;
    if (enteredItem == "") {
        isDataValid = false;
        addErrorMessage("Item is required");
    }
    var priceBox = $("price");
    var enteredPrice = priceBox.value;
    if (enteredPrice == "" || isNaN(parseFloat(enteredPrice))) {
        isDataValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var categoryBox = $("category").value;
    if (categoryBox == "") {
        isDataValid = false;
        addErrorMsgWithCustomClass("Must choose a category", "category-error");
    }
    return isDataValid;
}
function addErrorMessage(errMsg) {
    var errSummary = $("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function addErrorMsgWithCustomClass(errMsg, cssClass) {
    var errSummary = $("validation-summary");
    var errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function clearAllErrors() {
    var errSummary = $("validation-summary");
    errSummary.innerText = "";
}
function addGroceryItem() {
    console.log("Added to grocery list");
    clearAllErrors();
    if (isValid()) {
        var groceryItem = getGroceryItem();
        displayGroceryItem(groceryItem);
    }
}
function getGroceryItem() {
    var foodItem = new GroceryItems();
    var itemInput = $("item");
    foodItem.item = itemInput.value;
    var priceInput = $("price");
    foodItem.price = parseFloat(priceInput.value);
    var categoryInput = $("category");
    foodItem.category = categoryInput.value;
    return foodItem;
}
function displayGroceryItem(myItem) {
    var displayDiv = $("display");
    var itemInfo = document.createElement("p");
    itemInfo.innerText = "Item: ".concat(myItem.item, " \n Price: $").concat(myItem.price, " \n Category: ").concat(myItem.category);
    displayDiv.appendChild(itemInfo);
}
function $(id) {
    return document.getElementById(id);
}
