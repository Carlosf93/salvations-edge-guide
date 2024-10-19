$("#link-introduction").on( "click", function() {
    document.getElementById("header-introduction").scrollIntoView({ behavior: 'smooth'});
});
$("#link-traversali").on( "click", function() {
    document.getElementById("header-traversali").scrollIntoView({ behavior: 'smooth'});
});
$("#link-substratum").on( "click", function() {
    document.getElementById("header-substratum").scrollIntoView({ behavior: 'smooth'});
});
$("#link-traversalii").on( "click", function() {
    document.getElementById("header-traversalii").scrollIntoView({ behavior: 'smooth'});
});
$("#link-dissipation").on( "click", function() {
    document.getElementById("header-dissipation").scrollIntoView({ behavior: 'smooth'});
});
$("#link-traversaliii").on( "click", function() {
    document.getElementById("header-traversaliii").scrollIntoView({ behavior: 'smooth'});
});
$("#link-repository").on( "click", function() {
    document.getElementById("header-repository").scrollIntoView({ behavior: 'smooth'});
});
$("#link-verity").on( "click", function() {
    document.getElementById("header-verity").scrollIntoView({ behavior: 'smooth'});
});
$("#link-traversaliv").on( "click", function() {
    document.getElementById("header-traversaliv").scrollIntoView({ behavior: 'smooth'});
});
$("#link-zenith").on( "click", function() {
    document.getElementById("header-zenith").scrollIntoView({ behavior: 'smooth'});
});

$("body").scroll(function(){
    if ($("body").scrollTop() >= $("#header-title").height()) {
        $('.sidebar-btn').addClass('sidebar-show');
        if(document.querySelector('.sidebar-btn').classList.contains('sidebar-btn-close'))
            $('.left-sidebar').removeClass('hidden');
    }
    else {
        $('.sidebar-btn').removeClass('sidebar-show');
        if(document.querySelector('.sidebar-btn').classList.contains('sidebar-btn-close')) {
            $('.sidebar-btn').removeClass('sidebar-btn-close');
            jQuery('.sidebar-btn-img').attr('src', './resources/images/icon_navigation.svg');
        }
        $('.left-sidebar').addClass('hidden');
        
    }
});

window.addEventListener('load', function() {
    document.addEventListener('click', function(event) { 
      if(event.target.classList.contains('sidebar-btn-img') 
        || event.target.classList.contains('sidebar-btn-inner')
        || event.target.classList.contains('sidebar-btn')) {
        let sidebar = event.target.closest('.sidebar');
        sidebar.classList.toggle('hidden');
        event.target.closest('.sidebar-btn').classList.toggle('sidebar-btn-close');
        if(event.target.closest('.sidebar-btn').classList.contains('sidebar-btn-close')) 
            jQuery('.sidebar-btn-img').attr('src', './resources/images/icon_close.svg');
        else 
            jQuery('.sidebar-btn-img').attr('src', './resources/images/icon_navigation.svg');
      }
    })
})