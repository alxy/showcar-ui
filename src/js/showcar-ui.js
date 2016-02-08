require('../../vendor/zepto/zepto.min.js');

var polyfills = require('./components/polyfills.js');
polyfills();

var collapse = require('./components/collapse.js');
collapse();

require('../../vendor/showcar-icons/dist/showcar-icons.min.js');

window.Storage = require('../../vendor/showcar-storage/src/storage.js');

require('./components/rotating-arrow.js')();
require('./components/custom-dropdown.js');
require('./components/sticky.js')();
require('./components/navigation.js');
require('./components/notification.js');

var FontFaceObserver = require('fontfaceobserver');
var observer = new FontFaceObserver('Source Sans Pro');
observer.check().then(function () {
    $('body').addClass('font-loaded');
}, function () {
    // do nothing if font is not existing
});
