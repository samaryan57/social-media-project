import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/");
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    return <p>Hello</p>;
};

export default App;
