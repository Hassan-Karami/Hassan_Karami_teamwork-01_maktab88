let countries=[];
let fullData=[];

$.ajax({
    url:"https://restcountries.com/v3.1/all",
    type:"GET",
    dataType: "json",
    async:false,
    success: function(res){
        //get countries name
        for(let i=0;i<res.length; i++){
            fullData.push(res[i]);
            
            countries.push(res[i]["name"]["common"]);
        }  
        
    },
    error: function(err){
        console.log(err);
    }
})

function createOptions(){
    let optionBody='';
    for(let i=0;i<countries.length;i++){
    optionBody+= `<option value="${[i+1]}">${countries[i]}</option>`;
    }
    return optionBody;
}
document.getElementById('selector').innerHTML="<option selected>--- Choose  Country ---</option>" +createOptions();

const mapBody = document.getElementById('mapBody');
const map = () => {
    mapBody.innerHTML = `           
    <div class="col-lg-9 col-md-6 col-12">
    <div class="card shadow">
        <div class="mapouter">
            <iframe width="100%" height="250" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=tehran=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
    </div>
</div>
`
}

function putCountryInfo(){
let selector= document.getElementById("selector");
let selectedCountry= selector.options[selector.selectedIndex].text;
document.getElementById("country").innerText= selectedCountry;
renderCapitalInput(selectedCountry);
}

function renderCapitalInput(countryName){
    // fullData.forEach(el=>el["name"]["common"]=== countryName)
    let targetCountry= fullData.filter(el=>el["name"]["common"]=== countryName);
    // let targetCapital= targetCountry["name"];
    // if(targetCapital){
    //     console.log(targetCapital[0]);
    // }
    
  console.log(targetCountry[0]["capital"][0]);

}