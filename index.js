// let Element01 = document.getElementById("mano");


// var xmr = new XMLHttpRequest();
// xmr.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);


// xmr.onreadystatechange = function(){
//     if(xmr.readyState === 4 && xmr.status === 200){
//         data01 = JSON.parse(xmr.response);
//         displayquestions()

//     }

// }

// function displayquestions(){

//     let output = ""
//     for(let mano01 in data01){


//         sachin = `
//         <div class=questions>
//         <h1 class="heading02">Q${data01[mano01].id} . ${data01[mano01].question}</h1>
//         <label><input type = "radio" id = "1" name = "question${data01[mano01].id}"> ${data01[mano01].options[0]}</label><br>
//         <label><input type = "radio" id = "2" name = "question${data01[mano01].id}"> ${data01[mano01].options[1]}</label><br>
//         <label><input type = "radio" id = "3" name = "question${data01[mano01].id}"> ${data01[mano01].options[2]}</label><br>
//         <label><input type = "radio" id = "4" name = "question${data01[mano01].id}"> ${data01[mano01].options[3]}</label><br>
//         <hr class="horizontal">
//         </div>
//         `
//         output += sachin

//     }
//     Element01.innerHTML = output;


//     let btnElement = document.getElementById("button01");
//     let score_container = document.getElementById("score-count");

//     btnElement.onclick = function(){
//         let score = 0;
//         for(let i = 0; i < data01.length; i++){
//             let manohar01 = document.getElementsByName(`question${data01[i].id}`)
//             for(let j = 0; j < manohar01.length; j++){
//                 if(manohar01[j].checked && manohar01[j].id == data01[i].answer){
//                     score++;
//                 }
                
//             }
            
//         }
//         score_container.innerHTML = `${score}/5`
        
//     }
   
// }
// xmr.send()







let Element01 = document.getElementById("mano");

var xmr = new XMLHttpRequest();
xmr.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);


xmr.onreadystatechange = function () {
    if (xmr.readyState === 4 && xmr.status === 200) {
        RRA = JSON.parse(xmr.response);
        displayquestions()

    }

}

function displayquestions() {

    let output = ""
    for (let required in RRA) {


         sachin = `
        <div class=questions>
        <h1 class="heading02">Q${RRA[required].id} . ${RRA[required].question}</h1>
        <label><input type = "radio" id = "1" name = "question${RRA[required].id}"> ${RRA[required].options[0]}</label><br>
        <label><input type = "radio" id = "2" name = "question${RRA[required].id}"> ${RRA[required].options[1]}</label><br>
        <label><input type = "radio" id = "3" name = "question${RRA[required].id}"> ${RRA[required].options[2]}</label><br>
        <label><input type = "radio" id = "4" name = "question${RRA[required].id}"> ${RRA[required].options[3]}</label><br>
        <hr class="horizontal">
        </div>
        `;
        output += sachin

    }
    Element01.innerHTML = output;


    let btn = document.getElementById("button01");
    let score_container = document.getElementById("required");

    btn.onclick = function () {
        let score = 0;
        for (let i = 0; i < RRA.length; i++) {
            let RRR = document.getElementsByName(`question${RRA[i].id}`)
            for (let j = 0; j < RRR.length; j++) {
                if (RRR[j].checked && RRR[j].id == RRA[i].answer) {
                    score++;
                }

            }

        }
        score_container.innerHTML = `${score}/5`

    }

}
xmr.send() 