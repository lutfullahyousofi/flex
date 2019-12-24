import React, { Component } from 'react'

class Form extends Component {

    clicked(){
    }
    render() { 
        return(
            <form>
            <div>
                <label> name: </label>
                <input type='text'/>

                <br>
                </br>

                <label>username: </label>
                <input type='text'/>

                <br>
                </br>

                <label> password: </label>
                <input type='text'/>

                <br>
                </br>
                
                <label>confirm password: </label>
                <input type='text'/>

                <br>
                </br>

                <label> Email: </label>
                <input type='text'/>

                <br>
                </br>

                <label>Contact No: </label>
                <input type='text'/>

                <br>
                </br>

                <label> City/Province: </label>
                <input type='text'/>

                <br>
                </br>
                
                <label>Select Post: </label>
                <input type='text'/>



                <br>
                </br>

                <label> Address: </label>
                <input type='text'/>

                <br>
                </br>
                
                <label>CNIC No: </label>
                <input type='text'/>


                <br>
                </br>

                <label> CNIC No: </label>
                <input type='text'/>

               
                <br>
                </br>

                <label> Date Of Birth: </label>
                <input type='text'/>



                </div>


                <div>
 <button onclick={this .clicled}> Submit </button>
 <button onclick={this .clicled}> Cancel</button>
     </div>
              </form>

        )
   

        
    }
}
 
export default Form  