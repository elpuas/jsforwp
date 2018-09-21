var mainForm = document.getElementById('app-form');

for( var i = 0, max = mainForm.length; i < max; i++ ) {
    console.log(mainForm[i].id)
}

var subject = document.querySelector( 'select' );

// A more specific way of selecting option fields

for( var i = 0, max = subject.children.length; i < max; i++ ) {

  if( 'question' === subject.children[i].value) {
    subject.children[i].selected = true;
  }

}