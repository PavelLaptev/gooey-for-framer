# gooey-for-framer
Gooey effect for framer. Work well in Chrome browser

## Install
Move the module in a Framer project folder "Modules" 1. Download Gooey.coffee file 2. Create a framer project and drop Gooey.coffee inside the /modules folder 3. Add {GooeyLayer} = require "Gooey" at the top of your document (case-sensitive).

## Usage
Create gooey layer

```coffeescript
goo = new GooeyLayer
```
## Properties
```coffeescript
childBlur: true #or false
gooBlur: 60 #blur density
gooMatrix: "0 0 0 19 -9" #custom matrix properies
```

[![ScreenShot](https://dl.dropboxusercontent.com/s/uqd409rfe0k7sk7/you_prev.png?dl=0)](https://youtu.be/-vdtWpoNdDg)