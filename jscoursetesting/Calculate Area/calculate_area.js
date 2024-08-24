let length, width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(DOCUMENT.getElementById('width').value);
    let area = length*width;
    document.getElementById('result').innerText = `Area:  + ${area}`;
}
