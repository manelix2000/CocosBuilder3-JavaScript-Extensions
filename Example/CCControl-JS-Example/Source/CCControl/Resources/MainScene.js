//
// MainScene class
//
var MainScene = function(){
};

// Create callback for button
MainScene.prototype.onPressButton = function( sender )
{	
	cc.log('Button pressed: ' + sender);
    // Rotate the sprite when the button is pressed
    this.divertapSprite.runAction(cc.RotateBy.create(1,360));
};