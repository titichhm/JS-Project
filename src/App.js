import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Router } from "react-router";

const App=()=> {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'http://fathomless-shelf-5846.herokuapp.com/api/schedule?date=%227/8/2019%22';

  const [allData,setData]=useState([]);
  const vr=1;
  useEffect(()=>{
    getData();
  },[]);

  const getData =  async () =>{
    const response= await fetch(proxyUrl + targetUrl);
    const data=await response.json();
    setData(data);
  }

  const [condition,setCondition] = useState(false);


  
  return( 
    
    <div className="App">
      
      <div style={{height:130,backgroundColor:"#9370DB",color:"white",fontSize:20,fontFamily:"Bahnschrift Light"}}>
      <b><br/><label for="DATE"><FontAwesomeIcon icon={faArrowDown} />     Select a date (Default - 7/8/2019)     <FontAwesomeIcon icon={faArrowDown} /></label></b><br/> <br/>
      
      
      <FontAwesomeIcon icon={faCalendarAlt} color='white'/>  <input type="date" style={{height:20}} className="DATE" onChange={v => getData(v.target.value)}/>  </div>
      <br/>
      {allData.map(dta=>(
        <Header head={dta.description} st={dta.start_time} et={dta.end_time} pt={dta.participants}/>
      ))}
    </div>
  );
}

export default App;