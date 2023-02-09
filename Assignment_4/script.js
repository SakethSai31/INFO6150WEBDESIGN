
    var form = document.getElementById("myform");
    form.addEventListener("submit", submitted);

    var validName = false;
    var validPhone = false;
    var validEmail = false;
    var validZip = false;
    var validlastName = false;
    var validCity = false;
    var validState = false;
    var validSource = false;

    var n = 1;
    var x = 0;

    // regex checks variables
    var regExName = /^[a-zA-Z]+$/;
    // var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
    var regExEmails = /([a-z0-9]+@northeastern+\.edu)/;
    var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExZip = /^\d{5}$/;



    var firstName = document.getElementById("firstName");
    firstName.addEventListener("input", validate);

    var lastName = document.getElementById("lastName");
    lastName.addEventListener("input", validate);

    var emailId = document.getElementById("emailId");
    emailId.addEventListener("input", validate);

    var phoneNumber = document.getElementById("phoneNumber");
    phoneNumber.addEventListener("input", validate);

    var zipcode = document.getElementById("zipcode");
    zipcode.addEventListener("input", validate);

    var city = document.getElementById("city");
    city.addEventListener("input", validate);

    var state = document.getElementById("state");
    state.addEventListener("input", validate);

    var source = document.querySelector("input[name=source]");
    source.addEventListener('change', validateCheckBox);


    function validateCheckBox() {
        var checkboxs = document.getElementsByName("source");
        for (var i = 0, l = checkboxs.length; i < l; i++) {
            if (checkboxs[i].checked) {
                validSource = true;
                break;
            }
            else {
                validSource = false;
            }
        }
    }


    function validate(e) {
        var value = e.target.value;
        var type = this.id;
        var em = "error_" + type

        switch (type) {
            case "firstName":
                if (!value.trim().match(regExName)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validName = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validName = true;
                }
                break;
            case "lastName":
                if (!value.trim().match(regExName)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validlastName = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validlastName = true;
                }
                break;
            case "emailId":
                if (!value.trim().match(regExEmails)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validEmail = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validEmail = true;
                }
                break;
            case "phoneNumber":
                if (!value.trim().match(regExPhone)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validPhone = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validPhone = true;
                }
                break;
            case "zipcode":
                if (!value.trim().match(regExZip)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validZip = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    if (value.length==5){
                    validZip = true;}else{
                        validZip=false;
                    }
                }
                break;
            case "city":
                if (!value.trim().match(regExName)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validCity = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validCity = true;
                }
                break;
            case "state":
                if (!value.trim().match(regExName)) {
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validState = false;
                }
                else {
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validState = true;
                }
        }
    }

    const selectDrinks = document.getElementById("drinks");

    selectDrinks.addEventListener('change', (event) => {
        const result = selectDrinks.value;
        document.getElementById("select_latte").style.display = "none";
        document.getElementById("select_cappuccino").style.display = "none";
        document.getElementById("select_mocha").style.display = "none";
        document.getElementById("select_irish").style.display = "none";
        document.getElementById("select_espresso").style.display = "none";
        switch (result) {
            case "1":
                document.getElementById("select_latte").style.display = "block";
                break;
            case "2":
                document.getElementById("select_cappuccino").style.display = "block";
                break;
            case "3":
                document.getElementById("select_espresso").style.display = "block";
                break;
            case "4":
                document.getElementById("select_mocha").style.display = "block";
                break;
            case "5":
                document.getElementById("select_irish").style.display = "block";
                break;
        }
    });

    var latte = document.getElementById("latte");
    latte.addEventListener('change', addTxtbox);

    cappucino = document.getElementById("cappucino");
    cappucino.addEventListener('change', addTxtbox);

    var espresso = document.getElementById("espresso");
    espresso.addEventListener('change', addTxtbox);

    var mocha = document.getElementById("mocha");
    mocha.addEventListener('change', addTxtbox);

    var irish = document.getElementById("irish");
    irish.addEventListener('change', addTxtbox);



    function addTxtbox(e) {
        if (this.checked) {

            document.getElementById("additional_info_label").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
            //document.getElementById("additional_info_label").style.display = "none";
        }
    }

    function onClickCheckCappucino(e) {
        var checkBox = document.getElementById("cappucino"); 

        if (checkBox.checked == true) {
            document.getElementById("additional_info").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
        }
    }

    function onClickCheckEspresso(e) {
        var checkBox = document.getElementById("espresso"); 

        if (checkBox.checked == true) {
            document.getElementById("additional_info").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
        }
    }

    function onClickCheckLatte(e) {
        var checkBox = document.getElementById("latte"); 

        if (checkBox.checked == true) {
            document.getElementById("additional_info").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
        }
    }
    function onClickCheckMocha(e) {
        var checkBox = document.getElementById("mocha"); 

        if (checkBox.checked == true) {
            document.getElementById("additional_info").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
        }
    }
    function onClickCheckIrish(e) {
        var checkBox = document.getElementById("irish"); 

        if (checkBox.checked == true) {
            document.getElementById("additional_info").style.display = "block";
            document.getElementById("additional_info").required = true;
        } else {
            document.getElementById("additional_info").style.display = "none";
        }
    }


    function submitted(e) {
        e.preventDefault();
        if (validEmail && validName && validPhone && validZip && validlastName && validCity && validState && validSource) {

            var list1 = [];
            var list2 = [];
            var list3 = [];
            var list4 = [];
            var list5 = [];
            var list6 = [];
            var list7 = [];
            var list8 = [];
            var list9 = [];
            var list10 = [];
            var list11 = [];
            var list12 = [];
            var list13 = [];
            var list14 = [];
            var list15 = [];


            var AddRown = document.getElementById('myTable');
            var NewRow = AddRown.insertRow(n);

            list1[x] = document.querySelector('input[name="title"]:checked').value;
            list2[x] = document.getElementById("firstName").value;
            list3[x] = document.getElementById("lastName").value;
            list4[x] = document.getElementById("emailId").value;
            list5[x] = document.getElementById("phoneNumber").value;
            list6[x] = document.getElementById("streetAddress1").value;
            list7[x] = document.getElementById("streetAddress2").value;
            list8[x] = document.getElementById("city").value;
            list9[x] = document.getElementById("state").value;
            list10[x] = document.getElementById("zipcode").value;
            list12[x] = document.getElementById("comments").value;
            list15[x] = document.getElementById("additional_info").value;

            var sourcelist = [];
            let checkboxes = document.getElementsByName('source');
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    sourcelist.push(checkboxes[i].value);
                }
            }
            list11[x] = sourcelist.toString();

            var drinks = document.getElementById("drinks");
            list13[x] = drinks.options[drinks.selectedIndex].text;


            var selectedDrink = list13[x];
            switch (selectedDrink) {
                case "Latte":
                    list14[x] = "$3.99";
                    break;
                case "Cappucino":
                    list14[x] = "$4.99";
                    break;
                case "Espresso":
                    list14[x] = "$5.99";
                    break;
                case "Mocha":
                    list14[x] = "$6.99";
                    break;
                case "Irish":
                    list14[x] = "$7.99";
                    break;
            }




            var cel1 = NewRow.insertCell(0);
            var cel2 = NewRow.insertCell(1);
            var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);
            var cel8 = NewRow.insertCell(7);
            var cel9 = NewRow.insertCell(8);
            var cel10 = NewRow.insertCell(9);
            var cel11 = NewRow.insertCell(10);
            var cel12 = NewRow.insertCell(11);
            var cel13 = NewRow.insertCell(12);
            var cel14 = NewRow.insertCell(13);
            var cel15 = NewRow.insertCell(14);

            cel1.innerHTML = list1[x];
            cel2.innerHTML = list2[x];
            cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            cel8.innerHTML = list8[x];
            cel9.innerHTML = list9[x];
            cel10.innerHTML = list10[x];
            cel11.innerHTML = list11[x];
            cel12.innerHTML = list12[x];
            cel13.innerHTML = list13[x];
            cel14.innerHTML = list14[x];
            cel15.innerHTML = list15[x];

            n++;
            x++;
            form.reset();
            document.getElementById("select_latte").style.display = "block";
            document.getElementById("additional_info").style.display = "none";
            document.getElementById("select_cappuccino").style.display = "none";
            document.getElementById("select_espresso").style.display = "none";
            document.getElementById("select_mocha").style.display = "none";
            document.getElementById("select_irish").style.display = "none";
        } else {
            alert("Please enter proper values");
        }
    }