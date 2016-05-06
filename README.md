# electron-installer-codesign [![travis][travis_img]][travis_url] [![npm][npm_img]][npm_url]

> Sign your electron apps on OSX.

## Installation

```
# For use in npm scripts
npm i electron-installer-codesign --save-dev

# For use from cli
npm i electron-installer-codesign -g
```

## Usage

To obtain a signing identity, join the [Mac Developer Program][mac-dev].
More info is available in the [Mac Developer documentation][codesign-intro].

```
Usage: electron-installer-codesign <path/to/.app> <Identity>

Sign your electron apps on OSX.

Usage:
  electron-installer-codesign ./FooBar-darwin-x64/FooBar.app "Developer ID Application: Lucas Hrabovsky"

Args:
  <appPath>            Path to your `.app` directory.
  <identity>           Keychain query of a Code Signing Identity obtained from Apple.

Options:
  --debug              Enable debug messages.
  --overwrite          Overwrite any existing DMG.
  -h --help            Show this screen.
  --version            Show version.
```

### API

```javascript
var codesign = require('electron-installer-codesign')
codesign(opts, function done (err, filePaths) { })
```
#### codesign(opts, callback)

##### opts
**Required**
`appPath` - *String*
The `.app` directory generated by [electron-packager][electron-packager].

`identity` - *String*
SHA-1 signature or query (e.g. `Developer ID Application <your_name>`) of a Code Signing Identity obtained from Apple.

##### callback

`err` - *Error*
Contains errors if any.

`filePaths` *Array*
Paths successfully signed and verified.

## License

Apache 2.0

[travis_img]: https://img.shields.io/travis/mongodb-js/electron-installer-codesign.svg
[travis_url]: https://travis-ci.org/mongodb-js/electron-installer-codesign
[npm_img]: https://img.shields.io/npm/v/electron-installer-codesign.svg
[npm_url]: https://npmjs.org/package/electron-installer-codesign
[electron-packager]: https://github.com/maxogden/electron-packager
[obtain-signing-identity]: https://developer.apple.com/library/prerelease/ios/documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html#//apple_ref/doc/uid/TP40005929-CH4-SW1
[mac-dev]: https://developer.apple.com/programs/
[codesign-guide]: http://helpnet.flexerasoftware.com/installanywhere2012/Content/helplibrary/SigningMacOSX.htm
[codesign-intro]: https://developer.apple.com/library/mac/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html
