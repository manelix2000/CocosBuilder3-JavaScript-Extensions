//
// GamesScene class
//
var GamesScene = function(){
};

GamesScene.prototype.onRitaPressed = function( sender )
{	
	cc.log('Rita pressed: ' + sender);
	sender.openURL('https://itunes.apple.com/es/app/rita-la-lagartija/id568650448?mt=8');
};

GamesScene.prototype.onParchisPressed = function( sender )
{	
	cc.log('Parchis pressed: ' + sender);
    sender.openURL('https://itunes.apple.com/es/app/iparchis-online/id358310712?mt=8');
};

GamesScene.prototype.onOcaPressed = function( sender )
{	
	cc.log('Oca pressed: ' + sender);
    sender.openURL('https://itunes.apple.com/es/app/ioca-online/id365575625?mt=8');
};

GamesScene.prototype.onQuinilooPressed = function( sender )
{	
	cc.log('Quiniloo pressed: ' + sender);
    sender.openURL('https://itunes.apple.com/ag/app/quiniloo-lite/id331450140?mt=8');
};