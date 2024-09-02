$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addTask = $('#task-add').val();
        const newTask = $('<li style = "display: none"></li>').text(addTask)
        $(addTask).appendTo(newTask);
        $(newTask).appendTo('ul');
        $(newTask).fadeIn(1000);
        $('#task-add').val('')
    } )

    $('ul').on('click','li', function(){
        $(this).toggleClass('done')
    })
})