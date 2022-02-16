let txtIn = document.querySelector('#txtIn');
let btnAdd = document.querySelector('#btnAdd');
let scrpList = document.querySelector('#scrpList');

btnAdd.addEventListener('click', function() {
    var txtValue = favchap.value;
    if(txtValue) {
        var newItem = document.createElement("li");
        newItem.innerHTML = txtValue;
        scrpList.appendChild(newItem);
        var newBtn = document.createElement("button");
        newBtn.id = "btnDel";
        newBtn.innerHTML = '❌';
        newBtn.addEventListener('click', function() {
            var items = document.querySelectorAll("#scrpList li"), tab = [], index;
            // add values to the array
            for(var i = 0; i < items.length; i++){
                tab.push(items[i].innerHTML);
            }
            // get selected element index
            for(var i = 0; i < items.length; i++)
            {
                items[i].onclick = function(){
                    index = tab.indexOf(this.innerHTML);
                    scrpList.removeChild(items[index]);
                };
            }
        });
        newItem.appendChild(newBtn);
        txtIn.value = "";
        txtIn.focus();
    }
});
