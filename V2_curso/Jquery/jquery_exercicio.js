$(document).ready( ()=>{
    
    $('form').on('submit', (e)=>{
        e.preventDefault();
        const tarefa = $('input').val();
        $(`
        <li class="click-tarefa">
            ${tarefa}
        </li>`
        ).appendTo('ul')
    } );

    $('ul').on('click', '.click-tarefa', ()=> {
        $('li').css('text-decoration', 'line-through')
    })

} )