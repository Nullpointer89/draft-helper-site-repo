/*!
 * Date: 12/22/2015
 */

//var blockList = ["Arthas","Diablo","ETC","Kerrigan","Leoric","Muradin","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];
var blockList = ["Arthas","Diablo","Zeratul"];
var blockVariants = ["Lt Morales","Johanna"];
var blockToggle = false;

var boltList = ["Arthas","Diablo","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];
var boltVariants = ["Lt Morales","Johanna"];
var boltToggle = false;

var bloodForBloodList = ["Leoric","Muradin","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];
var bloodForBloodVariants = ["Lt Morales","Johanna"];
var bloodForBloodToggle = false;

var shrinkRayList = ["Arthas","Kerrigan","Leoric","Murky","Sonya","The Butcher"];
var shrinkRayVariants = ["Lt Morales","Johanna"];
var shrinkRayToggle = false;



function toggleBlock(){
	if(blockToggle){
		document.getElementById("block").style.opacity = "0.4";
	blockToggle = false;
	}else{
	blockToggle = true;
		document.getElementById("block").style.opacity = "1.0";
	}
	updateHighlights();
	return;
}

function toggleBolt(){
	if(boltToggle){
		document.getElementById("bolt-of-the-storm-talent").style.opacity = "0.4";
	boltToggle = false;
	}else{
	boltToggle = true;
		document.getElementById("bolt-of-the-storm-talent").style.opacity = "1.0";
	}
	updateHighlights();
}

function toggleBloodForBlood(){
	if(bloodForBloodToggle){
		document.getElementById("blood-for-blood-talent").style.opacity = "0.4";
	bloodForBloodToggle = false;
	}else{
	bloodForBloodToggle = true;
		document.getElementById("blood-for-blood-talent").style.opacity = "1.0";
	}
	updateHighlights();
}

function toggleShrinkRay(){
	if(shrinkRayToggle){
		document.getElementById("shrink-ray").style.opacity = "0.4";
		shrinkRayToggle = false;
	}else{
		shrinkRayToggle = true;
		document.getElementById("shrink-ray").style.opacity = "1.0";
	}
	updateHighlights();
}

function updateHighlights(){
	var siteIsUnchanged = true;
	setAllHeroOpacity( "0.4" );
	
	if( blockToggle ){
		highlightHeroes( blockList );
		siteIsUnchanged = false;
	}
	
	if( boltToggle ){
		highlightHeroes( boltList );
		siteIsUnchanged = false;
	}
	
	if( shrinkRayToggle ){
		highlightHeroes( shrinkRayList );
		siteIsUnchanged = false;
	}
	
	if( bloodForBloodToggle ){
		highlightHeroes( bloodForBloodList );
		siteIsUnchanged = false;
	}
	
	if( siteIsUnchanged ){
		setAllHeroOpacity( "1.0" );
	}
}

function highlightHeroes( heroArray ){

	document.getElementById( "wtfTEST" ).innerHTML = heroArray;
	//document.getElementById( heroArray[0] ).className = "GreyedHeroFrame";
	var j;
	var i;
	
	for(j=(heroArray.length-1),i=0; j >= i; i++ ){
		highlightHero( document.getElementById( heroArray[i] ) );
	}
	
	return;
}

function highlightHero( heroElement ){
	//heroElement.style.borderWidth = "3px";
	if( heroElement != null ){
		heroElement.style.opacity = "1.0";
	}else{
		alert( "Tried to highlight "+heroElement);
	}
	/*
	heroElement = heroElement.getElementsByTagName('img');
	heroElement[0].style.borderColor = "#FF0000";
	heroElement[0].style.borderWidth = "4px";
	*/
}

function setAllHeroOpacity( newOpacity ){
	var heroArray = document.getElementsByClassName( "heroFrame" );
	var j;
	var i;
	
	for(j=(heroArray.length-1),i=0; j >= i; i++ ){
		heroArray[i].style.opacity = newOpacity;
	}
}
	