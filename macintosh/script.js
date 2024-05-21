const searchBar=document.querySelector('.search-bar');
const searchButton=document.querySelector('.search-button');
const imageCaptions=document.querySelectorAll('.image-caption');
searchButton.addEventListener('click',()=>{
    const searchTerm=searchBar.ariaValueMax.toLowerCase();
    imageCaptions.forEach(caption=>{
        const captionText=caption.textContent.toLowerCase();
        if(captionText.includes(searchTerm)){
           caption.parentElement.style.display='block';
        }else{
            caption.parentElement.style.display='none';
        }
    });

});