import React,{useState,useEffect} from 'react';
import './style.css';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Events from "./components/Events";
import Statistics from "./components/Statistics"
import Lineups from "./components/Lineups"


function App() {
  const [data,setData]=useState([]);
  const [name,setName]=useState([]);

  const getData=()=>{

    fetch('json.json'
    ,{

      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }

    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
        setName(myJson[0])
      });

  }

  useEffect(()=>{
    getData()
  },[])
    
  

  return (
    <>
    <div id="wg-api-football-fixture"  className="maindiv">
  <table id="fixture" className="toptable">
    <tbody>
    <tr id="fixture_718243" className="fixture_718243">
      <td className="Lscor_football_header" colSpan="2">
        <span>World - Euro Championship </span>
      </td>
      
      <td className="Lscor_football_header Lscor_football_text_right">

      {

//data.map((item, i)=><p key={i}>{item.date}</p>)
name.date
}
      </td>
    </tr>
    <tr>
      <td className="Lscor_football_text_center Lscor_football_width_33_p Lscor_football_no_border">
        <img src={name.homeLogo} className="Lscor_football_logo_xl" loading="lazy" alt="Switzerland logo" />
        <div id="fixture_home_15" className="Lscor_football_team_xl">{name.homeTeam}</div>
      </td>
      <td className="Lscor_football_text_center Lscor_football_width_34_p Lscor_football_no_border">
        <div id="score_fixture_718243" className="Lscor_football_score_xl">{name.homeTeamScore} - {name.awayTeamScore}</div>
        <div className="Lscor_football_elasped_xl" id="elapsed_fixture_718243">
          <span className="Lscor_football_finished">{name.status} <br />
          </span>
        </div>
      </td>
      <td className="Lscor_football_text_center Lscor_football_width_33_p Lscor_football_no_border">
        <img src={name.awayLogo}  className="Lscor_football_logo_xl" loading="lazy" alt="Spain logo" />
        <div id="fixture_away_9" className="Lscor_football_team_xl Lscor_football_bolder">{name.awayTeam}</div>
      </td>
    </tr>
    <tr>
      <td className="Lscor_football_text_center Lscor_football_p_tb_10" colSpan="3">
      {data.map(( ev, z ) => (
        <div key={z} id="venue_fixture_718243"> {
        ev.fixture.venue.name
        } 
        
        Stadium <span className="Lscor_football_bolder">- {
        ev.fixture.venue.city
        }</span>
        </div>
         ))}
      </td>
    </tr>
    <tr>
    </tr>
    </tbody>
  </table>
  <TabsComponent>
    <TabList>
      
        <Tab key={1}>Events</Tab>
        <Tab key={2}>Statistics</Tab>
        <Tab key={3}>Lineups</Tab>
     
    </TabList>

      <TabPanel key={1}><Events name = {name} data = {data} /></TabPanel>
      <TabPanel key={2}><Statistics  name = {name} data = {data} /></TabPanel>
      <TabPanel key={3}><Lineups  name = {name} data = {data} /></TabPanel>


 
  </TabsComponent>



  </div>
      
    </>
  );
}

export default App;
