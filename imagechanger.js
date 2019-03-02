var img=document.querySelector('img');
img.onclick=function() {
	var src=img.getAttribute('src');
	if(src === "OFFbulb.jpg")
	{
		img.setAttribute('src','ONbulb.jpg');
	}else
	{
		img.setAttribute('src','OFFbulb.jpg');
	}
}