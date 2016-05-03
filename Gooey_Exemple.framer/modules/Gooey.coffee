class GooeyLayer extends Layer

	constructor: (options={}) ->
		options.name = "GooeyLayer"
		childFlag = options.childBlur ?= true
		window.gooBlur = options.gooBlur ?= 30
		window.gooMatrix = options.gooMatrix ?= "0 0 0 19 -9"
		super options
		@style.width = 0
		@style.height = 0
		@style.webkitFilter = 'url("#goo")'
		@style.filter = 'url("#goo")'
		@_element.classList.add("Gooey")
		if childFlag is true
        	defsInsertChild()
        else
        	defsInsert()


	defsInsert = ->
        defs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        defs.innerHTML =
            "<defs>
		      <filter id=\"goo\">
		        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"" + gooBlur + "\" result=\"blur\" />
		        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  " + gooMatrix + "\" result=\"goo\"/>
		        <feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"/>
		      </filter>
		    </defs>"
        document.body.appendChild(defs)

    defsInsertChild = ->
        defs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        defs.innerHTML =
            "<defs>
		      <filter id=\"goo\">
		        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"" + gooBlur + "\" result=\"blur\" />
		        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  " + gooMatrix + "\" result=\"goo\"/>
		      </filter>
		    </defs>"
        document.body.appendChild(defs)

exports.GooeyLayer = GooeyLayer
