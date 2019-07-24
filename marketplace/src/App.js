import React, { Component } from 'react'
import './App.css'

import { Ocean } from '@oceanprotocol/squid'
import Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider)
window.ethereum.enable()

class App extends Component {
  async componentDidMount() {
    this.ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: 'http://localhost:8545',
      aquariusUri: 'http://localhost:5000',
      brizoUri: 'http://localhost:8030',
      brizoAddress: '0x00bd138abd70e2f00903268f3db08f2d25677c9e',
      parityUri: 'http://localhost:8545',
      secretStoreUri: 'http://localhost:12001'
    })
    console.log('Finished loading contracts.')
  }
  render() {
    return (
      <div className="App App-header">
        <h1>Marketplace app</h1>
      </div>
    )
  }
}

export default App