/*!
 * Date: 12/22/2015
 */

 
 //FULL LIST Zeratul,Zagara,Valla,Uther,Tyrande,Tyrael,Tychus,Thrall,The Butcher,TLV,Tassadar,Sylvanas,Stitches,Sonya,Sergeant Hammer,Rexxar,Rehgar,Raynor,Nova,Nazeebo,Murky,Muradin,Malfurion,Lt Morales,Lili,Leoric,Kharazim,Kerrigan,Kaelthas,Johanna,Jaina,Illidan,Gazlowe,Gall,Falstad,ETC,Diablo,Cho,Chen,Brightwing,Azmodan,Arthas,Artanis,Anubarak,Abathur
//var blockList = ["Arthas","Diablo","ETC","Kerrigan","Leoric","Muradin","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];

var totalTalentsActive = 0;
var fadedOpacity = 0.4;
var fadeSpeed = 250

var blockList = ["Arthas","Diablo","Zeratul"];
var blockVariants = ["Lt Morales","Johanna"];

var boltList = ["Arthas","Diablo","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];
var boltVariants = ["Lt Morales","Johanna"];

var bloodForBloodList = ["Leoric","Muradin","Murky","Sonya","The Butcher","Thrall","Uther","Zeratul"];
var bloodForBloodVariants = ["Lt Morales","Johanna"];

var shrinkRayList = ["Arthas","Kerrigan","Leoric","Murky","Sonya","The Butcher"];
var shrinkRayVariants = ["Lt Morales","Johanna"];

var heroListText = [];
var heroHighlightNumber = [];


var genericTalentList;// = { "regeneration-master":shrinkRayList };
//genericTalentList["shrink-ray"]  = shrinkRayList;

function initializeTalentLists(){
	genericTalentList = { 
		"block":blockList,
		"regeneration-master":["Arthas","Leoric","Murky","Sonya","The Butcher"],
		"blood-for-blood-talent":bloodForBloodList,
		"shrink-ray":shrinkRayList,
		"bolt-of-the-storm-talent":boltList,
	};
}

function initializeHeroList(){
	var heroList = $(".heroFrame");
	
	var j = heroList.length;
	var i = 0;
	for(; i < j;i++){
		heroListText.push( heroList[i].id );
		heroHighlightNumber[i] = 0;
	}
	document.getElementById( "wtfTEST" ).innerHTML = heroListText;
}

function toggleTalentOff( talent ){
	totalTalentsActive -= 1;
	
	var affectedHeroList = genericTalentList[talent];
	document.getElementById( "wtfTEST" ).innerHTML = affectedHeroList;
	//document.getElementById( "wtfTEST" ).innerHTML = genericTalentList[talent];
	//document.getElementById( "wtfTEST" ).innerHTML = genericTalentList["shrinkray"] ;
	//genericTalentList = { "regeneration-master":shrinkRayList};
	//document.getElementById( "wtfTEST" ).innerHTML = talent;
	
	var affectedHeroIndex;
	$.each(affectedHeroList, function( index, affectedHero){
		affectedHeroIndex = heroListText.indexOf( affectedHero );
		
		heroHighlightNumber[ affectedHeroIndex ] -= 1;
		if( (heroHighlightNumber[ affectedHeroIndex ] == 0) && (totalTalentsActive>0) ){
			$("#"+affectedHero).fadeTo(fadeSpeed, fadedOpacity);
		}
	});
	if( totalTalentsActive == 0 ){
		$.each(heroListText, function( index, affectedHero){
			$("#"+affectedHero).fadeTo(fadeSpeed, 1.0);
		});
	}
}

function toggleTalentOn( talent ){
	if( totalTalentsActive == 0 ){
		$.each(heroListText, function( index, affectedHero){
			$("#"+affectedHero).fadeTo(fadeSpeed, fadedOpacity);
		});
	}
	totalTalentsActive += 1;
	var affectedHeroList = genericTalentList[talent];
	document.getElementById( "wtfTEST" ).innerHTML = affectedHeroList;
	//document.getElementById( "wtfTEST" ).innerHTML = genericTalentList[talent];
	//document.getElementById( "wtfTEST" ).innerHTML = genericTalentList["shrinkray"] ;
	//genericTalentList = { "regeneration-master":shrinkRayList};
	//document.getElementById( "wtfTEST" ).innerHTML = talent;
	
	var affectedHeroIndex;
	$.each(affectedHeroList, function( index, affectedHero){
		affectedHeroIndex = heroListText.indexOf( affectedHero );
		
		heroHighlightNumber[ affectedHeroIndex ] += 1;
		if( heroHighlightNumber[ affectedHeroIndex ] >= 1 ){
			$("#"+affectedHero).fadeTo(fadeSpeed, 1.0);
		}
	});
	/*
	for(var i=0, var j=(affectedHeroList.length-1); i <=j; i++){
		
		//document.getElementById().style.opacity = "1.0";
		//if( heroListText[
		var heroIndex = heroListText.indexOf( affectedHeroList[i] );
		heroHighlightNumber[ heroIndex ] += 1;
		document.getElementById( heroHighlightNumber[ heroIndex ] ).style.opacity = "1.0";
	}*/
	
	//document.getElementById( "wtfTEST" ).innerHTML = blockList;
}

function heroesAffectedByTalent( talent ){
	return genericTalentList[talent];
}


function setAllHeroOpacity( newOpacity ){
	var heroArray = document.getElementsByClassName( "heroFrame" );
	var j;
	var i;
	
	for(j=(heroArray.length-1),i=0; j >= i; i++ ){
		heroArray[i].style.opacity = newOpacity;
	}
}
	