const Score = (props) => {
    return (
    <div className="sport-match">
        <p className="score-left">{props.team1.team} {props.team1.score}</p><p className="score-middle"> | </p><p className="score-right">{props.team2.score} {props.team2.team}</p>       
    </div>   
    )  
};
export { Score };