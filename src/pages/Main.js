import React, { useState, useEffect } from 'react';

import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


// for sql things
// axios allows you to make requests to APIs including your own
import Axios from 'axios';

const MainPage = () => {
  
  const Selections = ({ selectedExercises, exercises }) => {
    return (
      <div className="selections">
        <div className="selections-list">
          {exercises.map((exercise, index) => (
            <div key={index} className="selection">
              <div className="selection-name">
                {selectedExercises.includes(exercise) ? exercise : "removed"}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
 
  
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const currentFilters = [...selectedFilters];
    const filter = event.target.value;
  
    if (event.target.checked) {
      currentFilters.push(filter);
    } else {
      currentFilters.splice(currentFilters.indexOf(filter), 1);
    }
  
    setSelectedFilters(currentFilters);
  };
  


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };




  //for database example
  const [Exercise, setExercise] = useState("");
  const [exerciseList, setexerciseList] = useState([]);

  const Submit = () => {
    Axios.post("http://localhost:3001/create", {
      Exercise:Exercise
    }).then(() => {
      setexerciseList([
        ...exerciseList,
        {
          Exercise:Exercise
        },
      ]);
    });
  };


  return (
    <div className="page" style={{display: "flex"}}>

      {/* for database example */}

      <label>Exercise:</label>
        <input
          type="text"
          onChange={(event) => {
            setExercise(event.target.value);
          }}
        />
      
      <button onClick={Submit}>Submit</button>





      <div className='side-menu'>

        <div className="checkbox-container">
          <h3>Exercise Filter</h3>
          <div className="filter">
            <input
              type="checkbox"
              value="filter1"
              onChange={handleFilterChange}
            />
            <label>Filter 1</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter2"
              onChange={handleFilterChange}
            />
            <label>Filter 2</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter3"
              onChange={handleFilterChange}
            />
            <label>Filter 3</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter4"
              onChange={handleFilterChange}
            />
            <label>Filter 4</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter5"
              onChange={handleFilterChange}
            />
            <label>Filter 5</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter6"
              onChange={handleFilterChange}
            />
            <label>Filter 6</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter7"
              onChange={handleFilterChange}
            />
            <label>Filter 7</label>
          </div>
          <div className="filter">
            <input
              type="checkbox"
              value="filter8"
              onChange={handleFilterChange}
            />
            <label>Filter 8</label>
          </div>
          
        </div>

        
      </div>

<div className='TabSet' style={{ margin: "20px" , width: '70%' }}>
  <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search" style={{marginLeft:"700px"}}/>

      <Tabs>
        <TabList>
          <Tab>Exercises</Tab>
          <Tab>Templates</Tab>
        

        </TabList>
        
        <TabPanel>
          <p style={{paddingTop:"20px", fontWeight:"bold", marginLeft:"20px"}}>
            Exercises
          </p>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {[...Array(12)].map((_, index) => (
              <div
              key={index}
              className={`exercise-card ${selectedExercises.includes(`Exercise ${index + 1}`) ? "selected" : ""}`}
              onClick={(e) => {
                const el = e.target;
                el.classList.toggle("selected");
              
                // Add or remove selected exercise from state variable
                const exerciseName = el.parentElement.querySelector(".exercise-content");
                if (el.classList.contains("selected")) {
                  setSelectedExercises([...selectedExercises, exerciseName]);
                } else {
                  setSelectedExercises(selectedExercises.filter(name => name !== exerciseName));
                }
                
                // Remove exercise from selected exercises list if clicked again
                if (selectedExercises.includes(exerciseName)) {
                  setSelectedExercises(selectedExercises.filter(name => name !== exerciseName));
                }
              }}
              data-name={`Exercise ${index + 1}`}
            >
               <div className="exercise-content">
                {/* The exercise content */}
              </div>
              <div style={{color: "rgba(1, 90, 195, 0.8)", marginLeft: "-80px", marginBottom: "1px"}}>Exercise {index + 1}</div>
              
            </div>
            
            ))}
          </div>
        </TabPanel>


        <TabPanel>
          <p style={{paddingTop:"20px", fontWeight:"bold", marginLeft:"20px"}}>
            Exercises
          </p>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {[...Array(12)].map((_, index) => (
              <div
              key={index}
              className={`exercise-card ${selectedExercises.includes(`Exercise ${index + 1}`) ? "selected" : ""}`}
              onClick={(e) => {
                const el = e.target;
                el.classList.toggle("selected");
              
                // Add or remove selected exercise from state variable
                const exerciseName = el.parentElement.querySelector(".exercise-content");
                if (el.classList.contains("selected")) {
                  setSelectedExercises([...selectedExercises, exerciseName]);
                } else {
                  setSelectedExercises(selectedExercises.filter(name => name !== exerciseName));
                }
                
                // Remove exercise from selected exercises list if clicked again
                if (selectedExercises.includes(exerciseName)) {
                  setSelectedExercises(selectedExercises.filter(name => name !== exerciseName));
                }
              }}
              data-name={`Exercise ${index + 1}`}
            >
               <div className="exercise-content">
                {/* The exercise content */}
              </div>
              <div style={{color: "rgba(1, 90, 195, 0.8)", marginLeft: "-80px", marginBottom: "1px"}}>Template {index + 1}</div>
              
            </div>
            
            ))}
          </div>
        </TabPanel>


      </Tabs>

      
      </div>
      
      {/* this should change to your selections- whatever we need here  */}

      
      <div className='Selections' style={{textAlign: "center",fontWeight: 'bold'}}>
        Your Selections
        <Selections selectedExercises={selectedExercises} exercises={[...Array(12)].map((_, index) => `Exercise ${index + 1}`)} />

      </div>

    </div>

    
  );
};



export default MainPage;



