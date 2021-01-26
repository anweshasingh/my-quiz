class Question{
    constructor() {
        this.input1=createInput("Name");
        this.input2=createInput("Correct answer");
        //this.button= createButton('Submit');
        this.question = createElement('h3');

    }

    hideDetails(){
        this.input1.hide();
        this.input2.hide();
        //this.button.hide();
        this.question.hide();
      }

    display() {
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.quetion.html("Question:- What startsand ends with the letter 'E', but has onlt one letter");
        this.question.postion(150, 80);
        this.option1.html("1: Everyone");
        this.option1.position(150, 100);
        this.option1.html("2: Evelope");
        this.option2.position(150, 120);

        this.input1.position(150, 230);
        this.input2.position(250, 230);
    }
}