var bg = function ( game ) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 0;

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
        this.image.src = "./../Asset/bg.png";
    }
    this.update = function () {
        self.x -= 5 ;
        if ( self.x == -900 ) {
            self.x = 0 ;
        }
    }

    this.draw = function () {
        if ( self.loaded ) {
            self.game.context.drawImage(this.image,self.x,0);
            self.game.context.drawImage(this.image,self.x + 900,0);
            return;
        }
        
        
    }
}