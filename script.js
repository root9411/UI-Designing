$(document).ready(function(){

      // Tabs
      $(".wizard-container").show();
      $(".wizard-container1").hide();
    
        $("#nextbtn").click(function(){
          $(".wizard-container").hide();
          $(".wizard-container1").show();

          let user = document.getElementById("userinput").value;
          let fname = document.getElementById("first-name").value;
          let lname = document.getElementById("last-name").value;
          let Oname = document.getElementById("org-name").value;
          let loname = document.getElementById("loca-name").value;
          let ename = document.getElementById("email-name").value;

          document.getElementById("userout").innerHTML = user ;
          document.getElementById("nameout").innerHTML = fname + " " + lname;
          document.getElementById("orgout").innerHTML = Oname ;
          document.getElementById("locaout").innerHTML = loname ;
          document.getElementById("emailout").innerHTML = ename ;

        })
    
        $("#previousbtn").click(function(){
          $(".wizard-container1").hide();
          $(".wizard-container").show();
        })

        // Date Range Picker

        $(function() {
          $('div[name="daterange"]').daterangepicker({
            opens: 'left'
          }, function(start, end, label) {
            var startDate = start.format('DD-MM-YYYY');
            var endDate = end.format('DD-MM-YYYY');           
           document.getElementsByName('daterange1')[0].placeholder = startDate + " to " + endDate;
          });
        });

        $(".sidebar-btn").click(function(){
          $(".wrapper").toggleClass("active");
        })
});

// Search Functionality
function searchValue() {
  var searchValue, filter, table, tr, td, i, txtValue;
  searchValue = document.getElementById("searchValue");
  filter = searchValue.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = document.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

