//var g = G$('Thrishul', 'Sherigar');

$('#login').click(function() {

    var loginGrtr = G$('Thrishul', 'Sherigar');
    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})