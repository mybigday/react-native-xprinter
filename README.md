# React Native Xprinter

Xprinter driver currently only support android, and it's not finished yet.

## Installation
### Mostly automatic install

```bash
$ npm install react-native-xprinter --save
$ react-native link
```

## Usage
### Get bluetooth devices
First of all you need get the bluetooth device list, and select one to use.

```js
import { NativeModules } from 'react-native';
import RNXprinter from 'react-native-xprinter';
RNXprinter.initialize();

// Select a printer to use
let printerList = await RNXprinter.getDeviceList();
await RNXprinter.selectDevice(printerList[0].address);

// Or you can use printer pick panel
RNXprinter.pickPrinter();

```

### Print DEMO
After you connected to your printer, try this to make sure everything except yourself is worked perfectly.

```js
await RNXprinter.printDemoPage();
```

### Push things to buffer
Thermal printer is a kind of high speed printer, so we need push all things to the buffer first.

```js
// Push Text
// text: string            # The string you want to print
// size: number            # 0 ~ 7 Level
RNXprinter.pushText("Hello World!!!", 0);

// Push Image
// size: index             # The FLASH index of image
// Currently only supported without download image, you need use your computer to help
RNXprinter.pushFlashImage(0);

// Push Cut Paper
RNXprinter.pushCutPaper();

```

### Print
```js
await RNXprinter.print();
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Roadmap

- [x] Android support
- [x] Save default printer
- [ ] Test coverage
- [x] Printer select panel
- [ ] Download image to printer
- [ ] USB support

## Known Issues

## History

TODO: Write history

## Credits

TODO: Write credits

## License

[MIT](LICENSE.md)