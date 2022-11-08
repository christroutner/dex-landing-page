/*
  Component for looking up the balance of a BCH address.
*/

// Global npm libraries
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

// let _this

class GetBalance extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      balance: '',
      textInput: '',
      wallet: props.wallet
    }

    // Bind 'this' to event handlers
    // this.handleGetBalance = this.handleGetBalance.bind(this)

    // _this = this
  }

  render () {
    return (

      <>
        <Container>
          <Row>
            <Col className='text-break' style={{ textAlign: 'center' }}>
              <h1>PSF Decentralized Exchanges</h1>
              <Image style={{maxWidth: '300px'}} fluid src='https://psfoundation.cash/static/psf-logo-32a2c411985bbbf299687b06c3224384.png' />
              <br /><br />
              <p>
                The <a href="https://psfoundation.cash/" target="_blank" rel="noreferrer">Permissionless Software Foundation</a> (PSF)
                has built decentralized exchanges (DEXs) on multiple blockchains. This page links to some of those demos.
              </p>
              <p>
                Unlike a centralized exchange (CEX), there is no signup or user
                account in a DEX. Trades take place peer-to-peer, with no
                intermediary. Unlike other DEXs, sellers run software on their
                own home computers. There is no smart contract, just
                the <a href="http://p2wdb.com" target="_blank" rel="noreferrer">P2WDB</a> (pay-to-write database),
                which is used to store data as the buyer and seller negotiate a
                trade. The demos on this page allow Buyers to buy tokens, but Sellers must
                run their own software. Find out more:
              </p>
              <div style={{textAlign: 'center'}}>
                <Button variant="success" href="https://bch-dex-docs.fullstack.cash/" target="_blank" rel="noreferrer">
                  DEX Documentation
                </Button>
              </div>
            </Col>
          </Row>
          <br />

          <Row>
            <Col className='text-break'>
              <h2>Bitcoin Cash (BCH)</h2>
              <p>
                The BCH DEX is a decentralized network for trading SLP tokens on
                the Bitcoin Cash blockchain. Clicking the button below will
                take you to a Buyer-only demo. You can browse the market and buy
                tokens, but you can not sell them. In order to sell tokens, you
                will need to install software on your home computer.
              </p>
              <div style={{textAlign: 'center'}}>
                <Button variant="success" href="https://dex-demo.fullstack.cash/" target="_blank" rel="noreferrer">
                  BCH DEX - Buyer App
                </Button>
              </div>
            </Col>
          </Row>
          <br />

          <Row>
            <Col className='text-break'>
              <h2>eCash (XEC)</h2>
              <p>
                eCash (XEC) is a fork of the Bitcoin Cash blockchain. SLP tokens on that
                blockchain are called eTokens. Thanks to the similarities between
                BCH and XEC, the same DEX software works with very little
                modification. Clicking the button below will
                take you to a Buyer-only demo. You can browse the market and buy
                tokens, but you can not sell them. In order to sell tokens, you
                will need to install software on your home computer.
              </p>
              <div style={{textAlign: 'center'}}>
                <Button variant="success" href="https://ecash-dex-demo.fullstack.cash/" target="_blank" rel="noreferrer">
                  XEC DEX - Buyer App
                </Button>
              </div>
            </Col>
          </Row>
          <br />

          <Row>
            <Col className='text-break'>
              <h2>Avalanche (AVAX)</h2>
              <p>
                <a href="https://www.avalabs.org/" target="_blank" rel="noreferrer">Ava Labs</a> sponsored
                a grant for the PSF to fork the DEX software to the AVAX X-Chain blockchain.
                This is the least developed DEX, as some additional infrastructure
                is required to be built, in order to make a good user experience.
                But the DEX is fully functional with a lot of patience and technical
                expertise. Details are outlined
                in <a href="https://github.com/Permissionless-Software-Foundation/ava-labs-22-report" target="_blank" rel="noreferrer">this report</a>.
              </p>
              <div style={{textAlign: 'center'}}>
                <Button variant="success" href="https://avax-dex-demo.fullstack.cash/" target="_blank" rel="noopener">
                  AVAX DEX - Buyer App
                </Button>
              </div>
            </Col>
          </Row>
          <br />

        </Container>
      </>
    )
  }
}

export default GetBalance
