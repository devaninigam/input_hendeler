export default function Validation(data)
{
     let error = {};
     if(data.Uname === "" || data.Uname.length <= 2 ){
          error.Uname = "Plese Enter Valida Name"
     }else if(data.Phone.length !== 10 || isNaN(data.Phone) || data.Phone === ""){ 
          error.Phone = "Enter Valida Phone Number" 
     }
     return error;
}