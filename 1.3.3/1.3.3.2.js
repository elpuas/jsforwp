// var contact = document.getElementById( 'contact' );
// console.log( contact.querySelector( 'a' ) );

// var nodesArray = Array.prototype.slice.call(document.querySelectorAll("div"));
// console.log( nodesArray );
// console.log( nodesArray[1] );

// My Shit

// var content = document.getElementsByClassName('content');

//     console.log( content );

// Is this the Same    

// var contentFor = document.children[0].children[4];
    
//     console.log( contentFor.children );

//  for ( var i = 0; i < contentFor.length; i++ ) {
//     console.log( contentFor[i] );
//  }

// var contentTitle =  contentFor.children[0].innerText;

// console.log(contentTitle); // Welcome!


var content = document.getElementsByClassName('content');

 console.log( content );

var contentTitleBy = content[1];
 console.log( contentTitleBy.querySelector('a').innerText); 

 // document.getElementById();
 // document.getElementsByTagName();
 // document.getElementsByClassName();
 // document.querySelector();
 // document.querySelectorAll();

 var contact = document.getElementById( 'contact' );
 var selector = document.querySelector( '.content');
 var selectorAll = document.querySelectorAll( '.content' );
    console.log( contact );
    console.log( selector );
    console.log( selectorAll );
