lightbox.option({
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
});

//searchbox
$('input').keyup(function (event) {        
    for(var i = 1 ; i < 13 ; i++){        
        if(!($(`.${i}`).attr('data-title').toLowerCase().includes(this.value))){
            $(`.${i}`).removeClass("true").addClass("false");  
            $(`.${i}`).attr('data-lightbox' , 2);               
        } else {
            $(`.${i}`).attr('data-lightbox' , 1);
            $(`.${i}`).removeClass("false").addClass("true");
        }
    }
});

// Credit for the lightbox plugin goes to Lokesh Dhakar at:
// https://lokeshdhakar.com/projects/lightbox2/
// The MIT License