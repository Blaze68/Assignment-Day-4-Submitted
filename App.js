import React, { useState } from 'react'
import Icon from './Components/Icon'



// import react-toastify 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// import reactstrap
import {Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"


const tiktacArray =  new Array(9).fill("")

const App =()=> {

    let [isCross, setIsCross] = useState(true)
    
    let[winMessage, setWinMessage] = useState("")

    const playAgain=()=>{

        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")

    }


    class MyForm extends React.Component {
        constructor(props) {
        
            super(props);
          this.state = {isCross: '' };
        }
        mySubmitHandler = (event) => {
            event.preventDefault();
            alert("You are choosing " + this.state.isCross);
          }
        myChangeHandler = (event) => {
          this.setState({isCross: event.target.value});
        }
        render() {
          let header = '';
          if (this.state.isCross) {
            header = <h1>Hello {this.state.iscross}</h1>;
          } else {
            header = '';
          }
          return (
            <form onSubmit={this.mySubmitHandler}>
            {header}
            <h1>hello {isCross}</h1>
            <p>Enter your sign:</p>
            <input
              type='text'
              onChange={this.myChangeHandler}
            />
            <input
            type='submit'
          />
            </form>
          );
        }
      }


    const findWinner=()=>{
            if(tiktacArray[0]==tiktacArray[1] && tiktacArray[0] == tiktacArray[2] && tiktacArray[0]!="") {
            setWinMessage(tiktacArray[0]+ "has won")
            }
            else if(tiktacArray[3] == tiktacArray[4] && tiktacArray[3]==tiktacArray[5] &&tiktacArray[3]!=""){
                setWinMessage(tiktacArray[3]+ "has won")
            }
            else if(tiktacArray[6] == tiktacArray[7] && tiktacArray[6]==tiktacArray[8] &&tiktacArray[6]!=""){
                setWinMessage(tiktacArray[6]+ "has won")
            }
            else if(tiktacArray[0] == tiktacArray[3] && tiktacArray[0]==tiktacArray[6] &&tiktacArray[0]!=""){
                setWinMessage(tiktacArray[0]+ "has won")
            }
            else if(tiktacArray[1] == tiktacArray[4] && tiktacArray[1]==tiktacArray[7] &&tiktacArray[1]!=""){
                setWinMessage(tiktacArray[1]+ "has won")
            }
            else if(tiktacArray[2] == tiktacArray[5] && tiktacArray[2]==tiktacArray[8] &&tiktacArray[2]!=""){
                setWinMessage(tiktacArray[2]+ "has won")
            }
            else if(tiktacArray[2] == tiktacArray[4] && tiktacArray[2]==tiktacArray[6] &&tiktacArray[2]!=""){
                setWinMessage(tiktacArray[2]+ "has won")
            }
            else if(tiktacArray[0] == tiktacArray[4] && tiktacArray[0]==tiktacArray[8] &&tiktacArray[0]!=""){
                setWinMessage(tiktacArray[0]+ "has won")
            }


    }

//    const drawGame=()=>{



  //          if(tiktacArray[0]==tiktacArray[1] && tiktacArray[0] != tiktacArray[2] && tiktacArray[0]=="") {
    //        setWinMessage(tiktacArray[0]+ " match is Draw")
      //      }
        //    else if(tiktacArray[3] == tiktacArray[4] && tiktacArray[3]!=tiktacArray[5] &&tiktacArray[3]==""){
          //      setWinMessage(tiktacArray[3]+ "match is Draw")
            //}
            //else if(tiktacArray[6] == tiktacArray[7] && tiktacArray[6]!=tiktacArray[8] &&tiktacArray[6]==""){
              //  setWinMessage(tiktacArray[6]+ "match is Draw")
           // }
            //else if(tiktacArray[0] == tiktacArray[3] && tiktacArray[0]!=tiktacArray[6] &&tiktacArray[0]==""){
              //  setWinMessage(tiktacArray[0]+ "match is Draw")
            //}
            //else if(tiktacArray[1] == tiktacArray[4] && tiktacArray[1]!=tiktacArray[7] &&tiktacArray[1]==""){
              //  setWinMessage(tiktacArray[1]+ "match is Draw")
            //}
           // else if(tiktacArray[2] == tiktacArray[5] && tiktacArray[2]!=tiktacArray[8] &&tiktacArray[2]==""){
              //  setWinMessage(tiktacArray[2]+ "match is Draw")
           // }
            //else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]!=tiktacArray[6] &&tiktacArray[2]==""){
             //   setWinMessage(tiktacArray[2]+ "match is Draw")
            //}
            //else if(tiktacArray[0] == tiktacArray[4] && tiktacArray[4]!=tiktacArray[8] &&tiktacArray[0]==""){
             //   setWinMessage(tiktacArray[0]+ "match is Draw")
            //}

    //}

    const changeItem = (index)=>{
        if(winMessage){
            return toast("Game has already got over",{type: "success"})
        
        }
        
        if(tiktacArray[index]== ""){
            tiktacArray[index] = isCross ? "cross" : "circle";
            setIsCross(!isCross)
        }
        else{
        return toast("this is a already occupied", {type: "error"})
        }
        findWinner()
        //drawGame()
        
        
    }

    //draw logic
    const drawLogic=(index)=>{
            if(tiktacArray[index]!=""){
                //setIsCross(isCross)
                return toast("Game is over",{type:"success"})
            }
            else{
                return toast("keep playing",{type: "error"})
            }
    }

    



    
    const mystyle = {
        color: "white",
        backgroundColor: "#e580b3",
        paddingTop: "50px",
        paddingRight: "50px",
        paddingBottom: "50px",
        paddingLeft: "380px",
        fontFamily: "Monospace",
        textDecoration: "",
        textColor: "Chocolate",
        
        paddingLeft: "200px",
        Left:"1000px"
        
        
    }
    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center" ></ToastContainer>
            <Row>

                <Col md={6} className="offset -md-3">

                    {
                        // to display the winnr message
                        winMessage? (
                            <div>
                            <h1 className="text-center">
                            {winMessage}
                            </h1>
                            <Button onClick={playAgain}> Play Again </Button>
                            </div>
                            
                        ):(
                            
                            <h1 style={mystyle}>
                                    {isCross? "Cross's Turn": "Circle's Turn"}
                            </h1>
                                
                            
                        )
                    }

                    <div className = "grid">
                        {tiktacArray.map((value, index)=>(
                            <Card onClick={()=>changeItem(index)}>
                                <CardBody className="box">
                                    <Icon choice={tiktacArray[index]} />

                                    

                                </CardBody>
                             </Card>
                        ))}

                    </div>

                </Col>
                
            </Row>
        
         </Container>
    )
}

export default App