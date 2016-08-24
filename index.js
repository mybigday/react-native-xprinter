import React from 'react';
import { NativeModules, AsyncStorage } from 'react-native';

let RNXprinter = NativeModules.RNXprinter;

module.exports = {
  initialize: async () => {
    try{
      let address = await AsyncStorage.getItem('@ReactNativeXprinter:default_printer');
      let printerList = await RNXprinter.getDeviceList();
      if(address && address != "" && printerList.find((printer) => { return printer.address == address})){
        console.log('Get default printer:' + address);
        await RNXprinter.selectDevice(address);
      }
    }
    catch(err){
      console.log('No default printer');
    }
  },
  getDeviceList: RNXprinter.getDeviceList,
  selectDevice: async (address) => {
    await RNXprinter.selectDevice(address);
    await AsyncStorage.setItem('@ReactNativeXprinter:default_printer', address);
  },

  pushText: RNXprinter.pushText,
  pushFlashImage: RNXprinter.pushFlashImage,
  pushCutPaper: RNXprinter.pushCutPaper,

  print: RNXprinter.print,
  printDemoPage: RNXprinter.printDemoPage,
};