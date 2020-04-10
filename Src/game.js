var game = function () {
    this.canvas = null;
    this.context = null;
    this.width = 900;
    this.height = 504;

    this.bird = null;
    this.bg = null;
    this.base = null;
    this.pipe = null;
    this.newgame = null;
    this.gameover = null;

    var self = this;
    //game start
    this.gameStart = false;
    //game status
    this.gameOver = false;
    //game end
    this.gameEnd = false;

    this.init = function () {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas);
        //tao ra new bird
        this.bird = new bird(this);
        this.bird.init();
        //tao bg
        this.bg = new bg(this);
        this.bg.init();
        //tao base
        this.base = new base(this);
        this.base.init();
        //tao pipe
        this.pipe = new pipe(this);
        this.pipe.init();
        //tao newgame
        this.newgame = new newgame(this);
        this.newgame.init();
        //tao gameover
        this.gameover = new gameover(this);
        this.gameover.init();

        self.listenMouse(); 
        this.loop();
    }

    this.listenMouse = function () {
        this.canvas.addEventListener('click',function () {
            self.bird.flap();
        });
    }
    this.loop = function () {
        //console.log("loop");
        self.update();
        self.draw();
        setTimeout(self.loop,33);
    }

    this.update = function () {
        if ( !self.gameOver ) {
            if ( self.gameStart ){
                this.bird.update();
                this.pipe.update();
            }
            this.bg.update();
            this.base.update();   
        }
    }

    this.draw = function () {
        if ( !self.gameOver ) {
            this.bg.draw();
            if ( self.gameStart ){
                this.pipe.draw();
            }
            this.newgame.draw();
            this.base.draw();
            this.bird.draw();
        }
         

    }
}

var g = new game();
g.init();