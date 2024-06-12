// function prtt(event) {
//     event.preventDefault(); // Prevent form submission
//     var name = document.getElementById('namee').value;
//     var age = document.getElementById('age').value;
//     var order = document.getElementById('order').value;
//     var gender ;
//     var temp;

//     if (document.getElementById("male").checked == true){
//      gender = document.getElementById("male").value;
//     }

//      else{
//         gender = document.getElementById("female").value;
//     }

//     if (document.getElementById("hot").checked == true){
//        temp = document.getElementById("hot").value;
//        }
   
//         else{
//            temp = document.getElementById("cold").value;
//        }

//        const infobj ={name,age,order,gender,temp};
//     const myJSON= JSON.stringify(infobj);
//     localStorage.setitem("order",myJSON);

//        let text = localStorage.getItem(order);
//        let obj = JSON.parse(Text);

//        document.getElementById("info").innerHTML = 
//        "Here is your order :) "+"<br>" +"<br>" +"<b>Name:</b> " + obj.name + "<br>" +
//        "<b>Age:</b> " + obj.age + "<br>" +
//        "<b>Order:</b> " + obj.order + "<br>" +
//        "<b>Gender:</b> " + obj.gender + "<br>" +
//        "<b>Temp:</b> " + obj.temp; 
// }

// document.getElementById("bt").addEventListener("click", prtt);

// function prtt(event) {
//     event.preventDefault(); // Prevent form submission
//     var name = document.getElementById('fullName').value;
//     var age = document.getElementById('dob').value;
//     var passwordd = document.getElementById('password').value;
//     var gender;
//     var disease=document.getElementById('diseases').value;
//     var num=document.getElementById('phone').value;


//     if (document.getElementById("male").checked == true){
//         gender = document.getElementById("male").value;
//     } else {
//         gender = document.getElementById("female").value;
//     }

//     // if (document.getElementById("hot").checked == true){
//     //     temp = document.getElementById("hot").value;
//     // } else {
//     //     temp = document.getElementById("cold").value;
//     // }

//     const infobj = { name, age, passwordd, gender, disease,num };
//     const myJSON = JSON.stringify(infobj);
//     localStorage.setItem("patient", myJSON); // Corrected 'setItem' method name

//     let text = localStorage.getItem("patient"); // Corrected key to "order"
//     let obj = JSON.parse(text); // Corrected variable name

    


// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         var item = document.createElement("p");
//         item.textContent = `${key}: ${obj[key]}`;
//         document.getElementById("info").appendChild(item);
//     }
// }

    
        
// }


// document.getElementById("bt").addEventListener("click", prtt);

 
function prtt(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('fullName').value;
    var age = document.getElementById('dob').value;
    var passwordd = document.getElementById('password').value;
    var gender;
    var disease = document.getElementById('diseases').value;
    var num = document.getElementById('phone').value;
    var url = document.getElementById('pic').value;
    var pa = [];
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else {
        gender = document.getElementById("female").value;
    }
   
    const infobj = { name, age, passwordd, gender, disease, num };
    const myJSON = JSON.stringify(infobj);
    localStorage.setItem("patient", myJSON);

    let text = localStorage.getItem("patient"); 
    let obj = JSON.parse(text); 



    var card = document.createElement("div");
    card.className = "card";

 
    var img = document.createElement("img");
    img.src = url;
    // img.setAttribute("src", "ic");

    card.appendChild(img);
    var cardDetails = document.createElement("div");
    cardDetails.className = "card-details";

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            var item = document.createElement("p");
            item.textContent = `${key}: ${obj[key]}`;
            cardDetails.appendChild(item);
        }
    }

    card.appendChild(cardDetails);
    document.getElementById("info").appendChild(card);
}

document.getElementById("bt").addEventListener("click", prtt);





// let newParag = "Here is your order :) <br><br>" +
    //     "<b>Name:</b> " + obj.name + "<br>" +
    //     "<b>Age:</b> " + obj.age + "<br>" +
    //     "<b>Order:</b> " + obj.order + "<br>" +
    //     "<b>Gender:</b> " + obj.gender + "<br>" +
    //     "<b>Temp:</b> " + obj.temp;
    // document.getElementById("info").innerHTML = newParag


// let p = document.createElement("p");
// document.getElementById("ip").innerHTML="Fruit Menu :";