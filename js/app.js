/**
 * 
 */
$(document).ready(function(){
	window.fbAsyncInit = function() {
        FB.init({
          appId      : '758761314186545',
          xfbml      : true,
          version    : 'v2.0',
          status	 : true
        });
       FB.getLoginStatus(function(response){
    	   if (response.status === 'connected') {
    		   console.log('Logged in.');
    	   } else {
    		   FB.login();
    	   }
       }); 
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
//         js.src = "//connect.facebook.net/en_US/sdk.js";
         js.src = "//connect.facebook.net/en_US/sdk/debug.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
});
