var bird = function ( game ) {
    this.game = game;
    this.images = [];
    this.loaded1 = false;
    this.loaded2 = false;
    this.loaded3 = false;

    this.currentImage = null;
    this.currentFrame = 0;
    this.currentImageIndex = 0;

    this.x = 220;
    this.y = 200;
    this.speedY = 0;
    this.accel = 1.5; 
    var self = this;

    this.init = function () {
        this.loadImages();
    }
    
    this.loadImages = function () {
        var image1 = new Image();
        var image2 = new Image();
        var image3 = new Image();
        self.currentImage = image1;
        image1.onload = function () {
            self.loaded1 = true;
            
            console.log("bird1 loaded");
        }
        image2.onload = function () {
            self.loaded2 = true;
            
            console.log("bird2 loaded");
        }
        image3.onload = function () {
            self.loaded3 = true;
            
            console.log("bird3 loaded");
        }
        image1.src = "./../Asset/bird11.png";
        image2.src = "./../Asset/bird12.png";
        image3.src = "./../Asset/bird13.png";

        self.images.push(image1);
        self.images.push(image2);
        self.images.push(image3);
    }
    this.update = function () {
        if ( !self.loaded1 || !self.loaded2 || !self.loaded3 ) {
            return;
        }
        self.currentFrame ++;

        if ( self.currentFrame % 5 === 0 ) {
            self.onChangeIndex();
        }
        console.log(self.y)
        //
        if ( self.y < 375 ) {
            self.speedY += self.accel;
            self.y += this.speedY;
        }
        //check Game over

        if ( self.y >= 375 || self.y < -3) {
            self.game.gameOver = true;
            this.game.gameEnd = true;
        }
        //check hit
        this.checkHit();
        
    }
    this.checkHit = function () {
        if ( 
            ( this.x + 81 > this.game.pipe.x && this.x < this.game.pipe.x + 148 ) 
            &&
            ( this.y + 40 > this.game.pipe.y || this.y < this.game.pipe.y - 260 ) 
         ) {
            this.game.gameOver = true;
            this.game.gameEnd = true;
        }
    }
    this.flap = function () {
        self.speedY = -15 ;
    }

    this.onChangeIndex = function () {
        if ( this.currentImageIndex === 2 ) {
            this.currentImageIndex = 0 ;
        }
        else {
            this.currentImageIndex ++;
        }
        this.currentImage = self.images[self.currentImageIndex]
    }
    this.draw = function () {  
        if ( self.loaded === false ) {
            return;
        }
        self.game.context.drawImage(self.currentImage,self.x,self.y)
    }
}