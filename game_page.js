function send() {
    
    number_1 = document.getElementById("No_1_input").value;
    number_2 = document.getElementById("No_2_input").value;
    
    actual_ans = parseInt(number_1) * parseInt(number_2);

    
    question_word = "<h4>" + number_1 + "X" + number_2 +"</h4>" 
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("No_1_input").value = "";
    document.getElementById("No_2_input").value = "";

}