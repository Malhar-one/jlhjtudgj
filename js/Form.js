class Form{
constructor(){
this.input = createInput("name")
this.button = createButton("enter")
this.greeting = createElement("h3")
}
hidedetails(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
}
display(){
    var title = createElement("h2")
    title.html("codtechz car game")
    title.position(130,0)
    this.input = createInput("name")
    this.input.position(130,160)
    this.button = createButton("enter")
    this.button.position(250,200)
    this.greeting = createElement("h3")
    this.button.mousePressed(()=>{
       this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playercount += 1
        player.update()
        player.updatecount(playercount)
this.greeting.html("welcome "+player.name)
this.greeting.position(130,160)
    })
}
}