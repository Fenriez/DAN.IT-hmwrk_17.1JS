let size;

$('.btn').on('click', function() {
    $('<input type="text" class="size_input">').appendTo('body');    
    $('<button class="btn draw">').appendTo('body');
    
    $('.size_input').on('change', sizeInput);
    $('.draw').text('Нарисовать').on('click', drawCircle);
    
    $(this).detach();
});

function sizeInput(event) {
    size = event.target.value + "px";
}

function drawCircle() {
    $('body > *').detach();
    for (let i = 0; i < 100; i++) {
        let randRed = Math.floor(Math.random() * 256);
        let randGreen = Math.floor(Math.random() * 256);
        let randBlue = Math.floor(Math.random() * 256);

        $('<div>').addClass('custom').css({
            height: size,
            width: size,
            background: `rgb(${randRed}, ${randGreen}, ${randBlue})`
        }).appendTo('body');
    }    
}