var faisunMenu_openedfolderimage_src="images/icon_add.gif";
var faisunMenu_closedfolderimage_src="images/icon_add.gif";
var faisunMenu_menufileimage_src="images/icon_add.gif";

var faisunMenu_treetext=new Array();
var faisunMenu_treeurl=new Array();
var faisunMenu_treeurltarget=new Array();

var faisunMenu_treeNum=0;

document.write("<style type='text/css'>.blockhide{display:none;} .blockmove{overflow: hidden;height:1px;display:block;} .blockshow{overflow: visible; display:block;} .hideme{overflow: visible;display:none;} .showme{overflow: visible;display:block;} .faisunMenu td{font-size:10pt;} </style>");

window.document.body.onselectstart=new Function("return false");

function outinit(itemNo,dir,blockheight){ 
  var subfiles=document.getElementById("item"+itemNo);
  if(blockheight==0){
	subfiles.className="blockshow";
	subfiles.style.height='';
	blockheight=parseInt(subfiles.offsetHeight);
	if(dir>0) subfiles.className="blockmove";
  }
  var outinspeed=blockheight/10;
  var nowheight=parseInt(subfiles.offsetHeight)+outinspeed*dir;
  if(nowheight<=0){
    subfiles.className="blockhide";
	return;
  }else{
    subfiles.className="blockmove";
  }
  if(nowheight>=blockheight && dir>0){
    subfiles.className="blockshow";
	subfiles.style.height='';
	return;
  }
  subfiles.style.height=nowheight;
  subfiles.scrollTop=blockheight;
  parentsresize(subfiles);
  setTimeout("outinit("+itemNo+","+dir+","+blockheight+")",12);
}

function parentsresize(obj){ 
	do{
		if(obj.className=="faisunMenu"){
			break;
		}
		if(obj.className=="blockshow"){
			obj.style.height="";
		}
	}while(obj=obj.parentElement);
}

function showhideit(itemNo){
  var showfolder=document.images["openedfolderimage"+itemNo];
  var hidefolder=document.images["closedfolderimage"+itemNo];
  var subfiles=document.getElementById("item"+itemNo);
  if(subfiles.className=="blockmove") {return;}

  if(showfolder.className=="hideme") {
	hidefolder.className="hideme";
    showfolder.className="showme";
	outinit(itemNo,1,0);
  }
  else {
	showfolder.className="hideme";
    hidefolder.className="showme";
	outinit(itemNo,-1,0);
  }
}

function addtree(text,url,target){
  faisunMenu_treetext.push(text);
  faisunMenu_treeurl.push(url?url:"");
  faisunMenu_treeurltarget.push(target?target:"mainframe");
}

function getsubnum(text){ 
  var newtext=text.replace(/^-*/,"");
  return text.length-newtext.length;
}


function createtree(){

  faisunMenu_treeNum++;
  var treestatus=new Array();
  var treeendlayer=new Array();
  var openedlayer=new Array();

  var next_subnum=0;
  for(i=faisunMenu_treetext.length-1;i>=0;i--){ 
    var subnum=getsubnum(faisunMenu_treetext[i]);
	treestatus[i]=0;
	if(subnum<next_subnum){  
	   treeendlayer[next_subnum]=0;
	   treestatus[i]+=1;
	}
	if(!treeendlayer[subnum]){ 
	   treeendlayer[subnum]=1;
	   treestatus[i]+=2;
	}
	
	next_subnum=subnum;
  }
  
  var echo="<div class='faisunMenu'>";
  for(i=0;i<faisunMenu_treetext.length;i++){
     if(!faisunMenu_treetext[i]) continue;
	 var subnum=getsubnum(faisunMenu_treetext[i]);
	 var newtext=faisunMenu_treetext[i].replace(/^-*\*?/,"");
	 
	 if(treestatus[i]==1||treestatus[i]==3){
	   var havechild=1;
	 }else{
	   var havechild=0;
	 }

	 if(treestatus[i]==2||treestatus[i]==3){
	   openedlayer[subnum]=0;
	   var barstatus=2;
	 }else{
	   openedlayer[subnum]=1;
	   var barstatus=1;		 
	 }

	 var showme=faisunMenu_treetext[i].match(/^-*\*/);
	 var openfold=(i==faisunMenu_treetext.length-1?0:faisunMenu_treetext[i+1].match(/^-*\*/));
	 var li=i-1;
     if(i>0&&(treestatus[li]==1||treestatus[li]==3)){
	   echo += "<div id='item"+faisunMenu_treeNum+li+"' class='"+(showme?"blockshow":"blockhide")+"'>";
	 }
	 echo += "<table border='0' cellspacing='0' cellpadding='0' "+(subnum==0?"height=25":"")+"><tr>\n";
	for(j=1;j<subnum;j++){
	  echo += "<td width='25' valign=bottom><img src='images/"+(openedlayer[j]?"bar3.gif":"spacer.gif")+"' width='20' height='20'></td>\n";
	}
	if(subnum>0){
	  echo += "<td width='25' valign=bottom><img src='images/bar"+barstatus+".gif' width='20' height='20'></td>";
	}
	var clicktoshowhide=(havechild?" onclick='showhideit("+faisunMenu_treeNum+""+i+")' style='cursor:pointer;' ":"");
    echo += "<td width='25' valign=bottom "+clicktoshowhide+"><img name='openedfolderimage"+faisunMenu_treeNum+""+i+"' src='"+(havechild?faisunMenu_openedfolderimage_src:faisunMenu_menufileimage_src)+"' class='"+(openfold?"showme":"hideme")+"' width='15' height='15'><img name='closedfolderimage"+faisunMenu_treeNum+""+i+"' src='"+(havechild?faisunMenu_closedfolderimage_src:faisunMenu_menufileimage_src)+"' class='"+(openfold?"hideme":"showme")+"' width='15' height='15'></td>";
	echo += "<td nowrap valign=bottom><a onmousedown='return false;' "+clicktoshowhide+" "+(faisunMenu_treeurl[i]?"href='"+faisunMenu_treeurl[i]+"'":"name='#'")+" target='"+faisunMenu_treeurltarget[i]+"'>"+newtext+"</a></td></tr></table>\n\n";	

     if(barstatus==2&&!havechild){
	   for(j=subnum;j>=0;j--){
	     if(!openedlayer[j]) echo += "</div>";else break;
	   }
	 }
  }
  echo += "</div>";
  document.write(echo);


  faisunMenu_treetext=new Array();
  faisunMenu_treeurl=new Array();
  faisunMenu_treeurltarget=new Array();

}