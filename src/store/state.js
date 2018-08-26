let defaultCity='张家港'
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){}

export default {
  city:defaultCity
}

