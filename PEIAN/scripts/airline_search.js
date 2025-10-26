var airlineList;

/************************************/
function load_airline_list() {
  flightRawList = JSON.parse(MUC_arrivals_Flight_List_Raw);
  flightList = [];
  flightList.length = 0;
  flightShortList = [];
  flightShortList.length = 0;

  for (i = 0; i < flightRawList.length; i++) {
    var flight = flightRawList[i];
    if (
        ((flight.Date == getToDate() || (flight.Date == getTomorrow())) && notDeparted_flight_search(flight.Date, flight.Time)) //today flight && departure
        )
    {
      {
        var item  = flightRawList[i];
        var Via = "";
        var ViaName = "";

        if (  flightRawList[i].Next && flightRawList[i].Next !="" && flightRawList[i].Next != flightRawList[i].Dest) {
          Via = '"Via"' + ":" + '"' +  flightRawList[i].Next + '", ';
          ViaName = '"ViaName"' + ":" + '"' +  flightRawList[i].NextName + '", ';
        }

        var Show = flightRawList[i].Flight + " (" 
        Show += flightRawList[i].Time + " to " + flightRawList[i].DestName ;
        if (flightRawList[i].Next && flightRawList[i].Next !="" && flightRawList[i].Next != flightRawList[i].Dest) {
          Show += " via " +  flightRawList[i].Next ;
        }
        Show +=")";

        item.Show = Show; 
        item.Via = Via; 
        item.ViaName = ViaName;
      
        flightList.push(item);
      }
    }
  }

  aui_init_search_list(flightList);
  console.log("Load flight list done!");
}

function save_airline_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  api.fn.answers({flight_show:  value.Show});
  api.fn.answers({terminal: value.TER});
  api.fn.answers({flight_number:   value.Flight});

  api.fn.answers({airport_code:   value.Dest});
  api.fn.answers({airport_name: value.DestName});
  api.fn.answers({airline_code:   value.AirlineCode}); //airline code
  api.fn.answers({airline_name:   value.Airline});  //airline name

  api.fn.answers({Dest_Airport_Schegen:  value.Sch}); //Schegen
  api.fn.answers({Dest_Airport_Clean_Unclean:  value.UKZ}); 
  api.fn.answers({Dest_Airport_Country:  value.CC}); 


  console.log("save flight  done!");
}

function show_airline_search_box(question) {
  load_flight_list();
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
}

function hide_airline_search_box() {
  aui_hide_external_search_box();
}