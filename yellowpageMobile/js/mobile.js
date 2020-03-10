function getPreferent(m, s, l)
{
	$.post("http://toolkit.url.com.tw/preferent/index.php?serverid="+s+"&mobile="+m+"&latlng="+l, {item: 'sendmsg'});
}

function fbs_click(u,t) 
{
	window.open('http://m.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=600,height=350');
	return false;
}
