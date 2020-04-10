var gameover = function ( game ) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 150;

    var self = this;

    this.init = function () {
        this.loadImage();
        self.listenMouse();
    }
    this.listenMouse = function () {
        this.game.canvas.addEventListener('click',function () {
            self.game.gameStart = true;
        });
    }
    this.loadImage = function () {
        this.image = new Image()
        this.image.onload = function () {
            self.loaded = true;
           // console.log("bg loaded");
        }
        this.image.src = "./../Asset/gameover.png";
    }
    this.update = function () {
        self.x -= 5 ;
        if ( self.x == -900 ) {
            self.x = 0 ;
        }
    }

    this.draw = function () {
       // console.log(self.image);    
        if ( self.loaded && !self.game.gameStart ) {
            self.game.context.drawImage(this.image,self.x,50);
            return;
        }
        
        
    }
}