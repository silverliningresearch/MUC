var airlineList = [];

/************************************/
function load_airline_list() {
  load_arrival_flight_list_for_airport_airline_search();

  airlineList = flightList.filter((currentObject, index, self) =>
  // Check if the current object's index is the first time this 'id' appears.
  // `findIndex` finds the index of the first element that satisfies the condition.
    index === self.findIndex((t) => (
      t.AirlineCode === currentObject.AirlineCode
    ))
  );

  for (i = 0; i < airlineList.length; i++) {
    airlineList[i].Show = airlineList[i].AirlineCode + " - " + airlineList[i].Airline;
  }

  aui_init_search_list(airlineList);
  console.log("Load flight list done!");
}

function save_airline_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  api.fn.answers({airline_code:   value.AirlineCode}); //airline code
  api.fn.answers({airline_name:   value.Airline});  //airline name

  console.log("save airline  done!");
}

function show_airline_search_box(question) {
  load_airline_list();
  
  //console.log("airlineList: ", airlineList);

  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
}

function hide_airline_search_box() {
  aui_hide_external_search_box();
}