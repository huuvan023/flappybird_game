var pipe = function ( game ) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 700;
    this.y = 320;

    var self = this;

    this.init = function () {
        this.loadImage();
    }

    this.loadImage = function () {
        this.image = new Image()
        this.image.onload = function () {
            self.loaded = true;
            console.log("bg loaded");
        }
        this.image.src = "./../Asset/pipe2.png";
    }
    this.random = function(min, max) {
        return Math.random() * (max - min) + min;
      }
    this.update = function () {
        self.x -= 5 ;
        if ( self.x == -160 ) {
            self.x = 900 ;
            self.y = Math.floor(200 + (Math.random() * 200));
        }
    }

    this.draw = function () {
        if ( self.loaded ) {
            self.game.context.drawImage(this.image,self.x,self.y - 250 - 1664);
            self.game.context.drawImage(this.image,self.x,self.y);
            return;
        }
        
        
    }
}