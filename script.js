// const btn = document.getElementById("btn");
// let btnclick = () => {
// let name = document.getElementById("name").value;
//     alert("hello " + name);
// }

// const answer = document.getElementById("answer");

// window.addEventListener("keydown", move); 

//    function move(event){
//         switch(event.key){
//             case "1":
//             answer.innerText = 1;
//             break;
//             case "2":
//             answer.innerText = 2;
//             break;
//             case "3":
//             answer.innerText = 3;
//             break;
//             case "4":
//             answer.innerText = 4;
//             break;
//             case "1":
//             answer.innerText = 1;
//             break;
//             case "6":
//             answer.innerText = 6;
//             break;
//             case "7":
//             answer.innerText = 7;
//             break;
//             case "8":
//             answer.innerText = 8;
//             break;
//             case "9":
//             answer.innerText = 9;
//             break;
//             case "0":
//             answer.innerText = 0;
//             break;
//             case "+":
//             answer.innerText = '+';
//             break;
//             case "-":
//             answer.innerText = "-";
//             break;
//             case "*":
//             answer.innerText = '*';
//             break;
//             case "/":
//             answer.innerText = '/';
//             break;
//             default:
//                 answer.innerText = "Wrong Input!";
//         }
//    }
// const box = document.getElementById("box");
// let x = 0;
// let y = 0;

// window.addEventListener("keydown", move);
// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y+=1;
//             box.style.top = y + "px";
//             break;
//             case "s":
//             y+=1;
//             box.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=1
//             box.style.top = y + "px";
//             break;
//             case "w":
//             y-=1
//             box.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x+=1;
//             box.style.left = x + "px";
//             break;
//             case "d":
//             x+=1;
//             box.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x-=1;
//             box.style.left = x + "px";
//             break;
//             case "a":
//             x-=1;
//             box.style.left = x + "px";
//             break;
//     }
// }

// box.addEventListener("mouseover", change);
// function change(){
// box.style.transform = "rotate(60deg)";
// }
// setTimeout(f,40000);
// setTimeout(s,7000);
// setTimeout(t,9000);
// function f(){
//    alert("timeout")
// }
// function s(){
//     box.innerText ="up"
// }
// function t(){
//     box.innerText = "now"
// }
// const clock = document.getElementById("clock"); 
// update();
// setInterval(update, 1000)
// function update(){
//     let date = new Date();
//     clock.innerHTML = formattime(date);
//     function formattime(date){
//         let hour = date.getUTCHours();
//         let min = date.getUTCMinutes();
//         let sec = date.getUTCSeconds();
//         let amOrpm = hour >= 12 ? "pm" : "am";
//         hour = (hour % 12) || 12;
//         return `${hour}:${min}:${sec} ${amOrpm}`;
//     }
// }
let sec = document.getElementById("sec");
let min = document.getElementById("min");
setInterval(clock, 1000)
let s = 0,m = 0;
function clock(){
        sec.style.transform = `rotate(${s}deg)`;
        if(s == 360){
            m = m + 6;
            min.style.transform = `rotate(${m}deg)`;
        }
        
        console.log(s);
        s = s + 6;
}
