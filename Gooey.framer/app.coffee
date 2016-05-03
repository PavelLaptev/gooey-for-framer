#включаем модуль
{GooeyLayer}  = require "Gooey"

#создаем слой, можно создавать без параметров
goo = new GooeyLayer
	childBlur:true #включает и выключает блюр вложенных эоементов true или false
	gooBlur:60 #параметр отвечает за разблюривание
	gooMatrix: "0 0 0 19 -9" #можно настроить контраст самостоятельно

#слои с эффектом должны ложиться в слой GooeyLayer
layerA = new Layer
	x: 75
	y: 417
	borderRadius: 200
	width: 250
	height: 250
	backgroundColor: "rgba(107,223,255,1)"
	parent: goo
layerA.draggable.enabled = true

layerB = new Layer
	x: 250
	y: 606
	borderRadius: 125
	width: 250
	height: 250
	backgroundColor: "rgba(206,255,104,1)"
	parent: goo
layerB.draggable.enabled = true

layerC = new Layer
	x: 423
	y: 417
	borderRadius: 200
	width: 250
	height: 250
	backgroundColor: "rgba(255,77,38,1)"
	parent: goo
layerC.draggable.enabled = true

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(76,64,176,1)"