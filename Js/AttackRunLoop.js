//LOOP EXAMPLE

var PlayerX=0
var EnemyX=50
var Running=True//Set to true on game start

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
    while (Running)
    {
        //Rest of game code
        Run()
        Attack()
    }
})()