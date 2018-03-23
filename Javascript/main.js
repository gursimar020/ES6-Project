let nameN = [];
let rollNo = [];
let passoutYear = [];
let stream = [];
let index=0,pos=0;

$(document).ready(function(){
    $("#editButton").click(function(){
        editDetails();
    });

    $("#submit_button").click(function(){
        submitDetails();
    });

    $("#deleteButton").click(function() {
        deleteDetails();
    });

    $("#submitModal").click(function(){
        editSubmit();
    });
});

function submitDetails(){
  var correct_way = /^[A-Za-z]+$/;

    nameN.push(document.getElementById("formName").value);
    rollNo.push(document.getElementById("formRollNO").value);
    passoutYear.push(document.getElementById("formPassoutYear").value);
    stream.push(document.getElementById("formStream").value);


<!-- Validations for name -->
    if(nameN == "") {
      alert("Name Can't be Empty");
      return false;
    }

<!-- end of Validations for name-->

<!-- Validations for rollno -->
    if(rollNo == "") {
      alert("Roll Can't be Empty");
      return false;
    }
<!-- end of Validations for rollno-->

<!-- Validations for year -->
        if(passoutYear == "") {
        alert("Year Can't be Empty");
          return false;
        }
<!-- end of Validations for year-->

<!-- Validations for stream -->
        if(stream == "") {
            alert("Stream Can't be Empty");
              return false;
        }
<!-- end of Validations for year-->

    let tableBody = document.getElementById("tableBody");

    let nodeCheck = document.createElement("input");
    nodeCheck.type = "checkbox";
    nodeCheck.classname = "ch";
    nodeCheck.name = "box"

    let tdStudentName = document.createElement("td");
    let tdStudentRollNO = document.createElement("td");
    let tdStream = document.createElement("td");
    let tdPassoutYear = document.createElement("td");;
    let tdSelect = document.createElement("td");
    let tr = document.createElement("tr");
    tr.name = "rows";

    tdStudentName.appendChild(document.createTextNode(nameN[index]));
    tr.appendChild(tdStudentName);
    tdStudentRollNO.appendChild(document.createTextNode(rollNo[index]));
    tr.appendChild(tdStudentRollNO);
    tdPassoutYear.appendChild(document.createTextNode(passoutYear[index]));
    tr.appendChild(tdPassoutYear);
    tdStream.appendChild(document.createTextNode(stream[index]));
    tr.appendChild(tdStream);
    tdSelect.appendChild(nodeCheck);
    tr.appendChild(tdSelect);
    tableBody.appendChild(tr);
    index++;
}

function editDetails(){
    let ch = document.getElementsByName("box");
    let count = 0;

    for (let x=0; x<ch.length; x++){
        if(ch[x].checked){
            count++;
            pos = x;
        }
    }

    if (count > 1){
        alert("Only select single row to edit.");
    } else if (count < 1) {
        alert("Select a row to edit");
    } else {
        $("#editDataModal").modal();
        $("#StudentName").val(nameN[pos]);
        $("#StudentRollNo").val(rollNo[pos]);
        $("#PassoutYear").val(passoutYear[pos]);
        $("#StreamDetails").val(stream[pos]);
    }
}

function editSubmit(){
    let table = $("#tableBody > tr");
    console.log(table);
    let data = table[pos].childNodes;

    data[0].innerHTML = nameN[pos] = $("#StudentName").val();
    data[1].innerHTML = rollNo[pos] = $("#StudentRollNo").val();
    data[2].innerHTML = passoutYear[pos] = $("#PassoutYear").val();
    data[3].innerHTML = stream[pos] = $("#StreamDetails").val();
    $("#editDataModal").modal("hide");
}

function deleteDetails() {
    let table_Body = document.getElementById("tableBody");
    let ch = document.getElementsByName("box");
    let count = 0;

    for (let x=0;x<ch.length; x++){
        if(ch[x].checked){
            table_Body.deleteRow(x);
            nameN.splice(x,1);
            rollNo.splice(x,1);
            passoutYear.splice(x,1);
            stream.splice(x,1);
            x=-1;
            count++;
        }
    }
    index -= count;
}
