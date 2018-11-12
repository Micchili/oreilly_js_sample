$(document).ready(function(){
    'use strict';
    console.log("main.jsを読み込み中");

    // mainCanvasになにか描けるようにする
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // 描画するやつ、インスタンス形成？
    let tool = new Tool();
    
    // hello world
    let c = Shape.Circle(200,200,80);
    c.fillColor = "black";
    let text = new PointText(200,200);
    text.justification = "center";
    text.fillColor = "white";
    text.fontsize = 20;
    text.content = "Hello World";

    // イベントハンドラ
    tool.onMouseDown = function(event){
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = "green";
    }
});