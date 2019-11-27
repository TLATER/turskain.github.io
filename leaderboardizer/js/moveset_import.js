function placeBsBtn() {
	var importBtn = "<button id='import' class='bs-btn bs-btn-default'>Import</button>";
	$("#import-1_wrapper").append(importBtn);

	$("#import.bs-btn").click(function () {
		var pokes = document.getElementsByClassName("import-team-text")[0].value;
    // var pokes = document.getElementsByClassName("import-team-text").value;
    // var Leder = $.csv.toArrays(pokes);
    //console.log(pokes);
		addSets(pokes);
	});


}



function serialize(array, separator) {
	var text = "";
	for (var i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}


function addSets(pokes) {
	//var rows = pokes.split("\n");
	var currentRow;
	var currentPoke;
	var addedpokes = 0;
	
  //var pokes;
  var i;
  var j;
  var FPlacement = 0;
  var UPlacement = 0;
  var APlacement = 0;

  var FPlacementVisual = 0;
  var UPlacementVisual = 0;
  var APlacementVisual = 0;

  var FPlacementVisual = 0;
  var UPlacementVisual = 0;
  var Leder = $.csv.toArrays(pokes);
//var pokes = document.getElementsByClassName("import-team-text")[0].value;
  //console.log(pokes);
  //console.log(Leder);
  
  var Ffullout = [];
  var Ufullout = [];
  var Afullout = [];
  //loop the outer array
  if ( Leder[0][0] != "Player Name" ) {
    alert("Invalid data in input field, copypaste the spreadsheet after downloading it as .csv as-is, including the sheet's header");
  }
  for (var i = 1; i < Leder.length; i++) {
     var streakData = new Object(); 
     var streakDataPrevious = new Object(); 
     for ( var itr in Leder[i] ) {
       streakDataPrevious[String(Leder[0][itr])] = Leder[i-1][itr];
       streakData[String(Leder[0][itr])] = Leder[i][itr];
     }


     var teamPokes = [];


    if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
    }

    //console.log(parseInt(pokeAmount))


     var url1Text = streakData["Team Name"];

    var urlsBbcode = ""

      for ( var itr = 2; itr < 7; itr++ ) {
        var curUrl = streakData["Extra URL " + String(itr)];
        var curUrlText = streakData["Extra URL " + String(itr) + " Text"];
        console.log(curUrl);
        if ( curUrl === "" ) {
          break
        } else {
          urlsBbcode += ", [url=" + curUrl + "]" + curUrlText + "[/url]";
        }
      }
     

     var finish = "";

     switch (finish) {
       case "F":
         if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
           var FPlacementVisual = FPlacementVisual + 0;
           var FPlacementCur_bbcoded = "   ";
         } else {
         var FPlacementVisual = FPlacementVisual + 1;
         var FPlacementCur_bbcoded = "#" + String(FPlacementVisual) + ". ";
         }
         var FPlacement = FPlacement + 1;
         var Fout_bbcode = FPlacementCur_bbcoded + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"
         Ffullout[FPlacement] = Fout_bbcode;
         break;

       case "U":
         if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
           var UPlacementVisual = UPlacementVisual + 0;
           var UPlacementCur_bbcoded = "   ";
         } else {
         var UPlacementVisual = UPlacementVisual + 1;
         var UPlacementCur_bbcoded = "#" + String(UPlacementVisual) + ". ";
         }
         var UPlacement = UPlacement + 1;
         var Uout_bbcode = UPlacementCur_bbcoded + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]" 
         Ufullout[UPlacement] = Uout_bbcode;
         break;
     }
     
     if ( streakDataPrevious["User ID"] === streakData["User ID"] ) {
       var APlacementVisual = APlacementVisual + 0;
       var APlacementCur_bbcoded = "   ";
     } else {
     var APlacementVisual = APlacementVisual + 1;
     if ( String(APlacementVisual).length === 1 ) { APlacementVisual2 = "0" + String(APlacementVisual); } else { APlacementVisual2 = APlacementVisual };
     var APlacementCur_bbcoded = "#" + String(APlacementVisual2) + ". ";
     }


     if ( streakData["Ongoing"] === "Yes" ) {
       var OngoingStatusBbcode = "[color=#bb0000]*[/color]";
     } else {
       var OngoingStatusBbcode = "";
     };



     var APlacement = APlacement + 1;
     var Aout_bbcode = APlacementCur_bbcoded;
     Aout_bbcode += "[b][user=" + streakData["User ID"] + "]" + streakData["Player Name"] + "[/user][/b]"
     Aout_bbcode += "([b]" + streakData["Streak Length"] + OngoingStatusBbcode + "[/b])" + " - "
     Aout_bbcode += "[url=" + streakData["Team URL"] + "]" + streakData["Team Name"] + "[/url]"
     Aout_bbcode += urlsBbcode;
     Afullout[APlacement] = Aout_bbcode;


     //var url1Text = teamPoke1 + " / " + teamPoke2 + " / " + teamPoke3 + " / " + teamPoke4;
    //console.log(userName, userId, streakLen, url1, teamPoke1, teamPoke2, teamPoke3, teamPoke4, streakFlags, url2, url2Text, url3, url3Text, url1Text);
    //var TestingTesting = userName + userId + streakLen + url1 + teamPoke1 + teamPoke2 + teamPoke3 + teamPoke4 + streakFlags + url2 + url2Text + url3 + url3Text + url1Text;
    //console.log(TestingTesting);

     //document.getElementsByClassName("leder-result-text")[0].value= TestingTesting;
     // loop the inner array
     //for (var j = 0; j < innerArrayLength; j++) {
     //console.log('[' + i + ',' + j + '] = ' + Leder[i][j]);
     
   }
 // output the list generated into the fullout array to output field 
     document.getElementsByClassName("leder-result-text-F")[0].value= Ffullout.join("\n");
     document.getElementsByClassName("leder-result-text-U")[0].value= Ufullout.join("\n");
     document.getElementsByClassName("leder-result-text-A")[0].value= Afullout.join("\n");
  }



$(document).ready(function () {
	var customSets;
  var Leder;
	placeBsBtn();
	//if (localStorage.customsets) {
	//	customSets = JSON.parse(localStorage.customsets);
	//	updateDex(customSets);
	//	$(bothPokemon("#importedSetsOptions")).css("display", "inline");
	//}// else {
	//	loadDefaultLists();
	//}
});
