

// create the elements/nodes

var container = document.getElementById('app'),
    appElements;

appElements =  '<div class="app-header">Header</div>';
appElements += '<div class="app-content">The Content</div>';
appElements += '<div class="app-footer">The Footer</div>';

container.innerHTML = appElements;

// create the header title

var appHeader = document.querySelector('.app-header'),
    appTitle;

appTitle = '<h1 class="app-header-title">The Title</h1>';

appHeader.innerHTML = appTitle;
  
// create the footer