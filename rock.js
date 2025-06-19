const choices = ["rock", "paper", "scissor"];
var playerScore = 0;
var botScore = 0;
var rest =0;
const botChoice =() =>{
  return choices[Math.floor(Math.random() *3)]
}
const getScores = (name)=>{
  bot = botChoice()
  play= name 

  
  if((play === "rock" && bot === "scissor") ||
    (play === "paper" && bot === "rock") ||
    (play === "scissor" && bot === "paper")){
      playerScore+=1
      rest=1
    }
  else if(play == bot){
      rest =0
  }
  else{
    botScore+=1
    rest=-1
  }
  return [playerScore,botScore]
}

const showResult = (numb) =>{
  let num = numb
  switch(num){
    case 1: result.innerHTML='You Won!!'
            break
    case 0: result.innerHTML="It's a DRAW."
            break
    case -1:result.innerHTML="You Lose!"
            break
  }
}

const scoreBoxer = (scoray) =>{
  const scoreBox = document.getElementById('score')
  scoreBox.innerHTML = `<p>You👱:${playerScore} & Bot🤖:${botScore}</p>`
}


function playGame(player){
  const scores = getScores(player)
  const result = document.getElementById('result')
  showResult(rest)
  scoreBoxer(scores)
}

function clearScore(){
    playerScore = 0;
    botScore = 0;
    scoreBoxer([0,0])
    result.innerText='Restart'
}