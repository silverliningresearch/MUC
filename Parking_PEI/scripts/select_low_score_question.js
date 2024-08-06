let Q10_A_answers = [
  [1, 10],
  [2, 10],
  [3, 10],
  [4, 10],
  [5, 10],
  [6, 10],
  [7, 10],  
];
let  selected_items = [];

function get_the_minimum(arr)
{
  console.log("input: ", arr);

  selected_items[0] = arr[0][0];

  var max = 0;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i][1] == arr[i+1][1]) {
      selected_items[i+1] = arr[i+1][0];
      max = i+1;
    }
    else break;
  }
  console.log("selected_items: ", selected_items); 

  var selected_index = Math.floor(Math.random() * (max)) 
  console.log("selected index: ", selected_index); 
  return (selected_items[selected_index]);
}
function search_Q10_A()
{
  Q10_A_answers[0][1] = api.fn.answers().Q10_A_1;
  Q10_A_answers[1][1] = api.fn.answers().Q10_A_2;
  Q10_A_answers[2][1] = api.fn.answers().Q10_A_3;
  Q10_A_answers[3][1] = api.fn.answers().Q10_A_4;
  Q10_A_answers[4][1] = api.fn.answers().Q10_A_5;
  Q10_A_answers[5][1] = api.fn.answers().Q10_A_6;
  Q10_A_answers[6][1] = api.fn.answers().Q10_A_7;

  arr = Q10_A_answers.sort((a, b) => a[1] - b[1]);
  
  var selected_item = get_the_minimum(arr);
  
  console.log("selected item: ", selected_item); 
  api.fn.answers({Q10_A_reason_selected_item:  selected_item});


}
