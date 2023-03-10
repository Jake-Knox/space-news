import './App.css';
import { Score } from "./components/score";
import { useState, useEffect } from "react";
 
function App() {

  const [scores, setScores] = useState (
    [
      {team:"Old Earth", goals: 0},
      {team:"Newholme", goals: 0},
      {team:"Baldur", goals: 0},
      {team:"O' Poseidon", goals: 0},
      {team:"N' Pittsburg", goals: 0},
      {team:"Greywater", goals: 0},

      {team:"Avalon", goals: 0},
      {team:"Jamison's", goals: 0},
      {team:"Old Hranga", goals: 0},
      {team:"Prometheus", goals: 0},
      {team:"Thisrock", goals: 0},
      {team:"Rhiannon", goals: 0},

      {team:"Kimdiss", goals: 0},
      {team:"High Kav'", goals: 0},
      {team:"Darkdawn", goals: 0},
      {team:"Worlorn", goals: 0},

      {team:"S'uthlam", goals: 0},
      {team:"Greyrest", goals: 0},
      {team:"Shkea", goals: 0},
      {team:"C'dhenni", goals: 0},
    ]
  );
  
  // console.log(scores[0]);
  // console.log(scores[1]);
  
  const team1 = ["Old Earth", 0];
  const team2 = ["Shkeen", 2];
  
  const handleUpdate = () => {
    // let newScore = (scores[0].score) ++;
    // //console.log(newScore)
    // setScores({
    //   ...scores, 
    //   score: newScore});

    const newScores = scores.map((score, index) => {

      let newScore = {team : score.team, goals: score.goals};
      //console.log(newScore)

      // Returns a random integer from 0 to 9:
      let myRand = Math.floor(Math.random() * 2);
      //console.log(myRand)
      if(myRand == 1){
        ++newScore.goals;
      }
      return newScore;        
    });
    //console.log(newScores)
    setScores(newScores);
  }
  
  useEffect(() => {
    const interval = setInterval(() => {

      // timer count check for 90s if -> then
      // -> reset all scores
      // use randomiser for chance for a team to score every minute
      // low chance
      

      //console.log("timer trigger")
      handleUpdate();
    }, 1000);  
    return () => clearInterval(interval);
  }, []);
 




  


  return (
    <div className="App">
      <div className="container">
        
        <div className="space-container">
          <div className="space-background App-logo"></div>
        </div>

        <div className="news-container">
          <div className="news-header">
            <h1>The thousand world's News</h1>
          </div>
          <div className="news-body">
            <div className="news-items">

              <div className="news-item">
                <h3>news in space</h3>
                <p>news 1</p>
              </div>
              <div className="news-item">
                <h3>news in space</h3>
                <p>news 2</p>
              </div>
              <div className="news-item">
                <h3>news in space</h3>
                <p>news 3</p>
              </div>
              <div className="news-item">
                <h3>news in space</h3>
                <p>news 4</p>
              </div>
            </div>

            <div className="sport-scores">
               <Score team1={scores[0]} team2={scores[1]}/>     
               <Score team1={scores[2]} team2={scores[3]}/> 
               <Score team1={scores[4]} team2={scores[5]}/> 
               <Score team1={scores[6]} team2={scores[7]}/> 
               <Score team1={scores[8]} team2={scores[9]}/> 
               <Score team1={scores[10]} team2={scores[11]}/> 
               <Score team1={scores[12]} team2={scores[13]}/> 
               <Score team1={scores[14]} team2={scores[15]}/> 
               <Score team1={scores[16]} team2={scores[17]}/> 
               <Score team1={scores[18]} team2={scores[19]}/>      
            </div>

          </div>
        </div>      
      </div>
    </div>
  );
}

export default App;
