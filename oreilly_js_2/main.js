$(document).ready(function(){
    'use strict';
    console.log("jqueryとpaperを使用しています");
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // 描画するやつ
    let tool = new Tool();
    
    tool.onMouseDown = function(event){
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = "green";
    }

    // paper.view.draw();
})