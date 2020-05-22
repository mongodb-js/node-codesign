# node codesign

> Sign anything for MacOS.

## Installation

```
# For use in npm scripts
npm i node-codesign --save-dev

# For use from cli
npm i node-codesign -g
```

## Usage

To obtain a signing identity, join the [Mac Developer Program][mac-dev].
More info is available in the [Mac Developer documentation][codesign-intro].

```
Usage: node-codesign <path/to/file> <Identity>

Sign your electron apps on OSX.

Usage:
  node-codesign ./FooBar-darwin-x64/FooBar.app "Developer ID Application: Lucas Hrabovsky"

Args:
  <appPath>            Path to your file.
  <identity>           Keychain query of a Code Signing Identity obtained from Apple.

Options:
  --debug              Enable debug messages.
  --overwrite          Overwrite any existing DMG.
  -h --help            Show this screen.
  --version            Show version.
```

### API

```javascript
var codesign = require('node-codesign')
codesign(opts, function done (err, filePaths) { })
```
#### codesign(opts, callback)

##### opts
**Required**
`appPath` - *String*
The file.

`identity` - *String*
SHA-1 signature or query (e.g. `Developer ID Application <your_name>`) of a Code Signing Identity obtained from Apple.

##### callback

`err` - *Error*
Contains errors if any.

`filePaths` *Array*
Path successfully signed and verified.

## License

Apache 2.0

[npm_img]: https://img.shields.io/npm/v/node-codesign.svg
[npm_url]: https://npmjs.org/package/node-codesign
[electron-packager]: https://github.com/maxogden/electron-packager
[obtain-signing-identity]: https://developer.apple.com/library/prerelease/ios/documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html#//apple_ref/doc/uid/TP40005929-CH4-SW1
[mac-dev]: https://developer.apple.com/programs/
[codesign-guide]: http://helpnet.flexerasoftware.com/installanywhere2012/Content/helplibrary/SigningMacOSX.htm
[codesign-intro]: https://developer.apple.com/library/mac/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html
