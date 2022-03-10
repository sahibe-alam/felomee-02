

// https://github.com/animate-css/animate.css/tree/a8d92e585b1b302f7749809c3308d5e381f9cb17     this is animation doc link to change animation direction
/*these all animation classes
bounce 	flash 	pulse 	rubberBand
shake 	headShake 	swing 	tada
wobble 	jello 	bounceIn 	bounceInDown
bounceInLeft 	bounceInRight 	bounceInUp 	bounceOut
bounceOutDown 	bounceOutLeft 	bounceOutRight 	bounceOutUp
fadeIn 	fadeInDown 	fadeInDownBig 	fadeInLeft
fadeInLeftBig 	fadeInRight 	fadeInRightBig 	fadeInUp
fadeInUpBig 	fadeOut 	fadeOutDown 	fadeOutDownBig
fadeOutLeft 	fadeOutLeftBig 	fadeOutRight 	fadeOutRightBig
fadeOutUp 	fadeOutUpBig 	flipInX 	flipInY
flipOutX 	flipOutY 	lightSpeedIn 	lightSpeedOut
rotateIn 	rotateInDownLeft 	rotateInDownRight 	rotateInUpLeft
rotateInUpRight 	rotateOut 	rotateOutDownLeft 	rotateOutDownRight
rotateOutUpLeft 	rotateOutUpRight 	hinge 	jackInTheBox
rollIn 	rollOut 	zoomIn 	zoomInDown
zoomInLeft 	zoomInRight 	zoomInUp 	zoomOut
zoomOutDown 	zoomOutLeft 	zoomOutRight 	zoomOutUp
slideInDown 	slideInLeft 	slideInRight 	slideInUp
slideOutDown 	slideOutLeft 	slideOutRight 	slideOutUp
heartBeat

*/

$(document).ready(function () {
    $('.home_col_2').waypoint(function (direction) {

        $('.home_col_2').addClass('animated slideInRight')
    }, {
        offset: '70%'
    })
});


$(document).ready(function () {
    $('.text_div').waypoint(function (direction) {

        $('.text_div').addClass('animated slideInLeft')
    }, {
        offset: '70%'
    })
});

$(document).ready(function () {
    $('.home_heading').waypoint(function (direction) {

        $('.home_heading').addClass('animated zoomIn')
    }, {
        offset: '70%'
    })
});

$(document).ready(function () {
    $('.top_arrow').waypoint(function (direction) {

        $('.top_arrow').addClass('animated zoomInUp')
    }, {
        offset: '90%'
    })
});