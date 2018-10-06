$(document).on('change', '.button-browse :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  
    input.trigger('fileselect', [numFiles, label, input]);
});

$('.button-browse :file').on('fileselect', function(event, numFiles, label, input) {
  var val = numFiles > 1 ? numFiles + ' files selected' : label;
  
  input.parent('.button-browse').next(':text').val(val);
});