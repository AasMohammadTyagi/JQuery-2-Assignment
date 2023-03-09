var data = $.getJSON("data.json", function (result) { return result });
console.log(data);
$($(document).ready(function(){

 
   
       // console.log(result);
        
      
    
      $('#add').submit((e) => {
        e.preventDefault()
        var course=$('#course').find(":selected").val();
          var branch=$('#branch').find(":selected").val();
          var year=$('#year').find(":selected").val();
        let student = $('#totalstudent').val()
        let passedstudent = $('#passedstudent').val()
        let backstudent=$("#backstudent").val()
        
      //  $('#t-body').append(`<tr><td>` + course + `</td><td>` + branch + `</td><td>` + year + `</td><td>` + student + `</td><td>` + passedstudent +   `</td><td>` + backstudent +`</td></tr>`);
        data.push({
          "course":course,
          "branch":branch,
          "year":year,
          "student":student,
          "passedstudent":passedstudent,
          "backstudent":backstudent,
    
        })
        save(data)
         
        
    })
    data=data.responseJSON;
        for (let i = 0; i <data.length; i++) {
            $('#t-body').append(`<tr><td>` + data[i].course + `</td><td>` + data[i].branch + `</td><td>` + data[i].year + `</td><td>` + data[i].student + `</td><td>` + data[i].passedstudent +   `</td><td>` + data[i].backstudent +`</td></tr>`);
           
          }}))
         
    //     }
    //data=data.responseJSON;
    function save(storageObj) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "data.json");
        dlAnchorElem.click();
    }

    