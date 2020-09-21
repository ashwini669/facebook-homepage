$(document).ready(function(){

    $('#signup').click( function(){

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email= $("#email").val();
        var re_password=$("#re-pwd").val();
        var password= $('#pwd').val();
        var date= $("#date").val();
        var phone_no= $("#num").val();
        var gender = $("input[name='gender']:checked").val();
        
        var letters = /^[A-Za-z]+$/;
        var phonenum = /^\d{10}$/;
        var pass=  /^[A-Za-z]\w{5,14}$/;
        
       if(fname!="" && fname.match(letters))    
       {
        if(lname!="" && lname.match(letters))    
        {
         if(email!="")
          {
            if(date!="" )
             {
             if(password.length!=0 && password.match(pass)&& password==re_password)
                { 
                  if (gender!=undefined)
                    {  
                      if(phone_no!=""&&phone_no.match(phonenum)) 
                      {       
                        let user_data=localStorage.getItem("user_table");
                        if(user_data==null)
                        {
                            task=[];
                          }
                        else{
                              task=JSON.parse(user_data);
                            }
                        task.push({'Firstname':fname,'Lastname':lname,'Email':email,'Password':password,'Date of Birth':date,'Gender':gender,'Phone_number':phone_no});
                        localStorage.setItem("user_table",JSON.stringify(task));
                        alert('your account is created successfully');
                      }
                      else{alert("invalid phone number")}
                    } 
                    else{alert("select gender")}                          
              }
                else{ alert("invalid password");}
            }
           else{alert("invalid date");}
         }
           else{alert("invalid email");}
         }
         else{alert("invalid last name");}
        }
          else{alert("invalid first name");}
      });
      
      $('#signin').click(function(){
  
        let uname = $('#emailadd').val();
        let pass =$('#pass').val();
            
          let data=JSON.parse(localStorage.getItem("user_table"));
          var i=0;
          var len=(data.length)-1;
            
              $.each(data, function( index, value ) {
      
                  var item=value;
                  var x=item.Email;
                  var y=item.Password;
                  var z=item.Phone_number;
                                  
                  if((x === uname ||z === uname) && uname!="")
                  {
                    if(pass!=""&& y === pass) 
                    {
                        let session_data=localStorage.getItem("session_table");
                        if(session_data==null)
                        {
                          task1=[];
                          }
                        else{
                            task1=JSON.parse(session_data);
                            }
                        task1.push({'email':x});
                        localStorage.setItem("session_table",JSON.stringify(task1));
                        alert('LOGGED IN SUCCESSFULLY');
                        
                        $('#emailadd').val(" ");
                        $('#pass').val(" ");
                        window.location.replace("admin.html");
                          //break;
                      }
                      //else{alert("wrong password !! try again")}
                  }
                  //else{alert("Invalid email/phone number")}
      
                  if(i==len && x !== uname && y !== pass)
                    { 
                      alert('invalid username and password');
                      location.reload();
                    }
            })
            
      });

})