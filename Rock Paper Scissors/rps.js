let image1=document.getElementById("image1")
        let options=document.getElementsByClassName("options")[0]
        let image2=document.getElementById("image2")
        let countdown=document.getElementById("countdown")
        let arr=["rock", "paper", "scissors"]
        let index= Math.floor(Math.random(arr)*3)
        let img=document.getElementById("img")
        let button=document.querySelector('button:nth-child(1)')
        let computerScore=document.getElementById("computerScore")
        let playerScore=document.getElementById("playerScore")
        
        let pScore=0
        let cScore=0
       
        cScore=JSON.parse(localStorage.getItem("computer"))
        computerScore.innerHTML=cScore

        pScore=JSON.parse(localStorage.getItem("player"))
        playerScore.innerHTML=pScore
        /*let game=document.getElementsByClassName("game")
        
        for(let i=0; i<game.length; i++){
            game[i].addEventListener("click", function(){
                image1.innerHTML=this
            })
        }*/
        let a=`<img src="icon-rock.svg">`
        let b=`<img src="icon-paper.svg">`
        let c=`<img src="icon-scissors.svg">`

        function rock(){
         //image1.innerHTML=a 
         let counttDown=3
         img.innerText="Deciding..."
         
        let x = setInterval(
        function(){
        
        countdown.innerHTML = counttDown
        counttDown=counttDown-1
        if(counttDown===-1){
            options.style.display="inline-block"
            button.style.display="inline-block"
        //countdown stops when it reaches 0
        clearInterval(x)
        image1.innerHTML=a
        countdown.innerHTML="Shoot!"
        if(arr[index]==="rock"){
         image2.innerHTML=a
         options.innerHTML="Draw!"
        
        }else if(arr[index]==="paper"){
            image2.innerHTML=b
            options.innerHTML="You Lost!"
            cScore+=1
            
         computerScore.innerText=cScore
         localStorage.setItem("computer",JSON.stringify(cScore))
        }else{
            image2.innerHTML=c
            options.innerHTML="You Win!"
            pScore+=1
         playerScore.innerText=pScore
         localStorage.setItem("player", JSON.stringify(pScore))
        }
        }
        }
        ,1000)  
        }

        function paper(){
         //image1.innerHTML=a 
         let counttDown=3
         img.innerText="Deciding..."
        let x = setInterval(
        
        function(){
        
        countdown.innerHTML = counttDown
        counttDown=counttDown-1
        if(counttDown===-1){
            button.style.display="inline-block"
        //countdown stops when it reaches 0
        clearInterval(x)
        image1.innerHTML=b
        countdown.innerHTML="Shoot!"
        if(arr[index]==="rock"){
         image2.innerHTML=a
         options.innerHTML="You Won!"
         pScore+=1
         playerScore.innerText=pScore
         localStorage.setItem("player", JSON.stringify(pScore))
        }
        
        else if(arr[index]==="paper"){
            image2.innerHTML=b
            options.innerHTML="Draw!"
        }else{
            image2.innerHTML=c
            options.innerHTML="You lost!"
            cScore+=1

            computerScore.innerText=cScore
         localStorage.setItem("computer",JSON.stringify(cScore))
        }
        }
        }
        ,1000)  
        }

        function scissors(){
            
         //image1.innerHTML=a 
         let counttDown=3
         img.innerText="Deciding..."
        let x = setInterval(
        function(){
        
        countdown.innerHTML = counttDown
        counttDown=counttDown-1
        if(counttDown===-1){
            button.style.display="inline-block"
        //countdown stops when it reaches 0
        clearInterval(x)
        countdown.innerHTML="Shoot!"
        image1.innerHTML=c
           //console.log(arr[index])
           if(arr[index]==="rock"){
         image2.innerHTML=a   
         options.innerHTML="You Lost!"
         cScore+=1
         computerScore.innerText=cScore
         localStorage.setItem("computer",JSON.stringify(cScore))

        }else if(arr[index]==="paper"){
            image2.innerHTML=b
            options.innerHTML="You Win!"
            pScore+=1
         playerScore.innerText=pScore
         localStorage.setItem("player", JSON.stringify(pScore))
        }else{
            image2.innerHTML=c
            options.innerHTML="Draw!"
        }
       
        }
        }
        ,1000)  
        }

     function quit(){
        localStorage.clear()
        if(confirm("Are you sure you want to Quit?")){
            location.reload()
        }else{
            localStorage.setItem("player", JSON.stringify(pScore))
            localStorage.setItem("computer",JSON.stringify(cScore))

        }
     }  
     function how(){
        alert(`
The fisted hand is "Rock", the "Open hand" is "Paper" and the "Two-sign" shaped hand is "Scisssors".

Rock wins Scissors, Paper wins Rock, and Scissors wins Paper.
 
Click on either Rock, Paper or Scissors to start Game.

Click on Play Again to play another round of Game.
        
Click on Quit to End Game. Your progress will be lost if you use this feature.`)
     }