# Lunify Electron GUI Wallet

![Screenshot](https://i.imgur.com/Gou8OMu.jpg "Screenshot")

### Introduction
Lunify is a private cryptocurrency based on Monero. Lunify aims to provide everyone the ability to mine and transact with ease and security.
More information on the project can be found on the [website](https://lunify.xyz).

### About this project

This is the new electron GUI for Lunify. It is open source and completely free to use without restrictions, anyone may create an alternative implementation of the Lunify Electron GUI that uses the protocol and network in a compatible manner.
Please submit any changes as pull requests to the development branch, all changes are assessed in the development branch before being merged to master, release tags are considered stable builds for the GUI.

#### Pre-requisites
- Download latest [Lunifyd](https://github.com/LunifyProject/Lunify/releases/latest)

#### Build instructions
```
nvm use 11.9.0
npm install -g quasar-cli
https://github.com/LunfiProject/lunify-gui-wallet/
cd lunify-gui-wallet
cp path_to_lunify_binaries/lunifyd bin/
cp path_to_lunify_binaries/lunify-wallet-rpc bin/
npm install
```

For dev:
```
npm run dev
```

For building:

**Note:** This will only build the binaries for the system you run the command on. Running this command on `linux` will only make `linux` binaries, no `mac` or `windows` binaries.
```
npm run build
```