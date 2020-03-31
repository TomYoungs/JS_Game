//TIME INTERVAL EXAMPLE

var PlayerX=0

function Run()//forward 1 step
{
    PlayerX=PlayerX+10
}

function Attack()//1 attack
{
    if (enemyX <= PlayerX+20 && enemyX >= PlayerX)//Example attack distance boundaries
    {
        //Call function to make enemy disappear
    }
}

(function StartRunning()//Run once at start. Currently self-invokes
{
    /*
    Run needs to be repeated, could be done through making 
    Run() occur on every iteration of a while, or through a time delay
    */
    setInterval(Run, 1000)//Call run evry 1000 millisec
    setInterval(Attack, 1000)
    //clearInterval(Run) stops the execution if necessary
})()