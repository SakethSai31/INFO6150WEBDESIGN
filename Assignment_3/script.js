window.addEventListener('load', (event) => {
  var submit = document.getElementById("button")
  submit.style.backgroundColor = "#808080"
  submit.style.borderColor = "#808080"
  submit.disabled = true
  var dropdownTextArea = document.querySelectorAll(".dropDownTextArea")
  dropdownTextArea.forEach(hide)
  var checkbox = document.querySelectorAll('[type="checkbox"]')
  checkbox.forEach(uncheck)
  var rows = Array.from(document.getElementsByTagName("tr"))
  rows.forEach(ChangetheBackgroundColor)
  var columnDelete = Array.from(document.querySelectorAll(".delete"))
  columnDelete.forEach(hide)
  var columnEdit = Array.from(document.querySelectorAll(".edit"))
  columnEdit.forEach(hide);
});


function hide(element) {
  element.style.display = "none"
}

function uncheck(element) {
  element.checked = false
}

function ChangetheBackgroundColor(element) {
  element.style.backgroundColor = "#ffffff"
}

//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var rows = document.getElementsByTagName("tr");
var rowCount = rows.length - 1;
var x = 0;         
var studentcount = 3;
var DelBtncel9;
var EditBtncel9;
var x;

add = document.getElementById('add');
add.addEventListener('click', addRow);

function addRow() {

  var myTable = document.getElementById('myTable');
  var newRow = myTable.insertRow();

  var list2 = [];
  var list3 = [];
  var list4 = [];
  var list5 = [];
  var list6 = [];
  var list7 = [];
  var list8 = [];

  list2[x] = `Student ${studentcount + 1}`
  list3[x] = `Teacher ${studentcount + 1}`;
  list4[x] = "Approved";
  list5[x] = "Fall";
  list6[x] = "TA";
  list7[x] = "12345";
  list8[x] = "100%";

  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  var cel8 = newRow.insertCell(7);
  var DelBtncel9 = newRow.insertCell(8);
  var EditBtncel9 = newRow.insertCell(9);


  var checkelement0 = document.createElement("input");
  checkelement0.type = "checkbox";
  checkelement0.setAttribute("id", `check${studentcount + 1}`);
  checkelement0.setAttribute("class", "check");
  checkelement0.addEventListener('click', onCheck.bind(this, checkelement0));
  cel1.appendChild(checkelement0);

  var br1 = document.createElement("br");
  cel1.appendChild(br1);
  var br2 = document.createElement("br");
  cel1.appendChild(br2);

  var dropdownimgelemnt1 = document.createElement("img");
  dropdownimgelemnt1.src = "down.png";
  dropdownimgelemnt1.style.width = "25px";
  dropdownimgelemnt1.setAttribute("id", `image${studentcount + 1}`);
  dropdownimgelemnt1.addEventListener('click', onImageClick.bind(this, dropdownimgelemnt1));
  cel1.appendChild(dropdownimgelemnt1);



  var DeleteBtn = document.createElement("BUTTON");
  DeleteBtn.innerHTML = "Delete";
  DeleteBtn.setAttribute("id", `delete${studentcount + 1}`);
  DeleteBtn.setAttribute("class", "delete");
  DeleteBtn.addEventListener('click', onDeleteRow.bind(this, DeleteBtn));
  DelBtncel9.appendChild(DeleteBtn);
  DelBtncel9.setAttribute("id", `deleteRow${studentcount + 1}`);


  var EditBtn = document.createElement("BUTTON");
  EditBtn.innerHTML = "Edit";
  EditBtn.onclick = onEdit;
  EditBtn.setAttribute("id", `edit${studentcount + 1}`);
  EditBtn.setAttribute("class", "edit");
  EditBtncel9.appendChild(EditBtn);
  EditBtncel9.setAttribute("id", `editRow${studentcount + 1}`)


  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];
 
  var newRow2 = myTable.insertRow();
  newRow2.setAttribute("id",`dropdown${studentcount + 1}`);
  newRow2.setAttribute("class","dropDownTextArea");
  var cel1 = newRow2.insertCell(0);
  cel1.colSpan = "8"
  var dropdownimgelemnt11 = document.createElement("tr");
  dropdownimgelemnt11.innerHTML = "<div>Advisor:<br /><br />  Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></div>"
  cel1.appendChild(dropdownimgelemnt11);
  alert("Record added Successfully!");
  document.getElementById(`deleteRow${studentcount + 1}`).style.display = "none";
  document.getElementById(`editRow${studentcount + 1}`).style.display = "none";
  document.getElementById(`dropdown${studentcount + 1}`).style.display = "none";
  x++;
  studentcount++;
  rowCount + 2;

}

function onImageClick(e) {
  var thestring = e.id;
  var thenum = thestring.replace(/^\D+/g, '');
  imageId = `image${thenum}`;
  dropdownId = `dropdown${thenum}`;
  if (document.getElementById(dropdownId).style.display === "none") {
    document.getElementById(dropdownId).style.display = "table-row";
  } else {
    document.getElementById(dropdownId).style.display = "none";
  }

}

const onDeleteRow = (e) => {
  var thestring = e.id;
  var thenum = thestring.replace(/^\D+/g, '');
  var abc = `dropdown${thenum}`;
  var checkboxX=`check${thenum}`
  var i = e.parentElement.parentElement.rowIndex;
  var checkBoxId=document.getElementById(checkboxX);
  console.log(checkBoxId)
  checkBoxId.checked=false;
  onCheck();
  document.getElementById("myTable").deleteRow([i]);
  var row1 = document.getElementById(abc);
  row1.parentNode.removeChild(row1);
  alert("Record deleted successfully");
  studentcount--;
}




function onEdit() {
  var editField = prompt("Edit the details");
}

const boxes = document.querySelectorAll('.check');
var submit = document.getElementById("button")
boxes.forEach(box => {
  box.addEventListener('change', onCheck)
});



const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', function onImageClick(event) {
    var thestring = image.id;
    var thenum = thestring.replace(/^\D+/g, '');
    imageId = `image${thenum}`;
    dropdownId = `dropdown${thenum}`
    if (document.getElementById(dropdownId).style.display === "none") {
      document.getElementById(dropdownId).style.display = "table-row";
    } else {
      document.getElementById(dropdownId).style.display = "none";
    }

  })
});



function onCheck(event) {
  console.log("HERE")
  let selectedRowCount = 0;
  const boxes = document.querySelectorAll('.check');
  boxes.forEach(box => {
    var thestring = box.id;
    var thenum = thestring.replace(/^\D+/g, '');
    var tdId = `deleteRow${thenum}`;
    var td2Id = `editRow${thenum}`;
    if (box.checked) {
      document.getElementById(tdId).style.display = "table-cell";
      document.getElementById(td2Id).style.display = "table-cell";
      document.getElementById("colHeaderDelete").style.display = "table-cell";
      document.getElementById("colHeaderEdit").style.display = "table-cell";
      box.parentElement.parentElement.style.backgroundColor = "yellow";
      selectedRowCount++;

    } else {
      box.parentElement.parentElement.style.backgroundColor = "white";
      document.getElementById(tdId).style.display = "none";
      document.getElementById(td2Id).style.display = "none";
    }
  })
  console.log(selectedRowCount)
  if (selectedRowCount == 0) {
    submit.style.backgroundColor = "#808080"
    submit.style.borderColor = "#808080"
    submit.disabled = true
    document.getElementById("colHeaderDelete").style.display = "none";
    document.getElementById("colHeaderEdit").style.display = "none";
  } else {
    submit.style.backgroundColor = "orange";
    submit.style.borderColor = "orange";
  }
};