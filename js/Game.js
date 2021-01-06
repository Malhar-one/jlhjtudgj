class Game{
    constructor(){

    }
    getstate(){
        var locofgamestate = database.ref("gamestate")
        locofgamestate.on("value",function (data){
            gamestate = data.val()
        })
    }
        update(state){
            database.ref("/").update({
                gamestate:state
            })
        }

        start(){
if(gamestate === 0){
    player=new Player()
    player.getcount()
    form = new Form()
    form.display()

}
}
play(){
    form.hidedetails()
    text("starting",120,100)
    Player.getplayerinfo()
    if(allplayers!== undefined){
        var displayposition = 130;
        for(var plr in allplayer){
            if(plr === "player"+player.index)
            fill("red")
            else
            fill("black")
            displayposition += 20
            textSize(15)
            text(allplayers[plr].name+";"+allplayers[plr].distance,120,)
        }
            
        
    }
if(keyIsDown(UP_ARROW )&& player.index !== null ){
player.distance+= 50
player.update()
}
}
    }
