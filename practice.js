const add =  (a,b)=>a+b
const mul =  (a,b)=>a*b
const sub =  (a,b)=>a-b

// let choice = prompt("enter choice")
let a = confirm("Leave this site without chages")
console.log(a)


let answer = document.getElementById('answer')

switch (choice) {

    case 'a':
        answer.innerHTML = add(4,2)
        break;
    case 's':
        answer.innerHTML = sub(2,4)
        break;
    case 'm':
        answer.innerHTML = mul(2,4)
        break;

    default:
        alert("Enter valid choice")
        break;
}