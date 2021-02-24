function handl_focusSearch() {
    setTimeout(() => {
        $(".search_subject").focus()
    }, 100)

}
function handle_search() {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}

function handle_addSubject(){
    if(localStorage.getItem('subject')){
        console.log(localStorage.getItem('subject'));
        var a= JSON.parse(localStorage.getItem('subject'))
        console.log(a)
        console.log( typeof a)
    }
    else{
        localStorage.setItem('subject',JSON.stringify({'name':'tai'}))
    }
}