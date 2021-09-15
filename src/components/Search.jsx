import React, {useState,Redirect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Link,useHistory,withRouter } from 'react-router-dom'
import Menu from "./Menu";
import Mountain from './mountain';
import '../search.css';
const Search = () => {

    
    const[items,setItems] = useState(Mountain);
    const[filter,setfilter] = useState('');
    var  history = useHistory();
    
    var jsonString = localStorage.getItem("amay");
    var login = JSON.parse(jsonString);
    

    const filterItem=(categItem)=>{
       
        const updatedItems = Menu.filter((curElem)=>{
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    const logout = () => {
                    
         localStorage.clear()
         history.push('/')

                      };

    const getSearchterm = (event) =>{
        const searchWord = event.target.value;
        
        setfilter(searchWord);
        const newFilter = Menu.filter((value) => {
        return value.category.toLowerCase().includes(searchWord.toLowerCase());
        //    return value.category.toString().toLowerCase()===searchWord.toString().toLowerCase();
    });

    if (searchWord === "") {
        setItems([]);
      } 
      else {
        setItems(newFilter);
      }
   
        
    };
    return(
        
    <>
        <h1 className="mt-5 text-center main-heading">
        <div >
            <button className="b2" onClick={logout}>Logout</button>
            <p className="name">{login.name}</p>
        </div>
      
        <input type="text"  onChange={getSearchterm} placeholder="seacrh here" id="search" defaultValue='mountain'></input><br></br></h1>
        <hr/>
     
     
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around"><br/>
                <button className="btn btn-warning" onClick={()=>filterItem('Mountain')}className="buttons">Mountains</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Beach')}className="buttons">Beaches</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Bird')}className="buttons">Birds</button>
                <button className="btn btn-warning" onClick={()=>filterItem('Food')}className="buttons">Food</button>
            </div>
        </div>
       <div ClassName="menu-items container-fluid mt-5">
           <div ClassName="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5">

                        {
                            items.map((elem)=>{
                                const {id,name,image,description}=elem;

                                return(
                                    



                                    <div className="col-item1 col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="row Item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 imd-div">
                                                    <img src ={image}  className="img-sec"/>
                                                </div>
                                            <div className="col-12 col-md-12 col-lg-8">
                                                <div className="main-title pt-4 pb-3">
                                             
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                )
                            })
                        }  

                    </div>
                </div>
             </div>
        </div>



    </>

    )
}

 export default  withRouter(Search);
