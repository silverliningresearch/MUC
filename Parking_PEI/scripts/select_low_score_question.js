let selected_items = [];

function get_the_minimum(arr)
{
  //sort
  arr = arr.sort((a, b) => a[1] - b[1]);
  
  console.log("input - sorted: ", arr);

  selected_items = [];
  selected_items[0] = arr[0][0];

  //identify the candidate list
  var max = 0;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i][1] == arr[i+1][1]) {
      selected_items[i+1] = arr[i+1][0];
      max = i+1;
    }
    else break;
  }

  var random = Math.random();
  var random_round = Math.floor(random*(max+1)); // Returns a random integer from 0 to max index + 1:
  console.log("selected_items: ", selected_items); 

  console.log("max: ", max); 
  console.log("random: ", random); 
  console.log("random_round: ", random_round); 

  var selected_index = random_round;
  console.log("selected index: ", selected_index); 

  var result = 0;
  if (arr[selected_index][1] < 4) result = arr[selected_index][0];

  console.log("result: ", result); 

  return (result);
}

function search_Q10_A()
{
  let Q10_A_answers = [
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],  
  ];
  if (api.fn.answers().Q10_A_1) {
    Q10_A_answers[0][1] = api.fn.answers().Q10_A_1;
  }
  else 
  {
    Q10_A_answers[0][1] = 10;
  }
  Q10_A_answers[1][1] = api.fn.answers().Q10_A_2;
  Q10_A_answers[2][1] = api.fn.answers().Q10_A_3;
  Q10_A_answers[3][1] = api.fn.answers().Q10_A_4;
  Q10_A_answers[4][1] = api.fn.answers().Q10_A_5;
  Q10_A_answers[5][1] = api.fn.answers().Q10_A_6;
  Q10_A_answers[6][1] = api.fn.answers().Q10_A_7;

  console.log("Q10_A_answers: ", Q10_A_answers); 

  var selected_item = get_the_minimum(Q10_A_answers);
  
  console.log("selected item: ", selected_item); 

  api.fn.answers({Q10_A_reason_selected_item:  selected_item});
}

function search_Q10_B()
{
  let Q10_B_answers = [
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],  
  ];

  //Q10_B_1: vfm, not use
  //if (api.fn.answers().Q10_B_1) Q10_B_answers[0][1] = api.fn.answers().Q10_B_1;
  if (api.fn.answers().Q10_B_2) Q10_B_answers[1][1] = api.fn.answers().Q10_B_2;
  if (api.fn.answers().Q10_B_3) Q10_B_answers[2][1] = api.fn.answers().Q10_B_3;
  if (api.fn.answers().Q10_B_4) Q10_B_answers[3][1] = api.fn.answers().Q10_B_4;
  if (api.fn.answers().Q10_B_5) Q10_B_answers[4][1] = api.fn.answers().Q10_B_5;
  if (api.fn.answers().Q10_B_6) Q10_B_answers[5][1] = api.fn.answers().Q10_B_6;
  if (api.fn.answers().Q10_B_6) Q10_B_answers[6][1] = api.fn.answers().Q10_B_7;

  console.log("Q10_B_answers: ", Q10_B_answers); 

  var selected_item = get_the_minimum(Q10_B_answers);
  
  console.log("selected item: ", selected_item); 
  api.fn.answers({Q10_B_reason_selected_item:  selected_item});
}

function search_Q13()
{
  let Q13_answers = [
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10]
  ];

  if (api.fn.answers().Q13_1) Q13_answers[0][1] = api.fn.answers().Q13_1;
  if (api.fn.answers().Q13_2) Q13_answers[1][1] = api.fn.answers().Q13_2;
  if (api.fn.answers().Q13_3) Q13_answers[2][1] = api.fn.answers().Q13_3;
  if (api.fn.answers().Q13_4) Q13_answers[3][1] = api.fn.answers().Q13_4;
  if (api.fn.answers().Q13_5) Q13_answers[4][1] = api.fn.answers().Q13_5;
  //if (api.fn.answers().Q13_6) Q13_answers[5][1] = api.fn.answers().Q13_6;

  if (api.fn.answers().Q13_7) Q13_answers[6][1] = api.fn.answers().Q13_7;
  //if (api.fn.answers().Q13_8) Q13_answers[7][1] = api.fn.answers().Q13_8;
  if (api.fn.answers().Q13_9) Q13_answers[8][1] = api.fn.answers().Q13_9;
  //if (api.fn.answers().Q13_10) Q13_answers[9][1] = api.fn.answers().Q13_10;
  if (api.fn.answers().Q13_11) Q13_answers[10][1] = api.fn.answers().Q13_11;
  if (api.fn.answers().Q13_12) Q13_answers[11][1] = api.fn.answers().Q13_12;
  //if (api.fn.answers().Q13_13) Q13_answers[12][1] = api.fn.answers().Q13_13;

  console.log("Q13_answers: ", Q13_answers); 

  var selected_item = get_the_minimum(Q13_answers);
  
  console.log("selected item: ", selected_item); 
  api.fn.answers({Q13_reason_selected_item:  selected_item});
}