var ip_img = null;
var op_img = null;
var cp_img = null;
var a1;
var a2;
var fin;
var sld_id;
var sld_value;


function addimage() {
 a1 = document.getElementById("i_f");
 a2 = document.getElementById("ipimg");
 ip_img = new SimpleImage(a1);
 cp_img = new SimpleImage(a1);
 ip_img.drawTo(a2);
}

function o_p(){
	fin = document.getElementById("opimg");
	ip_img.drawTo(fin);
}

function reset(){
 var res = document.getElementById("opimg");
 ip_img = new SimpleImage(a1);
 ip_img.drawTo(res);

}

function f_res(){
 ip_img = new SimpleImage(a1);
}

function greyscale(){
	for(var px of ip_img.values()){
		var tot = px.getGreen() + px.getRed() + px.getBlue();
		var avg = tot/3;
		px.setRed(avg);
		px.setBlue(avg);
		px.setGreen(avg)
	}
	o_p();
}

function negative(){
	for(var px of ip_img.values()){
		px.setRed(255-px.getRed());
		px.setBlue(255-px.getBlue());
		px.setGreen(255-px.getGreen());
	}
	o_p();
}


function doc1(){
	for(var px of ip_img.values()){
		px.setRed(px.getRed()+10);
		px.setGreen(px.getGreen()+10);
		px.setBlue(px.getBlue()+10);
	}
	o_p();
}

function doc2(){
	for(var px of ip_img.values()){
		px.setRed(px.getRed()-10);
		px.setGreen(px.getGreen()-10);
		px.setBlue(px.getBlue()-10);
	}

	o_p();
}

function redfilter(){
	for(var px of ip_img.values()){
		var tot = px.getGreen() + px.getRed() + px.getBlue();
		var avg = tot/3;
		if(avg<128){
			px.setRed(2*avg);
			px.setBlue(0);
			px.setGreen(0);
		}
		else{
			px.setRed(255);
			px.setBlue(2*avg-255);
			px.setGreen(2*avg-255);			
		}
	}
	o_p();		
}

function greenfilter(){
	for(var px of ip_img.values()){
		var tot = px.getGreen() + px.getRed() + px.getBlue();
		var avg = tot/3;
		if(avg<128){
			px.setRed(0);
			px.setBlue(0);
			px.setGreen(2*avg);
		}
		else{
			px.setRed(2*avg-255);
			px.setBlue(2*avg-255);
			px.setGreen(255);			
		}
	}
	o_p();		
}

function bluefilter(){
	for(var px of ip_img.values()){
		var tot = px.getGreen() + px.getRed() + px.getBlue();
		var avg = tot/3;
		if(avg<128){
			px.setRed(0);
			px.setBlue(2*avg);
			px.setGreen(0);
		}
		else{
			px.setRed(2*avg-255);
			px.setBlue(255);
			px.setGreen(2*avg-255);			
		}
	}
	o_p();		
}
