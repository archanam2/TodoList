import React, { useState } from "react";
import ToDoList from  './ToDoList';

const App = () => {
  const[inputList,setInputList] = useState("");
  const[Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList]
    });
    setInputList(" ");

  };
  const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
};
    return<>
    <div className="main-div">
          <div className="center-div">
            <br></br>
            <h1>TODO List</h1>
            <br></br>
            <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputList}/>
            <button onClick={listOfItems}> + </button>

            <ol>
                {/* <li>{inputList}</li> */}
                {Items.map( (itemval , index ) =>{
                  return <ToDoList 
                  key = {index}
                  id = {index}
                  text ={itemval}
                  onSelect = {deleteItems}
                  />;
                } )
              }
            </ol>
          </div>
    </div>
    </>
  


} 
export default App;
