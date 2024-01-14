import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function ButtonComponent() {
    const [isFollowing, setIsFollowing] = useState(false);
  
    const handleButtonClick = () => {
      if (!isFollowing) {
        axios.post("/follow").then((response) => {
          setIsFollowing(true);
          console.log(response.data.message);
          
        });
      } else {
        axios.post("/unfollow").then((response) => {
          setIsFollowing(false);
          console.log(response.data.message);
        });
      }
    };
  
    return (
      <>
      <div>
        <Button variant="outlined" onClick={handleButtonClick}>
          {isFollowing ? "Following" : "Follow"}
        </Button> <br />
      </div>
      </>
    );
  }  
  export default ButtonComponent;
