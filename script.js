//hide the element when clicked.
$(document).ready(function () {
    $('#button1').click(function () {
        $('#heading1').hide();
    });
    //double click to show the element
    $('#button1').dblclick(function () {
        $('#heading1').show();
    });
    $('#heading1').mouseenter(function () {
        alert('Click button to hide');
    });

    //on function
    $('.button2').on('click', function () { 
        $('#heading2').toggle('slow');
    });

    //css action
    $('input').on('focus', function () { 
        $('h3').css('background-color', 'green');
        $(this).css('background-color', '#ccc');
    });
});



