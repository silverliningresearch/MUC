var airportsList= [];
var arrivalFlightList = [];

/************************************/

function load_arrival_flight_list_for_airport_airline_search() {
  flightRawList = JSON.parse(MUC_arrivals_Flight_List_Raw);
  arrivalFlightList = [];
  arrivalFlightList.length = 0;

  tmp_location = 1;
  if (api.fn.answers().Interview_location_AN_detail == 6 ) // T2
  {
    tmp_location = 2;
  }  

  // For AN we should only have the flight numbers, airlines and destinations according to the flight program and the terminal location
  for (i = 0; i < flightRawList.length; i++) {
    var flight = flightRawList[i];
    if (
        (
          //(flight.Date == getToDate()) //today flight
          (tmp_location === flight.TER)
        )
        )
    {
      {
        var item  = flightRawList[i];

        arrivalFlightList.push(item);
      }
    }
  }

  aui_init_search_list(arrivalFlightList);
}

function load_airports_list() {
  load_arrival_flight_list_for_airport_airline_search();

  airportsList = arrivalFlightList.filter((currentObject, index, self) =>
  // Check if the current object's index is the first time this 'id' appears.
  // `findIndex` finds the index of the first element that satisfies the condition.
    index === self.findIndex((t) => (
      t.Dest === currentObject.Dest
    ))
  );

  var language = api.fn.getCurrentLanguage(); 
  for (i = 0; i < airportsList.length; i++) {
    if (language=='de')
    {
      airportsList[i].Show = airportsList[i].DestNameDE;
    }
    else{
      airportsList[i].Show = airportsList[i].DestName;
    }
  }

  aui_init_search_list(airportsList);
  console.log("load_airport_code done!");
}

function save_airport_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  api.fn.answers({Arrival_Airport:   value.Show.substring(0,3)}); 
  api.fn.answers({Arrival_Airport_Name:   value.Show}); 
  api.fn.answers({Arrival_Airport_Clean_Unclean:   value.UKZ}); 
  api.fn.answers({Arrival_Airport_Schegen:   value.Sch}); 
  api.fn.answers({Arrival_Airport_Country:   value.CC}); 

  console.log("save_airport_value  done!");
}

function show_airport_search_box(question) {
  load_airports_list();
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
}

function hide_airport_search_box() {
  aui_hide_external_search_box();
}