let length;
let width;

function calculateArea(){
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    console.log(`length is : ${length}`);
    console.log(`width is : ${width}`);
    let area = length * width;
    document.getElementById('result').innerText = `The area of rectangle is: ${area}`;
}