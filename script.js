// $('.myitem').each( function () {
//   if ($(this).hasClass('selected'))
//   {
//      $('.myImage').attr('src') = 'path-to-images/image'+$(this).attr('id')+'.jpg';
//   }
// });

// $('#myMoon').on('change', function () {
//   $('#imageToSwap').attr('src', $(this).find(':selected').attr('data-src'));
// });

document.addEventListener('DOMContentLoaded', function () {
  const imageSelector = document.getElementById('imageSelector');

  imageSelector.addEventListener('change', function () {
    const selectedImage = this.value;
    const body = document.querySelector('#imageToSwap');
    body.style.backgroundImage = `url('${selectedImage}.jpg')`;
    // alert('Hello');
  });
});
