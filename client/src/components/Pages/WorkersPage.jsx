import React, { useEffect, useState } from 'react';
import "../../css/WorkersPage.css";
import Header from './Header';
import Footer from '../Footer';
import { getAllWorkers } from '../../service/api';
import WorkerCard from '../WorkerCard';

const WorkersPage =() => {


    const [workers,setWorkers]=useState([]);

    useEffect(()=>{
          getWorkers();
    },[])

       const getWorkers= async()=>{
            let result= await getAllWorkers();
              
              setWorkers(result.data);
       }

       console.log("Workers from backend are ",workers);

    

  
  return (
    <>
      <Header />
      <h1 style={{margin:"40px"}}>Workers Page</h1>
    {/* <div className="workers-page-workers"> */}
    {/* <div className="workers-page-workers"> */}
    <div className="workers-page-workers-group">
    
    {/* <div className="workers-page-workers-group"> */}

     
    <div className="filter-section">
  <h3 >Filter Workers</h3>
  <form>
    <label for="location">Location:</label>
    <select name="location" id="location">
      <option value="all">All States</option>
      <option value="maharashtra">Maharashtra</option>
      <option value="karnataka">Karnataka</option>
      <option value="tamil-nadu">Tamil Nadu</option>
    </select>

    <label for="city">City:</label>
    <select name="city" id="city">
      <option value="all">All Cities</option>
      <option value="mumbai">Mumbai</option>
      <option value="bangalore">Bangalore</option>
      <option value="chennai">Chennai</option>
    </select>

    <label for="price">Price:</label>
            <div class="filter_price">
       
        <p>₹100.00</p>
       
        <input type="range" name="price" min="0" max="10000" value="100"></input>

                </div>
       

    <label for="experience">Experience:</label>
    <fieldset id="experience">
      <input type="checkbox" name="experience[]" id="experience0-2" value="0-2"></input>
      <label for="experience0-2">0-2 Years</label>
      <input type="checkbox" name="experience[]" id="experience2-5" value="2-5"></input>
      <label for="experience2-5">2-5 Years</label>
      <input type="checkbox" name="experience[]" id="experience5-10" value="5-10"></input>
      <label for="experience5-10">5-10 Years</label>
    </fieldset>

    <label for="city">Role:</label>
    <select name="city" id="city">
      <option value="all">Construction Labour</option>
      <option value="mumbai">Tiles | Marble | Work Helper</option>
      <option value="bangalore">Loading | Unloading</option>
      <option value="chennai">Home Shifting</option>
      <option value="chennai">Factory Labour</option>
      <option value="chennai">Gardening Work</option>
      <option value="chennai">Other Labour Works:</option>
    </select>

    
      <button type="submit">Apply Filter</button>
      </form>
      </div>
          <div className="container">
          {/* <div className="Container-main-worker"> */}
          
          {/* <div className="workers-container-workers"> */}
          <div className="workers-page-workers-group">
            {workers.map((worker) => {
              return <WorkerCard key={worker._id} worker={worker} />;
            })}
          </div>
          </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default WorkersPage;
