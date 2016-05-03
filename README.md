# gooey-for-framer
Gooey effect for framer. Work well in Chrome broweser

## Install
Move the module in a Framer project folder "Modules" 1. Download Gooey.coffee file 2. Create a framer project and drop Gooey.coffee inside the /modules folder 3. Add {GooeyLayer} = require "Gooey" at the top of your document (case-sensitive).

## Usage
Create gooey layer

```coffeescript
goo = new GooeyLayer
```
## Properties
```coffeescript
childBlur: true
gooBlur: 60
gooMatrix: "0 0 0 19 -9"
```