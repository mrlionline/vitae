$(function(){
    $('#dowebok').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#1889C5', '#9C58B6', '#26B1B6', '#129DE7','#ED6461'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        'navigation': true,
        'scrollingSpeed':600,
        'loopBottom':true,
        'loopTop':true,
        'navigationPosition': 'right',
        'navigationTooltips': ['1', '2', '3', '4','5'],
        afterLoad: function(anchorLink, index){
            if (index === 1) {
                
            }
            if (index === 2) {
                
            }
            if (index === 3) {
                
            }
            if (index === 4) {
                
            }
            if (index === 5) {
                
            }
        }
    });
});