console.log('%c Kaktos Generator!', 'background: #222; color: #bada55');

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        //console.log('Link copied!');
    }, function (err) {
        //console.error('Error when copy link: ', err);
    });
}
