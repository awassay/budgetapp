// a=setbudget ki value aarhi hai
// item_s=item name araha hai
// itemAmount=ismain item ki amount arhi hai
// b=ismain balance aaraha hai


var t=0;
var i=0
var b=0
var items = [];
var editIndex = -1;


function setBudget(){
    var a=document.getElementById("totalInput").value;
    a=+(a)
    
    // var t=0;
    if(a==""){
        document.getElementById("result").innerHTML = t;
    }
    
    else{
        t=t+a
    document.getElementById("result").innerHTML = t;

    }

}

// function checkAmount(){
//     // var i=0
//     // var b=0

//     var a=document.getElementById("totalInput").value;
//     a=+(a)
   
//     var item_s=document.getElementById("iName").value
//     // console.log(item_s)
//     // yahan tak theek hai item_s main item name store ho raha hai

//     var itemAmount=document.getElementById("itemAmount").value
//     itemAmount=+(itemAmount)
    
//     // console.log(itemAmount)


//     if (item_s!="" && itemAmount!=""){
//         i+=itemAmount
//         document.getElementById("res").innerHTML=i

//         // console.log(i)
//         b=a-i

//         // console.log(b)

//         document.getElementById("bal").innerHTML=b


//         var d=item_s
        
//         // console.log(d)
//         document.getElementById("p_Iname").innerHTML=d
//         document.getElementById("price").innerHTML=itemAmount

//     }
//     else{
//         document.getElementById("res").innerHTML=i
//         document.getElementById("bal").innerHTML=b
//     }

//     }

function checkAmount() {

    var a = document.getElementById("totalInput").value;
    a = +a;

    var item_s = document.getElementById("iName").value;
    var itemAmount = document.getElementById("itemAmount").value;
    itemAmount = +itemAmount;

    if (item_s !== "" && itemAmount !== "") {

        if (editIndex !== -1) {
            
            i -= items[editIndex].price;


            items[editIndex].name = item_s;
            items[editIndex].price = itemAmount;

            editIndex = -1;

        } else {
        
            items.push({
                name: item_s,
                price: itemAmount
            });
        }


        i += itemAmount;
        document.getElementById("res").innerHTML = i;

        b = a - i;
        document.getElementById("bal").innerHTML = b;

        displayList();

        document.getElementById("iName").value = "";
        document.getElementById("itemAmount").value = "";
    }
}


function displayList() {
    var list = document.getElementById("list");
    list.innerHTML = "";

    for (let x = 0; x < items.length; x++) {

        var li = document.createElement("li");

        var nameSpan = document.createElement("span");
        nameSpan.innerHTML = items[x].name;

        var priceSpan = document.createElement("span");
        priceSpan.innerHTML = items[x].price;

        var iconSpan = document.createElement("span");

        // Edit icon
        var editIcon = document.createElement("i");
        editIcon.className = "fa fa-edit";
        editIcon.style.marginRight = "10px";
        editIcon.onclick = function () {


    document.getElementById("iName").value = items[x].name;
    document.getElementById("itemAmount").value = items[x].price;

    editIndex = x;
};


        var delIcon = document.createElement("i");
        delIcon.className = "fa fa-trash";
        delIcon.onclick = function () {

            i -= items[x].price;
            document.getElementById("res").innerHTML = i;

        
            var total = +document.getElementById("totalInput").value;
            var balance = total - i;
            document.getElementById("bal").innerHTML = balance;

        
            items.splice(x, 1);

            displayList();
        };

        iconSpan.appendChild(editIcon);
        iconSpan.appendChild(delIcon);

        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        li.appendChild(iconSpan);

        list.appendChild(li);
    }
}






