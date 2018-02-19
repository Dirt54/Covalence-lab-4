var colors = ['blue', 'green', 'yellow', 'red', 'purple'];

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.innerText = 'CLICK';
    var div = document.createElement('div');
    btn.addEventListener('click', squares);
    

    function squares() {
        document.body.appendChild(div); 
        div.className = 'square';
    }

    // square.addEventListener('mouseover', numAppear);
    // square.addEventListener('mouseleave', numDisappear);
    // square.addEventListener('dblclick', deleteBox);
    div.addEventListener('click', colorChange);

    function colorChange(event) {
        var index = Math.floor(Math.random() * colors.length);
        var newRandColor = colors[index];
        this.style.backgroundColor = newRandColor;

    }

});