require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"GooeyCSS":[function(require,module,exports){
var GooeyLayerCSS,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

GooeyLayerCSS = (function(superClass) {
  extend(GooeyLayerCSS, superClass);

  function GooeyLayerCSS(options) {
    if (options == null) {
      options = {};
    }
    options.name = "GooeyLayerCSS";
    window.gooBlur = options.gooBlur != null ? options.gooBlur : options.gooBlur = 5;
    window.gooContrast = options.gooContrast != null ? options.gooContrast : options.gooContrast = 10;
    GooeyLayerCSS.__super__.constructor.call(this, options);
    this.style.filter = "blur(" + gooBlur + "px) contrast(" + gooContrast + ")";
    this.style.webkitFilter = "blur(" + gooBlur + "px) contrast(" + gooContrast + ")";
    this.style.width = 0;
    this.style.height = 0;
    this._element.classList.add("Gooey");
  }

  return GooeyLayerCSS;

})(Layer);

exports.GooeyLayerCSS = GooeyLayerCSS;


},{}],"Gooey":[function(require,module,exports){
var GooeyLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

GooeyLayer = (function(superClass) {
  var defsInsert, defsInsertChild;

  extend(GooeyLayer, superClass);

  function GooeyLayer(options) {
    var childFlag;
    if (options == null) {
      options = {};
    }
    options.name = "GooeyLayer";
    childFlag = options.childBlur != null ? options.childBlur : options.childBlur = true;
    window.gooBlur = options.gooBlur != null ? options.gooBlur : options.gooBlur = 30;
    window.gooMatrix = options.gooMatrix != null ? options.gooMatrix : options.gooMatrix = "0 0 0 19 -9";
    GooeyLayer.__super__.constructor.call(this, options);
    this.style.width = 0;
    this.style.height = 0;
    this.style.webkitFilter = 'url("#goo")';
    this.style.filter = 'url("#goo")';
    this._element.classList.add("Gooey");
    if (childFlag === true) {
      defsInsertChild();
    } else {
      defsInsert();
    }
  }

  defsInsert = function() {
    var defs;
    defs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    defs.innerHTML = "<defs> <filter id=\"goo\"> <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"" + gooBlur + "\" result=\"blur\" /> <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  " + gooMatrix + "\" result=\"goo\"/> <feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"/> </filter> </defs>";
    return document.body.appendChild(defs);
  };

  defsInsertChild = function() {
    var defs;
    defs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    defs.innerHTML = "<defs> <filter id=\"goo\"> <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"" + gooBlur + "\" result=\"blur\" /> <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  " + gooMatrix + "\" result=\"goo\"/> </filter> </defs>";
    return document.body.appendChild(defs);
  };

  return GooeyLayer;

})(Layer);

exports.GooeyLayer = GooeyLayer;


},{}],"TextLayer":[function(require,module,exports){
var TextLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

TextLayer = (function(superClass) {
  extend(TextLayer, superClass);

  function TextLayer(options) {
    if (options == null) {
      options = {};
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = options.setup ? "hsla(60, 90%, 47%, .4)" : "transparent";
    }
    if (options.color == null) {
      options.color = "red";
    }
    if (options.lineHeight == null) {
      options.lineHeight = 1.25;
    }
    if (options.fontFamily == null) {
      options.fontFamily = "Helvetica";
    }
    if (options.fontSize == null) {
      options.fontSize = 20;
    }
    if (options.text == null) {
      options.text = "Use layer.text to add text";
    }
    TextLayer.__super__.constructor.call(this, options);
    this.style.whiteSpace = "pre-line";
  }

  TextLayer.prototype.setStyle = function(property, value, pxSuffix) {
    if (pxSuffix == null) {
      pxSuffix = false;
    }
    this.style[property] = pxSuffix ? value + "px" : value;
    this.emit("change:" + property, value);
    if (this.doAutoSize) {
      return this.calcSize();
    }
  };

  TextLayer.prototype.calcSize = function() {
    var constraints, size, sizeAffectingStyles;
    sizeAffectingStyles = {
      lineHeight: this.style["line-height"],
      fontSize: this.style["font-size"],
      fontWeight: this.style["font-weight"],
      paddingTop: this.style["padding-top"],
      paddingRight: this.style["padding-right"],
      paddingBottom: this.style["padding-bottom"],
      paddingLeft: this.style["padding-left"],
      textTransform: this.style["text-transform"],
      borderWidth: this.style["border-width"],
      letterSpacing: this.style["letter-spacing"],
      fontFamily: this.style["font-family"],
      fontStyle: this.style["font-style"],
      fontVariant: this.style["font-variant"]
    };
    constraints = {};
    if (this.doAutoSizeHeight) {
      constraints.width = this.width;
    }
    size = Utils.textSize(this.text, sizeAffectingStyles, constraints);
    if (this.style.textAlign === "right") {
      this.width = size.width;
      this.x = this.x - this.width;
    } else {
      this.width = size.width;
    }
    return this.height = size.height;
  };

  TextLayer.define("autoSize", {
    get: function() {
      return this.doAutoSize;
    },
    set: function(value) {
      this.doAutoSize = value;
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("autoSizeHeight", {
    set: function(value) {
      this.doAutoSize = value;
      this.doAutoSizeHeight = value;
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("contentEditable", {
    set: function(boolean) {
      this._element.contentEditable = boolean;
      this.ignoreEvents = !boolean;
      return this.on("input", function() {
        if (this.doAutoSize) {
          return this.calcSize();
        }
      });
    }
  });

  TextLayer.define("text", {
    get: function() {
      return this._element.textContent;
    },
    set: function(value) {
      this._element.textContent = value;
      this.emit("change:text", value);
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("fontFamily", {
    get: function() {
      return this.style.fontFamily;
    },
    set: function(value) {
      return this.setStyle("fontFamily", value);
    }
  });

  TextLayer.define("fontSize", {
    get: function() {
      return this.style.fontSize.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("fontSize", value, true);
    }
  });

  TextLayer.define("lineHeight", {
    get: function() {
      return this.style.lineHeight;
    },
    set: function(value) {
      return this.setStyle("lineHeight", value);
    }
  });

  TextLayer.define("fontWeight", {
    get: function() {
      return this.style.fontWeight;
    },
    set: function(value) {
      return this.setStyle("fontWeight", value);
    }
  });

  TextLayer.define("fontStyle", {
    get: function() {
      return this.style.fontStyle;
    },
    set: function(value) {
      return this.setStyle("fontStyle", value);
    }
  });

  TextLayer.define("fontVariant", {
    get: function() {
      return this.style.fontVariant;
    },
    set: function(value) {
      return this.setStyle("fontVariant", value);
    }
  });

  TextLayer.define("padding", {
    set: function(value) {
      this.setStyle("paddingTop", value, true);
      this.setStyle("paddingRight", value, true);
      this.setStyle("paddingBottom", value, true);
      return this.setStyle("paddingLeft", value, true);
    }
  });

  TextLayer.define("paddingTop", {
    get: function() {
      return this.style.paddingTop.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingTop", value, true);
    }
  });

  TextLayer.define("paddingRight", {
    get: function() {
      return this.style.paddingRight.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingRight", value, true);
    }
  });

  TextLayer.define("paddingBottom", {
    get: function() {
      return this.style.paddingBottom.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingBottom", value, true);
    }
  });

  TextLayer.define("paddingLeft", {
    get: function() {
      return this.style.paddingLeft.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingLeft", value, true);
    }
  });

  TextLayer.define("textAlign", {
    set: function(value) {
      return this.setStyle("textAlign", value);
    }
  });

  TextLayer.define("textTransform", {
    get: function() {
      return this.style.textTransform;
    },
    set: function(value) {
      return this.setStyle("textTransform", value);
    }
  });

  TextLayer.define("letterSpacing", {
    get: function() {
      return this.style.letterSpacing.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("letterSpacing", value, true);
    }
  });

  TextLayer.define("length", {
    get: function() {
      return this.text.length;
    }
  });

  return TextLayer;

})(Layer);

exports.TextLayer = TextLayer;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGF2ZWxsYXB0ZXYvRHJvcGJveC9nb295ZS9Hb29leS5mcmFtZXIvbW9kdWxlcy9Hb29leUNTUy5jb2ZmZWUiLCIvVXNlcnMvcGF2ZWxsYXB0ZXYvRHJvcGJveC9nb295ZS9Hb29leS5mcmFtZXIvbW9kdWxlcy9Hb29leS5jb2ZmZWUiLCIvVXNlcnMvcGF2ZWxsYXB0ZXYvRHJvcGJveC9nb295ZS9Hb29leS5mcmFtZXIvbW9kdWxlcy9UZXh0TGF5ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxhQUFBO0VBQUE7OztBQUFNOzs7RUFFUSx1QkFBQyxPQUFEOztNQUFDLFVBQVE7O0lBQ3JCLE9BQU8sQ0FBQyxJQUFSLEdBQWU7SUFDZixNQUFNLENBQUMsT0FBUCw2QkFBaUIsT0FBTyxDQUFDLFVBQVIsT0FBTyxDQUFDLFVBQVc7SUFDcEMsTUFBTSxDQUFDLFdBQVAsaUNBQXFCLE9BQU8sQ0FBQyxjQUFSLE9BQU8sQ0FBQyxjQUFlO0lBQzVDLCtDQUFNLE9BQU47SUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBZ0IsT0FBQSxHQUFVLE9BQVYsR0FBb0IsZUFBcEIsR0FBc0MsV0FBdEMsR0FBb0Q7SUFDcEUsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLEdBQXNCLE9BQUEsR0FBVSxPQUFWLEdBQW9CLGVBQXBCLEdBQXNDLFdBQXRDLEdBQW9EO0lBQzFFLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlO0lBQ2YsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLEdBQWdCO0lBQ2hCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQXBCLENBQXdCLE9BQXhCO0VBVFk7Ozs7R0FGYzs7QUFhNUIsT0FBTyxDQUFDLGFBQVIsR0FBd0I7Ozs7QUNieEIsSUFBQSxVQUFBO0VBQUE7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O0dBREQ7O0VBR0EsU0FBQyxDQUFBLE1BQUQsQ0FBUSxRQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxJQUFJLENBQUM7SUFBVCxDQUFMO0dBREQ7Ozs7R0EzR3VCOztBQWdIeEIsT0FBTyxDQUFDLFNBQVIsR0FBb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgR29vZXlMYXllckNTUyBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMubmFtZSA9IFwiR29vZXlMYXllckNTU1wiXG5cdFx0d2luZG93Lmdvb0JsdXIgPSBvcHRpb25zLmdvb0JsdXIgPz0gNVxuXHRcdHdpbmRvdy5nb29Db250cmFzdCA9IG9wdGlvbnMuZ29vQ29udHJhc3QgPz0gMTBcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QHN0eWxlLmZpbHRlciA9IFwiYmx1cihcIiArIGdvb0JsdXIgKyBcInB4KSBjb250cmFzdChcIiArIGdvb0NvbnRyYXN0ICsgXCIpXCJcblx0XHRAc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKFwiICsgZ29vQmx1ciArIFwicHgpIGNvbnRyYXN0KFwiICsgZ29vQ29udHJhc3QgKyBcIilcIlxuXHRcdEBzdHlsZS53aWR0aCA9IDBcblx0XHRAc3R5bGUuaGVpZ2h0ID0gMFxuXHRcdEBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiR29vZXlcIilcblxuZXhwb3J0cy5Hb29leUxheWVyQ1NTID0gR29vZXlMYXllckNTU1xuIiwiY2xhc3MgR29vZXlMYXllciBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMubmFtZSA9IFwiR29vZXlMYXllclwiXG5cdFx0Y2hpbGRGbGFnID0gb3B0aW9ucy5jaGlsZEJsdXIgPz0gdHJ1ZVxuXHRcdHdpbmRvdy5nb29CbHVyID0gb3B0aW9ucy5nb29CbHVyID89IDMwXG5cdFx0d2luZG93Lmdvb01hdHJpeCA9IG9wdGlvbnMuZ29vTWF0cml4ID89IFwiMCAwIDAgMTkgLTlcIlxuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRAc3R5bGUud2lkdGggPSAwXG5cdFx0QHN0eWxlLmhlaWdodCA9IDBcblx0XHRAc3R5bGUud2Via2l0RmlsdGVyID0gJ3VybChcIiNnb29cIiknXG5cdFx0QHN0eWxlLmZpbHRlciA9ICd1cmwoXCIjZ29vXCIpJ1xuXHRcdEBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiR29vZXlcIilcblx0XHRpZiBjaGlsZEZsYWcgaXMgdHJ1ZVxuICAgICAgICBcdGRlZnNJbnNlcnRDaGlsZCgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRkZWZzSW5zZXJ0KClcblxuXG5cdGRlZnNJbnNlcnQgPSAtPlxuICAgICAgICBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIGRlZnMuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiPGRlZnM+XG5cdFx0ICAgICAgPGZpbHRlciBpZD1cXFwiZ29vXFxcIj5cblx0XHQgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cXFwiU291cmNlR3JhcGhpY1xcXCIgc3RkRGV2aWF0aW9uPVxcXCJcIiArIGdvb0JsdXIgKyBcIlxcXCIgcmVzdWx0PVxcXCJibHVyXFxcIiAvPlxuXHRcdCAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XFxcImJsdXJcXFwiIG1vZGU9XFxcIm1hdHJpeFxcXCIgdmFsdWVzPVxcXCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICBcIiArIGdvb01hdHJpeCArIFwiXFxcIiByZXN1bHQ9XFxcImdvb1xcXCIvPlxuXHRcdCAgICAgICAgPGZlQ29tcG9zaXRlIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBpbjI9XFxcImdvb1xcXCIgb3BlcmF0b3I9XFxcImF0b3BcXFwiLz5cblx0XHQgICAgICA8L2ZpbHRlcj5cblx0XHQgICAgPC9kZWZzPlwiXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVmcylcblxuICAgIGRlZnNJbnNlcnRDaGlsZCA9IC0+XG4gICAgICAgIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgZGVmcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCI8ZGVmcz5cblx0XHQgICAgICA8ZmlsdGVyIGlkPVxcXCJnb29cXFwiPlxuXHRcdCAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVxcXCJTb3VyY2VHcmFwaGljXFxcIiBzdGREZXZpYXRpb249XFxcIlwiICsgZ29vQmx1ciArIFwiXFxcIiByZXN1bHQ9XFxcImJsdXJcXFwiIC8+XG5cdFx0ICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cXFwiYmx1clxcXCIgbW9kZT1cXFwibWF0cml4XFxcIiB2YWx1ZXM9XFxcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIFwiICsgZ29vTWF0cml4ICsgXCJcXFwiIHJlc3VsdD1cXFwiZ29vXFxcIi8+XG5cdFx0ICAgICAgPC9maWx0ZXI+XG5cdFx0ICAgIDwvZGVmcz5cIlxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlZnMpXG5cbmV4cG9ydHMuR29vZXlMYXllciA9IEdvb2V5TGF5ZXJcbiIsImNsYXNzIFRleHRMYXllciBleHRlbmRzIExheWVyXG5cdFx0XG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJoc2xhKDYwLCA5MCUsIDQ3JSwgLjQpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcblx0XHRvcHRpb25zLmNvbG9yID89IFwicmVkXCJcblx0XHRvcHRpb25zLmxpbmVIZWlnaHQgPz0gMS4yNVxuXHRcdG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIkhlbHZldGljYVwiXG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAyMFxuXHRcdG9wdGlvbnMudGV4dCA/PSBcIlVzZSBsYXllci50ZXh0IHRvIGFkZCB0ZXh0XCJcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QHN0eWxlLndoaXRlU3BhY2UgPSBcInByZS1saW5lXCIgIyBhbGxvdyBcXG4gaW4gLnRleHRcblx0XHRcblx0c2V0U3R5bGU6IChwcm9wZXJ0eSwgdmFsdWUsIHB4U3VmZml4ID0gZmFsc2UpIC0+XG5cdFx0QHN0eWxlW3Byb3BlcnR5XSA9IGlmIHB4U3VmZml4IHRoZW4gdmFsdWUrXCJweFwiIGVsc2UgdmFsdWVcblx0XHRAZW1pdChcImNoYW5nZToje3Byb3BlcnR5fVwiLCB2YWx1ZSlcblx0XHRpZiBAZG9BdXRvU2l6ZSB0aGVuIEBjYWxjU2l6ZSgpXG5cdFx0XG5cdGNhbGNTaXplOiAtPlxuXHRcdHNpemVBZmZlY3RpbmdTdHlsZXMgPVxuXHRcdFx0bGluZUhlaWdodDogQHN0eWxlW1wibGluZS1oZWlnaHRcIl1cblx0XHRcdGZvbnRTaXplOiBAc3R5bGVbXCJmb250LXNpemVcIl1cblx0XHRcdGZvbnRXZWlnaHQ6IEBzdHlsZVtcImZvbnQtd2VpZ2h0XCJdXG5cdFx0XHRwYWRkaW5nVG9wOiBAc3R5bGVbXCJwYWRkaW5nLXRvcFwiXVxuXHRcdFx0cGFkZGluZ1JpZ2h0OiBAc3R5bGVbXCJwYWRkaW5nLXJpZ2h0XCJdXG5cdFx0XHRwYWRkaW5nQm90dG9tOiBAc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXVxuXHRcdFx0cGFkZGluZ0xlZnQ6IEBzdHlsZVtcInBhZGRpbmctbGVmdFwiXVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogQHN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl1cblx0XHRcdGJvcmRlcldpZHRoOiBAc3R5bGVbXCJib3JkZXItd2lkdGhcIl1cblx0XHRcdGxldHRlclNwYWNpbmc6IEBzdHlsZVtcImxldHRlci1zcGFjaW5nXCJdXG5cdFx0XHRmb250RmFtaWx5OiBAc3R5bGVbXCJmb250LWZhbWlseVwiXVxuXHRcdFx0Zm9udFN0eWxlOiBAc3R5bGVbXCJmb250LXN0eWxlXCJdXG5cdFx0XHRmb250VmFyaWFudDogQHN0eWxlW1wiZm9udC12YXJpYW50XCJdXG5cdFx0Y29uc3RyYWludHMgPSB7fVxuXHRcdGlmIEBkb0F1dG9TaXplSGVpZ2h0IHRoZW4gY29uc3RyYWludHMud2lkdGggPSBAd2lkdGhcblx0XHRzaXplID0gVXRpbHMudGV4dFNpemUgQHRleHQsIHNpemVBZmZlY3RpbmdTdHlsZXMsIGNvbnN0cmFpbnRzXG5cdFx0aWYgQHN0eWxlLnRleHRBbGlnbiBpcyBcInJpZ2h0XCJcblx0XHRcdEB3aWR0aCA9IHNpemUud2lkdGhcblx0XHRcdEB4ID0gQHgtQHdpZHRoXG5cdFx0ZWxzZVxuXHRcdFx0QHdpZHRoID0gc2l6ZS53aWR0aFxuXHRcdEBoZWlnaHQgPSBzaXplLmhlaWdodFxuXG5cdEBkZWZpbmUgXCJhdXRvU2l6ZVwiLFxuXHRcdGdldDogLT4gQGRvQXV0b1NpemVcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAZG9BdXRvU2l6ZSA9IHZhbHVlXG5cdFx0XHRpZiBAZG9BdXRvU2l6ZSB0aGVuIEBjYWxjU2l6ZSgpXG5cdEBkZWZpbmUgXCJhdXRvU2l6ZUhlaWdodFwiLFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBkb0F1dG9TaXplID0gdmFsdWVcblx0XHRcdEBkb0F1dG9TaXplSGVpZ2h0ID0gdmFsdWVcblx0XHRcdGlmIEBkb0F1dG9TaXplIHRoZW4gQGNhbGNTaXplKClcblx0QGRlZmluZSBcImNvbnRlbnRFZGl0YWJsZVwiLFxuXHRcdHNldDogKGJvb2xlYW4pIC0+XG5cdFx0XHRAX2VsZW1lbnQuY29udGVudEVkaXRhYmxlID0gYm9vbGVhblxuXHRcdFx0QGlnbm9yZUV2ZW50cyA9ICFib29sZWFuXG5cdFx0XHRAb24gXCJpbnB1dFwiLCAtPiBAY2FsY1NpemUoKSBpZiBAZG9BdXRvU2l6ZVxuXHRAZGVmaW5lIFwidGV4dFwiLFxuXHRcdGdldDogLT4gQF9lbGVtZW50LnRleHRDb250ZW50XG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX2VsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZVxuXHRcdFx0QGVtaXQoXCJjaGFuZ2U6dGV4dFwiLCB2YWx1ZSlcblx0XHRcdGlmIEBkb0F1dG9TaXplIHRoZW4gQGNhbGNTaXplKClcblx0QGRlZmluZSBcImZvbnRGYW1pbHlcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udEZhbWlseVxuXHRcdHNldDogKHZhbHVlKSAtPiBAc2V0U3R5bGUoXCJmb250RmFtaWx5XCIsIHZhbHVlKVxuXHRAZGVmaW5lIFwiZm9udFNpemVcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udFNpemUucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwiZm9udFNpemVcIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJsaW5lSGVpZ2h0XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmxpbmVIZWlnaHQgXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImxpbmVIZWlnaHRcIiwgdmFsdWUpXG5cdEBkZWZpbmUgXCJmb250V2VpZ2h0XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmZvbnRXZWlnaHQgXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRXZWlnaHRcIiwgdmFsdWUpXG5cdEBkZWZpbmUgXCJmb250U3R5bGVcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udFN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRTdHlsZVwiLCB2YWx1ZSlcblx0QGRlZmluZSBcImZvbnRWYXJpYW50XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmZvbnRWYXJpYW50XG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRWYXJpYW50XCIsIHZhbHVlKVxuXHRAZGVmaW5lIFwicGFkZGluZ1wiLFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBzZXRTdHlsZShcInBhZGRpbmdUb3BcIiwgdmFsdWUsIHRydWUpXG5cdFx0XHRAc2V0U3R5bGUoXCJwYWRkaW5nUmlnaHRcIiwgdmFsdWUsIHRydWUpXG5cdFx0XHRAc2V0U3R5bGUoXCJwYWRkaW5nQm90dG9tXCIsIHZhbHVlLCB0cnVlKVxuXHRcdFx0QHNldFN0eWxlKFwicGFkZGluZ0xlZnRcIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJwYWRkaW5nVG9wXCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwicGFkZGluZ1RvcFwiLCB2YWx1ZSwgdHJ1ZSlcblx0QGRlZmluZSBcInBhZGRpbmdSaWdodFwiLCBcblx0XHRnZXQ6IC0+IEBzdHlsZS5wYWRkaW5nUmlnaHQucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwicGFkZGluZ1JpZ2h0XCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwicGFkZGluZ0JvdHRvbVwiLCBcblx0XHRnZXQ6IC0+IEBzdHlsZS5wYWRkaW5nQm90dG9tLnJlcGxhY2UoXCJweFwiLFwiXCIpXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInBhZGRpbmdCb3R0b21cIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJwYWRkaW5nTGVmdFwiLFxuXHRcdGdldDogLT4gQHN0eWxlLnBhZGRpbmdMZWZ0LnJlcGxhY2UoXCJweFwiLFwiXCIpXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInBhZGRpbmdMZWZ0XCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwidGV4dEFsaWduXCIsXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInRleHRBbGlnblwiLCB2YWx1ZSlcblx0QGRlZmluZSBcInRleHRUcmFuc2Zvcm1cIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUudGV4dFRyYW5zZm9ybSBcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwidGV4dFRyYW5zZm9ybVwiLCB2YWx1ZSlcblx0QGRlZmluZSBcImxldHRlclNwYWNpbmdcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUubGV0dGVyU3BhY2luZy5yZXBsYWNlKFwicHhcIixcIlwiKVxuXHRcdHNldDogKHZhbHVlKSAtPiBAc2V0U3R5bGUoXCJsZXR0ZXJTcGFjaW5nXCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwibGVuZ3RoXCIsIFxuXHRcdGdldDogLT4gQHRleHQubGVuZ3RoXG5cblxuXG5leHBvcnRzLlRleHRMYXllciA9IFRleHRMYXllclxuIl19
