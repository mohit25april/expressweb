const cityname = document.getElementById('cityname');
const submitbtn =document.getElementById('submitbtn');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value; 
     if (cityval === ""){
         city_name.innerText = `plz write the name before search`;
      }else{
          try{
const xhttp = new XMLHttpRequest();
// let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityval}?unitGroup=metric&include=days&key=29TTJ9392K4CA5UAL9MAU2XFY&contentType=json`;
// const response = await fetch(url,{mode: 'cors'});
// const data = await response.json();
// console.log(response);
xhttp.onloadend = function (){
  const data = JSON.parse(this.responseText)
  console.log(data);
}
xhttp.open('GET',`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityval}?unitGroup=metric&include=days&key=29TTJ9392K4CA5UAL9MAU2XFY&contentType=json`,true)
xhttp.send()
          
      }catch(e){
        console.log("Asdsadas")
          city_name.innerText = `plz  enter the city name properly`;
      }
    }
    }

submitbtn.addEventListener('click',getInfo);