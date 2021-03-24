class Question{
    constructor(){
        this.input = createInput("Name");
        this.title = createElement('h1');

        this.Q1 = createElement('h2');
        this.Q1o1 = createElement('h4');
        this.Q1o2 = createElement('h4');
        this.inputQ1 = createInput("Your Answer");

        this.reset = createButton('Reset');

        this.submit = createButton('Submit');
    }

    hide(){
        this.title.hide();
        this.input.hide();
    }

    display(){

        // contestant.name();
        // contestant.answer();
        // contestant.index();
        
        // if(gameState == 0){
            this.title.html("My Marvel Quiz");
            this.title.position(350, 50)

            this.input.position(625, 200);
            this.input.style('width', '200px');
            this.input.style('height', '20px');
            this.input.style('background', 'lavender');

            this.submit.position(680, 300);
            this.submit.style('width', '100px');
            this.submit.style('height', '20px');
            this.submit.style('background', 'lavender');

            this.reset.position(680, 350);
            this.reset.style('width', '100px');
            this.reset.style('height', '20px');
            this.reset.style('background', 'lavender');

            this.Q1.html("Q1. In 'Thor: Ragnarok' who is Thor's opponent in the gladiator ring on the planet Sakaar? ")
            this.Q1.position(45, 100);
            this.Q1.style('font-family', 'Italics');
            this.Q1.style('font-size', '20px');
            this.Q1.style('color', 'red');

            this.inputQ1.position(650, 250);

            // contestant.answer = this.inputQ1.val();

            this.Q1o1.html("(i) Loki")
            this.Q1o1.position(65, 200);
            this.Q1o1.style('width', '200px');
            this.Q1o1.style('height', '40px');
            this.Q1o1.style('background', rgb(130, 0, 172));

            this.Q1o2.html("(ii) Hulk")
            this.Q1o2.position(65, 300);
            this.Q1o2.style('width', '200px');
            this.Q1o2.style('height', '40px');
            this.Q1o2.style('background', rgb(130, 0, 172));

        // }

            this.submit.mousePressed(() => {
                this.title.hide();
                this.input.hide();
                this.inputQ1.hide();
                this.submit.hide();
                this.Q1.hide();
                this.Q1o1.hide();
                this.Q1o2.hide();
                contestant.name = this.input.value();
                contestant.answer = this.inputQ1.value();
                contestantCount += 1;
                contestant.index = contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount);
            });

            this.reset.mousePressed(() => {
                contestant.updateCount(0);
                quiz.update(0);
            })

        }
    // }
}    