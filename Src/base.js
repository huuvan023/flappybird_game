var base = function ( game ) {
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
           // console.log("base loaded");
        }
        this.image.src = "./../Asset/base.png";
    }
    this.update = function () {
        self.x -= 10 ;
        if ( self.x == -900 ) {
            self.x = 0 ;
        }
    }

    this.draw = function () {
        if ( self.loaded ) {
            //console.log(this.image)
            self.game.context.drawImage(this.image,self.x,this.game.height - 95);
            self.game.context.drawImage(this.image,self.x + 900,this.game.height - 96);
            return;
        }
        
        
    }
}