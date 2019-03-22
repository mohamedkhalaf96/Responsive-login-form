
var hidden = document.getElementById("close") ,
    bar = document.getElementById("div1"),
    display = document.getElementById("menu"),
    data = document.getElementById("form1") ,
    t1 = document.getElementById("form2"),
    enter = document.getElementById("form3"),
    transform = document.getElementById("form4"),
	exit = document.getElementById("exit"),
	report = document.getElementById("form5"),
    link1 = document.getElementById("a1"),
    link2 = document.getElementById("a2"),
    link3 = document.getElementById("a3"),
    link4 = document.getElementById("a4"),
    link5 = document.getElementById("a5"),
	link6 = document.getElementById("a6");


hidden.onclick = function (){
    "use strict";
    bar.classList.toggle("animation");
    data.classList.toggle("form_disp");
    t1.classList.toggle("ticket_disp");
    transform.classList.toggle("transform_disp");
	exit.classList.toggle("exit_disp");
	enter.classList.toggle("enter_display");
	report.classList.toggle("report_disp");
};


display.onclick = function (){
    "use strict";
    bar.classList.toggle("animation");
    data.classList.toggle("form_disp");
    t1.classList.toggle("ticket_disp");
    transform.classList.toggle("transform_disp");
	exit.classList.toggle("exit_disp");
	enter.classList.toggle("enter_display");
	report.classList.toggle("report_disp");
};


link1.onclick = function (){
    "use strict";
    
    data.classList.remove("data2");
    t1.classList.add("ticket2");
    transform.classList.add("transform2");
	exit.classList.add("exit2");
    enter.classList.add("enter2");
	report.classList.add("report2");
    
};


link2.onclick = function (){
    "use strict";
    data.classList.add("data2");
    transform.classList.add("transform2");
	exit.classList.add("exit2");
    enter.classList.add("enter2");
	report.classList.add("report2");
    t1.classList.remove("ticket2");
    
    
};

link3.onclick = function (){
    
    "use strict";
    data.classList.add("data2");
    t1.classList.add("ticket2");
    transform.classList.add("transform2");
	exit.classList.add("exit2");
	report.classList.add("report2");
    enter.classList.remove("enter2");
    
};


link4.onclick = function(){
  
    "use strict";
    data.classList.add("data2");
    t1.classList.add("ticket2");
    enter.classList.add("enter2");
	report.classList.add("report2");
    transform.classList.remove("transform2");
	exit.classList.add("exit2");
    
};


link5.onclick = function(){
  
    "use strict";
    data.classList.add("data2");
    t1.classList.add("ticket2");
    enter.classList.add("enter2");
	transform.classList.add("transform2");
	exit.classList.add("exit2");
    report.classList.remove("report2");
    
};

link6.onclick = function(){
  
    "use strict";
    data.classList.add("data2");
    t1.classList.add("ticket2");
    enter.classList.add("enter2");
	transform.classList.add("transform2");
    report.classList.add("report2");
    exit.classList.remove("exit2");
	
};


// to print ticket

document.getElementById("print1").onclick = function(){
    "use strict";
    
    var p = window.open("ticket2.php");
    p.print();
    
};

document.getElementById("import").onclick = function(){
    "use strict";
    
    var p = window.open("ticket1.php");
    p.print();
    
};



// to get date and age from national ID

    document.getElementById("id").onchange =function(){
    
    var x= document.getElementById("id").value;
        
    var birthdate = document.getElementById("birth");
        
    var y,year,month,day,y1 ;
        
    var date,current,tonum2 ;
   
    if(x.length == 14){
        
        document.getElementById("check").classList.add("check1");
        document.getElementById("id").style.border = "";
        document.getElementById("gender").classList.remove("gender1");
        
        y= x.slice(0,1);
        year= x.slice(1,3);
        month = x.slice(3,5);
        day = x.slice(5,7);
    
     if(y=="2"){
         
          y1 = "19"+year;
          document.getElementById("birth").value= y1 +"-"+month+"-"+ day; 
    }
    else if(y=="3"){
        
          y1 = "20"+year;
          document.getElementById("birth").value= y1 +"-"+month+"-"+day;
    }
        
        date = new Date();
        current = date.getFullYear();
        
        tonum2 = parseInt(y1);

        document.getElementById("age").value = current - tonum2 ;
        
    }
    
    else{
            document.getElementById("check").classList.remove("check1");
            document.getElementById("id").style.border = "1px solid red";
            document.getElementById("gender").classList.add("gender1");
    } 
};



// search in name input  (form 1)

$(document).ready(function(){
    
    $('.search-box input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result");
        if(inputVal.length){
            $.get("backend-search.php", {term: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result p", function(){
        $(this).parents(".search-box").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser($(this).text());
        $(this).parent(".result").empty();
    });
});




// set data when enter patient name

function showUser(str) {
  
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
        
        if(dataObject.gender == 1)
			{
				$('#male').attr('checked',true);
			}
		else if(dataObject.gender == 2)
			{
				$('#female').attr('checked',true);
			}
        $('#patient_code').val(dataObject.patient_code);
        $('#status').val(dataObject.Marital_status);
        $('#id').val(dataObject.National_ID_number);
        $('.gover').val(dataObject.governorate);
        $('.district').val(dataObject.district);
        $('#village').val(dataObject.village);
        $('#address').val(dataObject.address);
        $('#addressfollow').val(dataObject.next_of_kin);
        $('.job').val(dataObject.job);
        $('.details').val(dataObject.job_details);
        $('#age').val(dataObject.age);
        $('#birth').val(dataObject.birth_date);
        $('#mob').val(dataObject.Mob);
        $('#diagnosis').val(dataObject.initial_diagnosis);
      
    }
  }
  xmlhttp.open("GET","getuser.php?q="+str,true);
  xmlhttp.send();
}



// search in code innput (form1)

$(document).ready(function(){
    
    $('.search-box1 input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result1");
        if(inputVal.length){
            $.get("backend-search1.php", {term1: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result1 p", function(){
        $(this).parents(".search-box1").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser1($(this).text());
        $(this).parent(".result1").empty();
    });
});




// set data when enter patient code

function showUser1(str1) {
  if (str1=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
        
        if(dataObject.gender == 1)
			{
				$('#male').attr('checked',true);
			}
		else if(dataObject.gender == 2)
			{
				$('#female').attr('checked',true);
			}
        $('#name1').val(dataObject.patient_name);
        $('#status').val(dataObject.Marital_status);
        $('#id').val(dataObject.National_ID_number);
        $('.gover').val(dataObject.governorate);
        $('.district').val(dataObject.district);
        $('#village').val(dataObject.village);
        $('#address').val(dataObject.address);
        $('#addressfollow').val(dataObject.next_of_kin);
        $('.job').val(dataObject.job);
        $('.details').val(dataObject.job_details);
        $('#age').val(dataObject.age);
        $('#birth').val(dataObject.birth_date);
        $('#mob').val(dataObject.Mob);
        $('#diagnosis').val(dataObject.initial_diagnosis);
      
    }
  }
  xmlhttp.open("GET","getuser1.php?q="+str1,true);
  xmlhttp.send();
}


// search in name input (Form 2)


$(document).ready(function(){
    
    $('.search-box2 input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result_form2");
        if(inputVal.length){
            $.get("backend-search2.php", {term: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result_form2 p", function(){
        $(this).parents(".search-box2").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser($(this).text());
        $(this).parent(".result_form2").empty();
    });
});


// search in code innput (form3)

$(document).ready(function(){
    
    $('.search_box_enter input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result_enter");
        if(inputVal.length){
            $.get("backend-search_enter_form.php", {term1: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result_enter p", function(){
        $(this).parents(".search_box_enter").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser12($(this).text());
        $(this).parent(".result_enter").empty();
    });
});




// search in name input (Form 4)


$(document).ready(function(){
    
    $('.search-box4 input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result_form4");
        if(inputVal.length){
            $.get("backend-search_transform.php", {term: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result_form4 p", function(){
        $(this).parents(".search-box4").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser3($(this).text());
        $(this).parent(".result_form4").empty();
    });
});




// search in code input (Form 4)


$(document).ready(function(){
    
    $('.search-box4_code input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result_form4_code");
        if(inputVal.length){
            $.get("backend-search_form4_code.php", {term2: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result_form4_code p", function(){
        $(this).parents(".search-box4_code").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser2($(this).text());
        $(this).parent(".result_form4_code").empty();
    });
});



// search in code input (Form 5)


$(document).ready(function(){
    
    $('.search-box6_code input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result_form6_code");
        if(inputVal.length){
            $.get("backend-search_exit.php", {term3: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result_form6_code p", function(){
        $(this).parents(".search-box6_code").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
            showUser4($(this).text());
        $(this).parent(".result_form6_code").empty();
    });
});




// search in Clinical Diagnosis input (Form 5)


$(document).ready(function(){
    
    $('.search-box7 input[type="text"]').on("keyup input", function(){
        
        /* Get input value on change */
        
        var inputVal = $(this).val();
        var resultDropdown = $(this).siblings(".result7");
        if(inputVal.length){
            $.get("backend-search_diagnosis_exit.php", {term4: inputVal}).done(function(data){
                
                // Display the returned data in browser
                
                resultDropdown.html(data);
            });
        } else{
            resultDropdown.empty();
        }
    });
    
    // Set search input value on click of result item
    $(document).on("click", ".result7 p", function(){
        $(this).parents(".search-box7").find('input[type="text"]').val($(this).text());
        if($(this).text().length>1)
        $(this).parent(".result7").empty();
    });
});



// set data when enter patient code (Form 3)

function showUser12(str1) {
  if (str1=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
		
        $('.enter_input_date').val(dataObject.admission_date);
        $('.enter_input_department').val(dataObject.ademission_dept);
        $('.enter_input_unit').val(dataObject.admission_unit);
        $('.enter_input_floor').val(dataObject.ward);
        $('.enter_input_doctor').val(dataObject.ademission_doctor);
		$('.enter_input_name').val(dataObject.consent_name);
		$('.enter_id').val(dataObject.consent_ID);
		$('.enter_input_relation').val(dataObject.consent_relation);
         
    }
  }
  xmlhttp.open("GET","getuser_enter.php?q="+str1,true);
  xmlhttp.send();
}




// set data when enter patient code (Form 4)

function showUser2(str2) {
  if (str2=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
        
		$('.input_name').val(dataObject.patient_name);
        $('.fromdept').val(dataObject.from_dept);
        $('.fromward').val(dataObject.from_ward);
		$('.todept').val(dataObject.to_dept);
        $('.toward').val(dataObject.to_ward);
        $('.doc').val(dataObject.ademission_doctor);
         
    }
  }
  xmlhttp.open("GET","getuser_transfer_code.php?q="+str2,true);
  xmlhttp.send();
}


// set data when enter patient name (Form 4)

function showUser3(str3) {
  if (str3=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
        
		$('.code').val(dataObject.patient_code);
        $('.fromdept').val(dataObject.from_dept);
        $('.fromward').val(dataObject.from_ward);
		$('.todept').val(dataObject.to_dept);
        $('.toward').val(dataObject.to_ward);
        $('.doc').val(dataObject.ademission_doctor);
         
    }
  }
  xmlhttp.open("GET","getuser_transfer_name.php?q="+str3,true);
  xmlhttp.send();
}

// set data when enter patient code (Form 5)

function showUser4(str4) {
  if (str4=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        dataObject=JSON.parse(this.responseText);
		
        $('.date_exit').val(dataObject.discharge_date);
        $('.dept_exit').val(dataObject.discharge_dept);
        $('.reason').val(dataObject.admission_reason);
        $('.operation').val(dataObject.Operations);
        $('.condition').val(dataObject.Discharge_condition);
        $('.follow').val(dataObject.follow_up);
        $('.site').val(dataObject.follow_up_site);
        $('.reason').val(dataObject.admission_reason);
        $('.doc_exit').val(dataObject.discharge_doctor);
        $('.topography').val(dataObject.Topography);
		$('.morphology').val(dataObject.Morphology);
        $('.laterality').val(dataObject.Laterality);
        $('.staging').val(dataObject.Stage);
		$('.clinical').val(dataObject.Final_Diagnosis);
		
    }
  }
  xmlhttp.open("GET","getuser_exit_code.php?q="+str4,true);
  xmlhttp.send();
}




//  Dialoge (if correct)

$( function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        اغلاق: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );


$( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "تأكيد الحذف": function() {
          $( this ).dialog( "close" );
        },
        إلغاء: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );




//   Form 5  (enter today)

document.getElementById("enter_today").onclick = function(){
	
	"use strict";
	
	window.open("enter_today_report.php");
	
};

 
//     Form 5  (exit today)

document.getElementById("exit_today").onclick = function(){
	
	"use strict";
	
	window.open("exit_today_report.php");
	
};


//     Form 5  (current patients)

document.getElementById("current_patients").onclick = function(){
	
	"use strict";
	
	window.open("current_patients_report.php");
	
};


//     Form 5  (period report)

document.getElementById("patients_period").onclick = function(){
	
	"use strict";
	
	window.open("period_dept_report.php");
	
};

//     Form 5  (current ward report)

document.getElementById("patients_role").onclick = function(){
	
	"use strict";
	
	window.open("current_ward_report.php");
	
};

//     Form 5  (current dept report)

document.getElementById("patients_dept").onclick = function(){
	
	"use strict";
	
	window.open("current_dept_report.php");
	
};

//     Form 5  (ward numbers report)

document.getElementById("numbers_patients").onclick = function(){
	
	"use strict";
	
	window.open("ward_numbers_report.php");
	
};

//     Form 5  (Drugs days report)

document.getElementById("today_dept").onclick = function(){
	
	"use strict";
	
	window.open("drugs_days_report.php");
	
};


//     Form 5  (Drugs days report)

document.getElementById("patients_month").onclick = function(){
	
	"use strict";
	
	window.open("current_month_report.php");
	
};

