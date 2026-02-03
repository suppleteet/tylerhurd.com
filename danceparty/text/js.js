//
// All the jQuery
//

//content_width = 1200;
//list_columns = 6;

text_height = 18;
cell_pad = 10;
//cell_width = parseInt(((content_width+(cell_pad*2))/list_columns)-(cell_pad*2));
//cell_height = parseInt(((content_width+(cell_pad*2))/list_columns)-(cell_pad*2));
cell_width = 120;
cell_height = 120;

prev_nav = '';
the_html='';

is_mobile = false;

// MOVES TABLE GENERATED THROUGH PYTHON
moves = ["AnnaMovesB", "AnshumanMovesA", "BagelMovesA", "BaldurMovesA", "BradMovesA", "BrittanyMovesA", "CarsonMovesA", "ChandlerMovesA", "CiaMovesA", "FootClapMovesA", "GabeMovesA", "GabeMovesC", "GabeMovesD", "GrahamMovesA", "GregMovesA", "GregMovesC", "JamesMovesA", "JayMovesA", "JayMovesB", "JayMovesC", "JayMovesD", "JayMovesE", "JayMovesF", "JemmaMovesB", "JoeMovesA", "LaraMovesA", "LizMovesD", "MalenaMovesA", "MatthewMovesC", "MeleMovesA", "MeleMovesC", "PattyMovesA", "PinnellMovesA", "RachelMovesA", "SonyaMovesC", "TritonMovesA", "TylerMovesA", "TylerMovesB", "TylerMovesC", "TylerMovesE", "TylerMovesF", "TylerMovesG", "TylerMovesH", "TylerMovesI", "TylerMovesJ", "TylerMovesK", "TylerMovesL", "TylerMovesM"];
moves_sorted = [
"AnnaMovesB", 
"AnshumanMovesA", 
"BagelMovesA", 
"BaldurMovesA", 
"BradMovesA", 
"BrittanyMovesA", 
"CarsonMovesA", 
"ChandlerMovesA", 
"CiaMovesA", 
"FootClapMovesA", 
"GabeMovesA", 
"GabeMovesC", 
"GabeMovesD", 
"GrahamMovesA", 
"GregMovesA", 
"GregMovesC", 
"JamesMovesA", 
"JayMovesA", 
"JayMovesB", 
"JayMovesC", 
"JayMovesD", 
"JayMovesE", 
"JayMovesF", 
"JemmaMovesB", 
"JoeMovesA", 
"LaraMovesA", 
"LizMovesD", 
"MalenaMovesA", 
"MatthewMovesC", 
"MeleMovesA", 
"MeleMovesC", 
"PattyMovesA", 
"PinnellMovesA", 
"RachelMovesA", 
"SonyaMovesC", 
"TritonMovesA", 
"TylerMovesA", 
"TylerMovesB", 
"TylerMovesC", 
"TylerMovesE", 
"TylerMovesF", 
"TylerMovesG", 
"TylerMovesH", 
"TylerMovesI", 
"TylerMovesJ", 
"TylerMovesK", 
"TylerMovesL", 
"TylerMovesM"
];


// On site load build page
$(document).ready( function() {
    build_page(window.location.hash.replace('#',''));
    $('#nav').css('opacity','0');
    $('#mobile_play_button').hide();
     
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
      is_mobile = true;  
    }
});

// on hash change build page
$(window).hashchange( function(){
    build_page(window.location.hash.replace('#',''));
});

// build page
function build_page( hash_nav ) {
    $('#loading').stop().animate( { 'opacity':1 }, 30); // turn on loading gif
    
    // if in menu, turn off nav
    if (hash_nav == '#' || hash_nav == '') {
        $('#nav').stop().animate( { 'opacity':0 }, 500 );
        
        // adjust max width on mobile
        if (is_mobile) {
            $('#center').css('max-width','95%');
        }
    }
    else {
        $('#nav').stop().animate( { 'opacity':1 }, 500 );
        
        
    }
    
    
    $('#content').stop().animate( { "opacity":0 }, 5, function() {
        
        // after fade-out clear contents
        $(this).empty();
        
        // build single page for moves
        the_html='';
        if( hash_nav != '' ) {
            actor_name = hash_nav.split('Moves')[0];
            movie_a = hash_nav+'_'+actor_name;
            movie_b = hash_nav;
            
            the_html = '<ul style="width: 100%;">';
            
            if (is_mobile) {
                // mobile source footage clip
                the_html += '<li class="danceli"><img class="movie_poster_a" src="posters/'+movie_a+'.jpeg"/><video class="dance_movie_a" loop poster="posters/'+movie_a+'.jpeg">'
                the_html += '<source src="mp4mobile/'+movie_a+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video></li>';
                
                // mobile animation clip
                the_html += '<li class="danceli"><img class="movie_poster_b" src="posters/'+movie_b+'.jpeg"/><video class="dance_movie_b" loop poster="posters/'+movie_b+'.jpeg">'
                the_html += '<source src="mp4mobile/'+movie_b+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video></li>';
            }
            else {
                // source footage clip
                the_html += '<li class="danceli"><video class="dance_movie_a" autoplay loop preload="auto" poster="posters/'+movie_a+'.jpeg">'
                the_html += '<source src="mp4/'+movie_a+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video></li>';
                
                // source footage clip
                the_html += '<li class="danceli"><video class="dance_movie_b" autoplay loop preload="auto" poster="posters/'+movie_b+'.jpeg">'
                the_html += '<source src="mp4/'+movie_b+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video></li>';
            }
            
            the_html += '</ul>';
        }
        // build menu thumbnails
        else {
            
            $('#mobile_play_button').hide();

            // heading
            the_html = '<p style="font-size:2em;"><b>OLD FRIEND DANCE PARTY</b></p><br/>'
            the_html += '<p>The following stupid fun dance moves were performed as inspiration for the animation in the VR music video <a href="http://tylerhurd.com/projects/oldfriend/">Old Friend</a> by <a href="http://www.future-islands.com/">Future Islands</a>, presented by <a href="http://wevr.com">Wevr</a>, created by <a href="http://tylerhurd.com">Tyler Hurd</a>.'
            the_html += '</p><br/>'
            
            // build the list
            the_html += '<ul style="width: 100%;">';
            for( i=0; i<moves.length; i++ ) {
                the_html += '<li class="sub_nav" style="float: left;">'+ // the table item properties
                        '<a href="#'+moves[i]+'">'+ // the link
                        '<div style="width:'+cell_width+'px; height:'+cell_height+'px; margin:'+cell_pad+'px '+(cell_pad*2)+'px '+cell_pad+'px 0px; overflow:hidden;">'+ // the div that holds all
                        '<div id="thumbDiv'+i+'" style="height:'+(cell_height)+'px; overflow:hidden;"></div></div></a></li>'; // the thumbnail div
            }

            the_html += '</ul><br/><br/>';
            
            the_html += '<p><b>DANCERS:</b><br/><br/>'
            the_html += 'Gabe Askew, Jemma Cullen, Lara Podmore, Liz Maher, Anna Kipnis, Nathan Stapley, Brad Fotsch, Jay Doherty, Melesande Perera, Matthew Bice, Sonya Z Mehta, Anshuman Duneja, Greg Rice, Rene & Selena Pinnell, Malena Graham James & Carson Annable, Joseph Virskus, Matthew Campbell, Rachel Little, Baldur Helgason, Patty Spyrakos, Brittany Triton & Cia Hurd'
            the_html += '<br/><br/><br/><br/><br/><br/><br/>'
        }
        
        // insert html
        $(this).html(the_html)
        
        // populate thumbnails
        if( hash_nav == '' ) {
            for( i=0; i<moves.length; i++ ) {
                add_thumbnail( moves[i], ('thumbDiv'+i) );
            }
        }
        
        // show after video content loaded
        show_after_loaded( hash_nav );
    });
    
	$('#content').trigger("update");
    prev_nav = hash_nav;
}

function show_after_loaded( hash_nav ) {
    
    if( hash_nav == '#' || hash_nav == '') {
        // for menu just show everything
        $('#loading').stop().animate( { 'opacity':0 }, 15); // turn off loading gif
        $('#content').stop().animate( { 'opacity':1 }, 15 ); // fade in
    }
    else {
        // make sure all videos are loaded before showing stuffs
        if (is_mobile) {
            
            // on mobile, turn on play button, then do another round of show after load
            $('#loading').stop().animate( { 'opacity':0 }, 30); // turn off loading gif
            $('#content').stop().animate( { 'opacity':1 }, 350 ); // fade in
            
            $('#mobile_play_button').show();
            $('#mobile_play_button').stop().animate( { 'opacity':0.8 }, 350);
        }
        else {
            var vids = document.getElementsByClassName('dance_movie_a');
            num_loaded = 0;
            
            for(i=0; i<vids.length; i++) {
                obj = vids[i];
                obj.addEventListener('loadeddata', function() {
                    num_loaded++;
                    if(num_loaded == vids.length) {
                        $('#loading').stop().animate( { 'opacity':0 }, 30); // turn off loading gif
                        $('#content').stop().animate( { 'opacity':1 }, 350 ); // fade in
                    }
                });
            }
        }
    }
    /*
    */   
    
    /*
    var vids = $('.dance_movie');
    var num_vids = vids.length;
    var num_loaded = 0;
    
    vids.each(function(){
        $(this).bind('load', function(event){
            alert(event);
            num_loaded++;
            if(num_loaded == num_vids)
            {
                $('#loading').stop().animate( { 'opacity':0 }, 30); // turn off loading gif
                $('#content').stop().animate( { 'opacity':1 }, 350 ); // fade in
            }
        });
    });
    */
    /*
    
    // don't wait, just show everything
    $('#loading').stop().animate( { 'opacity':0 }, 30); // turn off loading gif
    $('#content').stop().animate( { 'opacity':1 }, 350 ); // fade in
    
    $('#content').waitForImages( hash_nav, function(response) { 
        //alert('complete!  Returned: ' + response);
        $('#loading').stop().animate( { 'opacity':0 }, 30); // turn off loading gif
        $(this).stop().animate( { 'opacity':1 }, 350 ); // fade in
    });
    */
}
    
//
// hotkeys!
//
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        navigate(-1);
        break;

        case 38: // up
        navigate(0);
        break;

        case 39: // right
        navigate(1);
        break;

        case 40: // down
        navigate(0);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function navigate( direction ) {
    current_move = window.location.hash.replace('#','');
    
    // if in gallery, go to first or last one
    if( current_move == '' ) {
        if (direction == 1)
            window.location.hash = moves[0];
        else if(direction == -1)
            window.location.hash = moves[moves.length-1];
        
    }
    // if on last or first, go to gallery
    else if( (current_move == moves[moves.length-1] && direction == 1) || 
                (current_move == moves[0] && direction == -1) ) {
        window.location.hash = '';
    }
    // if in middle, navigate back/forth/up
    else {
        if( direction == 0 ) {
            window.location.hash = '';
        }
        else{
            for( i=0; i<moves.length; i++ ) {
                if( moves[i] == current_move ) {
                    //build_page( moves[i+direction] );
                    window.location.hash = moves[i+direction];
                }
            }
        }
    }
}

//
// play button for mobile
//
function play_vids() {
    $('#mobile_play_button').stop().animate( { 'opacity':0 }, 300, function() {
        $('#mobile_play_button').hide();
    });
    
    hash_nav = window.location.hash.replace('#','');
    actor_name = hash_nav.split('Moves')[0];
    movie_a = hash_nav+'_'+actor_name;
    movie_b = hash_nav;

    $('.dance_movie_a').get(0).play();
    $('.dance_movie_b').get(0).play();
    
}

//
// Thumbnails
// 
function add_thumbnail( move, par_div ) {
    actor_name = move.split('Moves')[0];
    movie_a = move+'_'+actor_name;
    movie_b = move;
    
    // create hidden image
    $('#'+par_div).css('opacity','0.8').css( 'background-image','url(images/Progress_Small.gif)').css('background-repeat','no-repeat').css('background-position','50% 50%');
    
    if (is_mobile) {
        the_html = '<img class="dance_thumb" src="posters/'+movie_a+'.jpeg" id="'+par_div+'_video" style="height:400%;width=400%;"> </img>';
    }
    else {
        the_html = '<video class="dance_thumb" poster="posters/'+movie_a+'.jpeg" id="'+par_div+'_video" style="height:400%;width=400%;">';
        //the_html += '<source src="mp4/'+movie_a+'.mp4"/>';
        //the_html += '<source src="webm/'+movie_a+'.webm" type=\'video/webm;codecs="vp8, vorbis"\'/>';
        the_html += '<source src="mp4/'+movie_a+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video>';
        
        // hidden video
        the_html += '<video class="dance_thumb" autoplay poster="posters/'+movie_b+'.jpeg" id="'+par_div+'_video" style="height:100%;width=100%;">';
        the_html += '<source src="mp4/'+movie_b+'.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/></video>';
    }
    $('#'+par_div).html(the_html);
    
   
    // center the vid thumbnail with natural width/height values
    $('#'+par_div+'_video').css('opacity',0).css( 'margin-left', cell_height*-1.5 ).css( 'margin-top', cell_height*-0.75 );
    

    // wait for video to load, then show it
    var p = document.getElementById(par_div);
    var vids = p.getElementsByClassName('dance_thumb');
    
    if (is_mobile) {

        // loading bar for mobile images
        $('#'+par_div+'_video').load(function() {
            $('#'+par_div).css( 'background-image','');
            $('#'+par_div+'_video').stop().animate( { 'opacity':1 }, 200, function() {
                $('#'+par_div+'_video').stop().animate( { 'opacity':0.8 }, 50 );
            });
        });
        
    }
    else {
        // set video to play on hover
        $('#'+par_div+'_video').hover( hoverVideo );
        
        // loading bar thingy
        vids[0].addEventListener('loadeddata', function() {
            $('#'+par_div).css( 'background-image','');
            
            $('#'+par_div+'_video').stop().animate( { 'opacity':1 }, 250, function() {
                $('#'+par_div+'_video').stop().animate( { 'opacity':0.8 }, 50 );
            });
        });

    }
    
    
}


function hoverVideo(e) {  
    $(this).get(0).play(); 
}

function hideVideo(e) {
    $(this).get(0).pause(); 
}




function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

moves = shuffle(moves);