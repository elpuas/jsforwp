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
    imgSrc: 'https://www.elpuas.com/wp-content/uploads/2018/08/moi.jpg'
};

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

    theContentNode.innerText = appDataContent;

}

// call my functions to add the title & content to my app

addAppTitle();

addAppContent();

