const blockip=['14.47.184.93'];
function start() {
	setTimeout (function() {
		verify();
		document.getElementById("conf").style.display='none';
	},250)
}
	function hiyobi(){
	var site=document.querySelectorAll('.main a');
	var himode=document.getElementById('himode').checked;
	if(himode==true){
		for (var i=0; i<site.length; i++){
			site[i].href=site[i].href.replace('https://hitomi.la','https://hiyobi.me');
			site[i].href=site[i].href.replace('.html','');
		}
	}
	if(himode==false){
		for (var i=0; i<site.length; i++){
			site[i].href=site[i].href.replace('https://hiyobi.me','https://hitomi.la');
			site[i].href=site[i].href+'.html'
		}
	}
}
function verify() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if(this.status == 200 && this.readyState == this.DONE) {
			var ip=request.responseText;
			if(blockip.includes(JSON.parse(ip).ip)){
				window.location.replace('http://www.google.com');
			}
		}
	}
	request.open("GET", 'https://api.ipify.org?format=json');
	request.send(null);
}