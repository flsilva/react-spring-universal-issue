This repository was created to reproduce an issue with `react-spring/universal`.

## Tech Stack

It uses the following stack:

- `react 16.8.6`
- `react-native 0.59.4`
- `react-native-web 0.11.2`
- `react-spring 9.0.0-beta.1`

But the issue can also be seen using `react-spring 8.0.19`.

## Running the project

After cloning the project install all dependencies.

#### Running the web app

`yarn/npm start-web`

#### Running the iOS app

`yarn/npm start-native`

`react-native run-ios`

#### Running the Android app

`yarn/npm start-native`

`react-native run-android`

## The error

The following error can be seen on web and native (ios & android):

(Stack trace from web error):

```
Uncaught TypeError: createAnimatedStyle is not a function
    at new AnimatedProps (universal.js:511)
    at universal.js:539
    at universal.js:551
    at renderWithHooks (react-dom.development.js:13450)
    at updateForwardRef (react-dom.development.js:15014)
    at beginWork (react-dom.development.js:16290)
    at performUnitOfWork (react-dom.development.js:20285)
    at workLoop (react-dom.development.js:20326)
    at HTMLUnknownElement.callCallback (react-dom.development.js:147)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:196)
    at invokeGuardedCallback (react-dom.development.js:250)
    at replayUnitOfWork (react-dom.development.js:19509)
    at renderRoot (react-dom.development.js:20439)
    at performWorkOnRoot (react-dom.development.js:21363)
    at performWork (react-dom.development.js:21273)
    at performSyncWork (react-dom.development.js:21247)
    at requestWork (react-dom.development.js:21102)
    at scheduleWork (react-dom.development.js:20915)
    at scheduleRootUpdate (react-dom.development.js:21610)
    at updateContainerAtExpirationTime (react-dom.development.js:21636)
    at updateContainer (react-dom.development.js:21704)
    at ReactRoot.push../node_modules/react-dom/cjs/react-dom.development.js.ReactRoot.render (react-dom.development.js:22017)
    at react-dom.development.js:22169
    at unbatchedUpdates (react-dom.development.js:21492)
    at legacyRenderSubtreeIntoContainer (react-dom.development.js:22165)
    at render (react-dom.development.js:22240)
    at renderApplication (renderApplication.js:38)
    at Object.run (index.js:80)
    at Function.runApplication (index.js:120)
    at Module../src/index.js (index.js:6)
    at __webpack_require__ (bootstrap:781)
    at fn (bootstrap:149)
    at Object.0 (index.js:9)
    at __webpack_require__ (bootstrap:781)
    at checkDeferredModules (bootstrap:45)
    at Array.webpackJsonpCallback [as push] (bootstrap:32)
    at main.chunk.js:1
```

Everything works as expected on web if we import from `react-spring` instead of `react-spring/universal`, and replace `animated(View)` by `animated.div`, and on native if we import from `react-spring/native`. So the problem only happens when we import from `react-spring/universal`.
