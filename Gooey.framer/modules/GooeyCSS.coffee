class GooeyLayerCSS extends Layer

	constructor: (options={}) ->
		options.name = "GooeyLayerCSS"
		window.gooBlur = options.gooBlur ?= 5
		window.gooContrast = options.gooContrast ?= 10
		super options
		@style.filter = "blur(" + gooBlur + "px) contrast(" + gooContrast + ")"
		@style.webkitFilter = "blur(" + gooBlur + "px) contrast(" + gooContrast + ")"
		@style.width = 0
		@style.height = 0
		@_element.classList.add("Gooey")

exports.GooeyLayerCSS = GooeyLayerCSS
