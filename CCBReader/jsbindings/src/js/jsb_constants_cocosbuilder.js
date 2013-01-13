//
// CocosBuilder definitions
//

cc.BuilderReader = {};

cc.BuilderReader.CONTROL_EVENTS_NOT_DEFINED = -1;

var _ccbGlobalContext = this;

// Added for CCB HTML5 compatibility
cc.BuilderReader.setResourcePath = function(path){
    cc._Reader.setResourcePath(path);
};

cc.BuilderReader.load = function(file, owner, parentSize)
{
    // Load the node graph using the correct function
    var reader = cc._Reader.create();
    var node;

    if (owner && parentSize)
    {
        node = reader.load(file, owner, parentSize);
    }
    else if (owner)
    {
        node = reader.load(file,owner);
    }
    else
    {
        node = reader.load(file);
    }

    // Assign owner callbacks & member variables
    if (owner)
    {
        // Callbacks
        var ownerCallbackNames = reader.getOwnerCallbackNames();
        var ownerCallbackNodes = reader.getOwnerCallbackNodes();
        var ownerCallbackEvents = reader.getOwnerCallbackEvents();

        for (var i = 0; i < ownerCallbackNames.length; i++)
        {
            var callbackName = ownerCallbackNames[i];
            var callbackNode = ownerCallbackNodes[i];
            var callbackEvent = ownerCallbackEvents[i];

            //cc.log("Setting "+callbackName+" for "+owner);
            //callbackNode.setCallback(owner[callbackName], owner);
            
            if( callbackEvent == cc.BuilderReader.CONTROL_EVENTS_NOT_DEFINED )
            {
                callbackNode.setCallback(owner.controller[callbackName], owner.controller);
            }
            else
            {
                //cc.log('Owner Control callback: '+callbackName+', controller: '+owner.controllerName+', event: '+callbackEvent);
                callbackNode.setCallback(owner.controller[callbackName], callbackEvent, owner.controller);
            }
        }

        // Variables
        var ownerOutletNames = reader.getOwnerOutletNames();
        var ownerOutletNodes = reader.getOwnerOutletNodes();

        for (var i = 0; i < ownerOutletNames.length; i++)
        {
            var outletName = ownerOutletNames[i];
            var outletNode = ownerOutletNodes[i];

            //owner[outletName] = outletNode;
            owner.controller[outletName] = outletNode;
        }
    }

    var nodesWithAnimationManagers = reader.getNodesWithAnimationManagers();
    var animationManagersForNodes = reader.getAnimationManagersForNodes();

    // Attach animation managers to nodes and assign root node callbacks and member variables
    for (var i = 0; i < nodesWithAnimationManagers.length; i++)
    {
        var innerNode = nodesWithAnimationManagers[i];
        var animationManager = animationManagersForNodes[i];

        innerNode.animationManager = animationManager;

        var documentControllerName = animationManager.getDocumentControllerName();
        if (!documentControllerName) continue;

        // Create a document controller
        var controller = new _ccbGlobalContext[documentControllerName]();
        controller.controllerName = documentControllerName;

        innerNode.controller = controller;
        controller.rootNode = innerNode;

        // Callbacks
        var documentCallbackNames = animationManager.getDocumentCallbackNames();
        var documentCallbackNodes = animationManager.getDocumentCallbackNodes();
        var documentCallbackEvents = animationManager.getDocumentCallbackEvents();

        for (var j = 0; j < documentCallbackNames.length; j++)
        {
            var callbackName = documentCallbackNames[j];
            var callbackNode = documentCallbackNodes[j];
            var callbackEvent = documentCallbackEvents[j];
            
            if( callbackEvent == cc.BuilderReader.CONTROL_EVENTS_NOT_DEFINED )
            {
                callbackNode.setCallback(controller[callbackName], controller);
            }
            else
            {
                //cc.log('Document Control callback: '+callbackName+', controller: '+documentControllerName+', event: '+callbackEvent);
                callbackNode.setCallback(controller[callbackName], callbackEvent, controller);
            }
        }


        // Variables
        var documentOutletNames = animationManager.getDocumentOutletNames();
        var documentOutletNodes = animationManager.getDocumentOutletNodes();

        for (var j = 0; j < documentOutletNames.length; j++)
        {
            var outletName = documentOutletNames[j];
            var outletNode = documentOutletNodes[j];

            controller[outletName] = outletNode;
        }

        if (typeof(controller.onDidLoadFromCCB) == "function")
        {
            controller.onDidLoadFromCCB();
        }
    }

    return node;
};

cc.BuilderReader.loadAsScene = function(file, owner, parentSize)
{
    var node = cc.BuilderReader.load(file, owner, parentSize);
    var scene = cc.Scene.create();
    scene.addChild( node );

    return scene;
};
