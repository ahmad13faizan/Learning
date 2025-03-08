import React, { useMemo, useRef, useEffect, useState } from "react";
import SignoutBtn from "./SignoutBtn";
import { Link } from "react-router-dom";
import loader from "./loader.gif";
import useCustomHook from "./customHook";



function Home() {

  const [counter, setcounter] = useState(0);
  const [datatobeloaded, setdatatobeloaded] = useState([])
  const [loading, setloading] = useState("https://static.vecteezy.com/system/resources/previews/021/971/557/non_2x/click-cursor-icon-with-click-here-button-free-png.png")


  const [localData,setLocalData]=useCustomHook("name","faizan");
  const [Inp, setInp] = useState("")  
  const counterRef=useRef(0)

  const numbers = [1, 10, 15, 20, 25, 30, 35, 40, 50]; 
  const [search, setSearch] = useState("");

  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers...");
    return numbers.filter((num) =>
      num.toString().includes(search)
    );
  }, [search, numbers]);

  useEffect(() => {
    counterRef.current+=1;
    console.log(counter);
  }, [counter])

  return (

    <div>
      <div>
      <h1>Welcome to the Homepage</h1>
      <h2>Filter Numbers</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search numbers..."
      />
      <h3>Filtered Results:</h3>
      <ul>
        {filteredNumbers.length > 0 ? (
          filteredNumbers.map((num) => <li key={num}>{num}</li>)
        ) : (
          <p>No matching numbers</p>
        )}
      </ul>
    </div>
     
      <button onClick={()=>{alert(counterRef.current)}}>alert with ref value</button>
       <input  id="" value={Inp} onChange={(e)=>{setInp(e.target.value)}} />
       <br />
       
       counter using useRef {counterRef.current} {localData.value}     
      {setLocalData("name","aman")}

      <p>This is a simple React Home component.</p>

      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <SignoutBtn />

      <h2>This is a sample counter {counter}</h2>

      <button
        onClick={() => {
          setcounter(counter + 1);
        }}
      >
        +1
      </button>
         <img onClick={()=>{setloading(loader);
         
         fetch("https://jsonplaceholder.typicode.com/users ")
            .then(response => response.json())  
          
            .then(data => 
            setdatatobeloaded(data),
            setloading("https://static.vecteezy.com/system/resources/previews/021/971/557/non_2x/click-cursor-icon-with-click-here-button-free-png.png")
            )   
           
            .catch(error => console.error(error))

         }} src={loading} alt="" />
         

         <br/>
        <div>
         Loaded data is here  {datatobeloaded.map((item) => (
        <p>{item.id} {item.name} {item.username} {item.email}</p>
     
      ))}
         </div>
    
    </div>
  );
}

export default Home;
