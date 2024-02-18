import { useSearchParams } from "react-router-dom";
function Filter(){
    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age')
    const city=searchParams.get('city');
    return(
        <div>
          <center>
          <h1>Filter Page</h1>
          <h3>Age is {age}</h3>
          <h3>City is {city}</h3>
          <input type="text" placeholder="set text in query params" onChange={(e)=>setSearchParams({text:e.target.value})}/>
          <button onClick={()=>setSearchParams({age:40,city:'noida'})}>Set age in QueryParams</button>
          </center>
        </div>
    )
}
export default Filter;
// onclicking  the button the searchbox will be appear like as the
// ................./?age=40&city=noida 
//also when we type something inside the input box then also search box query changes according to the typing text
// let's type abc then search box changes to the /?text=abc