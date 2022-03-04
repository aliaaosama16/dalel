# dalel




to prevent flickering:
-webkit-transform-style: preserve-3d;   
-webkit-backface-visibility: hidden;
===============================================================
add icon and splash:

1- npm install -g cordova-res
2- Now we need to create a resources folder at the top of our project and put in two files:
    icon.(png|jpg) must be at least 1024×1024px
    splash.(png|jpg) must be at least 2732×2732px
3- 
make sure you run these
ionic build
ionic cap add ios
ionic cap add android

4- then run these:

cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy

