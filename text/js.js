
// To test locally in chrome, press F12, go to Sources > Overrides and add the "Websites" Folder

var siteBasePath = (function () {
    var host = window.location.hostname;
    if (host.endsWith('github.io')) {
        var parts = window.location.pathname.split('/');
        if (parts.length > 1 && parts[1]) {
            return '/' + parts[1] + '/';
        }
    }
    return '/';
})();

function updateFaviconPaths() {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = siteBasePath + 'favicon.ico';
    }
    var appleTouch = document.querySelector('link[rel="apple-touch-icon"]');
    if (appleTouch) {
        appleTouch.href = siteBasePath + 'images/favicon.png';
    }
}

updateFaviconPaths();

pages = [  // use nice name, do NOT keep a '/' at the end
    'Projects/Actuator',
    'Projects/Beach Body Bros',
    'Projects/Chorus',
    'Projects/Chocolate', 
    'Projects/Old Friend', 
    'Projects/BUTTS',
    'About', 
]; 


// build the main site nav
function buildNavPane() 
{
    document.getElementById("navpane").innerHTML =
    "<div id='sitelogo' align='center'><a href='" + siteBasePath + "'><img src='" + siteBasePath + "images/SiteLogo.png' height='100px'></img></a></div>" +
    "<br/>" +
    "<div id='nametitle'>Tyler Hurd</div>" +
    "<div style='font-style:italic; font-size: x-small'>Animator, VR Creator</div>" +
    "<ul id='navmenu'>" +
    "<li><a href='"+convertToURL(pages[0], true)+"'>"+pages[0].split('/')[1].toUpperCase()+"</a></li>" +
    "<li><a href='"+convertToURL(pages[1], true)+"'>"+pages[1].split('/')[1].toUpperCase()+"</a></li>" +
    "<li><a href='"+convertToURL(pages[2], true)+"'>"+pages[2].split('/')[1].toUpperCase()+"</a></li>" +
    "<li><a href='"+convertToURL(pages[3], true)+"'>"+pages[3].split('/')[1].toUpperCase()+"</a></li>" +
    "<li><a href='"+convertToURL(pages[4], true)+"'>"+pages[4].split('/')[1].toUpperCase()+"</a></li>" +
    "<li><a href='"+convertToURL(pages[5], true)+"'>"+pages[5].split('/')[1].toUpperCase()+"</a></li>" +
    "<br/>" +
    "<li><a href='https://shop.tylerhurd.com/'>SHOP</a></li>" +
    "<br/>" +
    "<li><a href='"+convertToURL(pages[6], true)+"'>ABOUT</a></li>" +
    "<li><a href='http://tylerhurd.blogspot.com/' target='blank'>BLOG</a></li>" +
    "</ul>" +
    "<div id='navfoot'><p>&copy;  " + new Date().getFullYear() + "</p></div>";
}
// build the mini site nav for mobile
function buildMiniNavPane() 
{
    document.getElementById("mininavpane").innerHTML =
    "<div><a href='" + siteBasePath + "'>< BACK</div>"
    ;   
}
    
// build a thumbnail pane
function buildThumbPane(subnav) 
{
    var theHtml = '';
    
    // title header for thumbs
    //theHtml += '<h1>Projects</h1>';
    
    // start list of thumbnails
    theHtml += '<ul class="thumblist">';
    
    // build each thumbnail
    for( i=0; i<pages.length; i++ ) {
        
        // only act on pages of specified type, or if * then all
        if(subnav != '*' && pages[i].match(subnav+'/')) {
            
            var categoryName = pages[i].split('/')[0];
            var pageName = pages[i].split('/')[1];
            var url = convertToURL(pages[i]);
            
            theHtml += '<li>'
            theHtml += '    <div class="thumbdiv">'; 
            theHtml += '        <a href="'+url+'">';
            theHtml += '            <div class="thumbtitle">'+pageName+'</div>';
            theHtml += '            <img src="'+url+'ListThumb.jpg" ></img>';
            theHtml += '        </a>';
            theHtml += '    </div>';
            theHtml += '</li>';
        }
    }
    
    theHtml += '</ul>'
    document.getElementById('thumbpane').innerHTML = theHtml;
}

function convertToURL(name, includeMain = false) 
{
    return siteBasePath + name.toLowerCase().replace(/ /gi,'') + '/';
}






























