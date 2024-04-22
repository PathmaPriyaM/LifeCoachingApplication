exports.validateName=function(name){
    if(name.length>=3 && name.length<=50) return true;
    return false;
}
exports.validatePassword=function(pwd){
    if(pwd.length>=5 && pwd.length<=10) return true;
    return false;
}

exports.validateAge=function(date){
    const diff_ms = Date.now() - date.getTime();
    const age_dt = new Date(diff_ms); 
    const age=Math.abs(age_dt.getUTCFullYear() - 1970);
    if(age>20 && age<100) return true;
    return false;
}

exports.validateGender=function(gen){
    if (gen.toLowerCase() === 'f' ||  gen.toLowerCase() === 'm' ) return true;
    return false;
}

exports.ValidatePhoneNo=function(phonenum){
    if(phonenum.toString().length==10) return true;
    return false;
}

exports.ValidateEmail=function(emailAddress) {
    const atSymbol = emailAddress.indexOf("@");
    const dotSymbol = emailAddress.lastIndexOf(".");
    const spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        return true;
    } return false;
}

exports.validatePincode=function(pin){
    if(pin.toString().length==6) return true;
    return false;
}

exports.validateCity=function(city){
    if(city.length>=3 && city.length<=20) return true;
    return false;
}

exports.validateState=function(state){
    if(state.length>=3 && state.length<=20) return true;
    return false;
}

exports.validateCountry=function(country){
    if(country.length>=3 && country.length<=20) return true;
    return false;
}

exports.validateSpeciality=function(spec){
    if(spec.length>=10 && spec.length<=50) return true;
    return false;
} 

exports.validateSlot=function(slot){
    if (slot.toLowerCase() === "9 am to 10 am" || slot.toLowerCase()==="10 am to 11 am" || 
    slot.toLowerCase()==="12 pm to 1 pm" ||slot.toLowerCase()==="3 pm to 4 pm") return true;
    return false;
}

exports.validateAppointment=function(appdate){
const date= new Date(new Date().setDate(new Date().getDate() + 7));
const cdate=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
const dateLimit=new Date(cdate);
  if(appdate>=dateLimit && appdate<=date) return true;
  return false;
}