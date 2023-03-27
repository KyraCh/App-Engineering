import React, { useEffect, useState } from "react";


import {Link} from 'react-router-dom';

function Upload() {
  return( 
     <div className="uploadPage"> 
    <div className="newMovement">
        <h1 className="uploadTitle">New Movement</h1>

        <form className="uploadFields">
        <h4 >Title *: </h4>
        <input type="text" className="inputField"></input>
        <h4 >Movement description *: </h4>
        <input type="text" className="inputField"></input>
        <h4>Youtube link *: </h4>
        <input type="text" className="inputField"></input>
        <h4>Upload JSON file *: </h4>
        <input type="file" className="inputField"></input>

        <div class="wrapper">
        <div class="title"><h2>Tags</h2>
        
        </div>
        <div class="content">
            <p>Press enter or add a comma after each tag</p>
            <ul><input type="text" spellcheck="false"></input></ul>
        </div>
        <div class="details">
            <p><span>10</span> tags are remaining</p>
            <button>Remove All</button>
        </div>
        </div>
    <script src="uploadjs.js"></script>


        </form>
      
    </div>
    <div className="image"></div>
    <form action="/action_page.php">
  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*"></input>
  <input type="submit"></input>
    </form>

    </div>   

  );

}

export default Upload;
