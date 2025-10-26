var airportsList;
/************************************/

function load_airports_list() {
  airportsList = JSON.parse(airport_list);

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
}

function hide_airport_search_box() {
  aui_hide_external_search_box();
}