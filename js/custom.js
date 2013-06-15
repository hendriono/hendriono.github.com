jQuery(document).ready(function() {
  
  $('#gf').text('GitHub Followers');
    $('#gfr').text('GitHub Repos');   
  
  JSONP( 'https://api.github.com/users/hendriono?callback=?', function( response ) {
    var data = response.data;
    $('#gf').text(data.followers + ' GitHub Followers');
        $('#gfr').text(data.public_repos + ' GitHub Repos');
  });
  
  function JSONP( url, callback ) {
    var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
    var script = document.createElement('script');
    script.src = url.replace( 'callback=?', 'callback=' + id );
    document.body.appendChild( script );
    window[ id ] = function( data ) {
      if (callback) {
        callback( data );
      }
    };
  } 
  $('#atas').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
  });
  $('#ghw').githubWidget({
      'username': 'hendriono',
      'displayActions': false,
      'firstCount': 10,
      'displayHeader': false,
      'displayLastCommit': false,
      'displayAccountInformations': false,
      'displayLanguage': false
    });
  if (!(document.location.protocol == "file:" || document.location.host == "localhost")) {
  $('<div class="alert alert-error">Harap berkomentar yang relevan dengan artikel ini dan hindari untuk berkomentar seperti halnya "Terima Kasih", hindari berbagi link tak ada hubungan dengan artikel, gunakan saja tombol Bintang dari Disqus sebagai gantinya. Terima kasih atas kerjasamanya, selamat membaca dan berkomentar dengan baik dan sopan. Anda dapat menggunakan <a href="http://docs.disqus.com/help/19/">beberapa tag HTML</a> jika dibutuhkan.</div>').insertAfter($("#post-comments h3"));
  var g = "?";
  $.each($("a[href$=#disqus_thread]"), function (c, b) {
    g += "url" + c + "=" + encodeURIComponent(b.href) + "&"
  });
  $.ajaxSetup({
    cache: true
  });
  $.getScript("http://disqus.com/forums/hendgithub/get_num_replies.js" + g);
  var f = document.location.href;
  if (f.indexOf("#disqus_thread") >= 0 || f.indexOf("#comment-") >= 0 || f.indexOf("?showComment=") >= 0) {
    $.getScript("http://hendgithub.disqus.com/embed.js");
    $("#comments-loader-button").remove()
  }
  $.ajaxSetup({
    cache: false
  })
  }
});

// Twitter
!function(d,s,id){
  var js,
  fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,"script","twitter-wjs");

// Google +
window.___gcfg = {lang: 'id'};
(function() {
  var po = document.createElement('script'); 
  po.type = 'text/javascript'; 
  po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(po, s);
})();