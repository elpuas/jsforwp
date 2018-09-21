// 1. Create my App Elements

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

var appFooter = document.querySelector('.app-footer'),
    appFooterContent;

appFooterContent = '<p class="app-footer-content">&copy; el.puas - jsforWp</p>';

appFooter.innerHTML = appFooterContent;

// 2. Dinamically Add Data 

// page content

var appData = {
    title: 'el.puas JSforWP Practice',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat varius augue et pharetra.',
    author: 'el.puas',
    imgSrc: 'https://www.elpuas.com/wp-content/uploads/2018/08/moi.jpg',
    links: ['home', 'form']
};

  
console.log(appData.links)

// 3. Create my functions to add title & content from object and added to elements;

function addAppTitle() {

    // this variable is local not available outside the function
     
    const theTitle = document.querySelector('.app-header-title');

    let titleData;
        
        titleData = appData.title;

    theTitle.innerText = titleData;    
}

function addAppContent() {

    const theContentNode = document.querySelector('.app-content');
    
    var appDataContent = appData.content;

    console.log(appDataContent); 

    let appDataAuthor = appData.author;

    console.log(appDataAuthor);

    if ( 'el.puas' === appDataAuthor) {

        console.log('Yeap  he is the author');
    }

    theContentNode.innerHTML = '<p>' + appDataContent + '</p>';

}

// call my functions to add the title & content to my app

addAppTitle();

addAppContent();

// set & get attributes

function addAppAttrs() {
    
    var addAttrsNode = document.querySelector('.app-content');

    appCardimgSrc = appData.imgSrc;

    appCard =  '<div class="app-card-container">';
    appCard += '<img src="/image" class="app-card-image" width="1" height="1" />';
    appCard += '<a href="/quebonito">Check My Website</a>';
    appCard += '</div>';

    addAttrsNode.innerHTML = appCard;

} 

addAppAttrs();

// Set my new Attributes

 var img = document.querySelector('img');

 img.setAttribute('src', appData.imgSrc);
 img.setAttribute('width', '100%');
 img.setAttribute('height', 'auto');


 var a = document.querySelector('a');

 a.setAttribute('href', 'https://elpuas.com');
 a.classList.toggle('active');

// Create My Menu

function addMenuItems(){
   
    console.log(appHeader);

    newAppHeader = function() {
        
        for ( item in appData.links ) {
              
            console.log(appData.links[item]);
        }
      
        for ( var i = 0, max = appData.links.length; i < max; i++ ) {
            
            console.log(appData.links[i]);
        }

    }

    return newAppHeader();
    
}

addMenuItems()


// Create Element Node 

var appHeaderMenu = document.querySelector('.app-header');
var titleHeader = document.querySelector('app-header-title');

var divApp = document.createElement( 'div' );
var ulList = document.createElement('ul');
var liList1 = document.createElement('li');
var liList2 = document.createElement('li');

// This needs to be dynamic using addMenuItems()
var menuItem1 = document.createTextNode(appData.links[0]);
var menuItem2 = document.createTextNode(appData.links[1]);

divApp.classList.add('app-menu-container');
ulList.classList.add('app-menu')

// This needs to be dynamic using addMenuItems()

liList1.appendChild(menuItem1);
liList2.appendChild(menuItem2);
ulList.appendChild(liList1);
ulList.appendChild(liList2);

// Add list to Container
divApp.appendChild(ulList);

// Test if we are getting everything we want
console.log(divApp);

// Then Add to Page

// appHeaderMenu.appendChild(divApp);

appHeaderMenu.insertBefore( divApp, null );

console.log(appHeaderMenu);

// Clone Nodes

console.log(appFooter);

var newDiv = divApp.cloneNode(true);

appFooter.insertBefore( newDiv, null );











