class Ouiz{
    constructor() {


    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

    async start() {
        if(gameState === 0){
            constestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestantCountRef.getCount();
            }
            question = new Ouestion();
            question.display();
        }
    }
    display() {

    }
}