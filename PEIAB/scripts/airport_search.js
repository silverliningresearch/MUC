var airportsList;
/************************************/

function load_airports_list() {
  load_flight_list();

  airportsList = flightList.filter((currentObject, index, self) =>
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

  api.fn.answers({Arrival_Airport:   value.Show}); 
  api.fn.answers({Arrival_Airport_Clean_Unclean:   value.UKZ}); 
  api.fn.answers({Arrival_Airport_Schegen:   value.Sch}); 
  api.fn.answers({Arrival_Airport_Country:   value.CC}); 

  console.log("save_airport_value  done!");
}

function show_airport_search_box(question) {
  load_airports_list();
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);

  api.fn.answers({Arrival_Airport:   ""}); 
  api.fn.answers({Arrival_Airport_Clean_Unclean:   "C"}); 
  api.fn.answers({Arrival_Airport_Schegen:   "S"});
  $('.rt-btn.rt-btn-next').show(); 

}

function hide_airport_search_box() {
  aui_hide_external_search_box();
}