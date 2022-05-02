let newMemeDiv =   document.querySelector('#newMeme');
let updateImgBtn = document.querySelector('#updateImgBtn');
let updateText =   document.querySelector('#updateText');
let finalizeBtn =  document.querySelector('#finalizeBtn');
let createdMemes = document.querySelector('#createdMemes');
let topText =      document.querySelector('#topTextInput');
let bottomText =   document.querySelector('#bottomTextInput');
let newMemeTextOverlay = document.querySelector('#newMemeTextOverlay');
let imgURL = document.querySelector('#imgURL');




updateImgBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let isImgAlreadyThere = document.querySelector('#newMeme img');


    let imgURL = document.querySelector('#imgURL').value;

    let newIMG = document.createElement('img');
    newIMG.setAttribute('src',imgURL);
    newMemeDiv.prepend(newIMG);

    
    let pictureDims=[];

    setTimeout(function() {
        pictureDims = [document.querySelector('img').clientHeight,document.querySelector('img').clientWidth];
        newMemeDiv.style.height = pictureDims[0]+'px';
        newMemeDiv.style.width=pictureDims[1]+'px';

        mainImgHeight=document.querySelector('img').clientHeight;



    },10);
    
    if (isImgAlreadyThere) {
        isImgAlreadyThere.remove();
    } 
    
});

updateText.addEventListener('click',function(e) {
    e.preventDefault();
    let tt = document.querySelector('#topTextContent');
    let bt = document.querySelector('#bottomTextContent');

    tt.innerText = topText.value;
    tt.style.fontSize=mainImgHeight*.08+'px';

    bt.innerText = bottomText.value;
    bt.style.fontSize=mainImgHeight*.08+'px';
});


finalizeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    createdMemes.prepend(newMemeDiv.cloneNode(true));
    let placeForNewOverlay = document.querySelector('#createdMemes #newMeme #newMemeTextOverlay');
    let xOverlay = document.createElement('div');
    xOverlay.setAttribute('class','x');
    xOverlay.innerHTML='<p>DELETE</p>';

    placeForNewOverlay.prepend(xOverlay);

    placeForNewOverlay.addEventListener('click', function(e) {
        console.log(e.target.parentNode.parentNode.remove());
    });

    imgURL.value='';
    topText.value='';
    bottomText.value='';


});

