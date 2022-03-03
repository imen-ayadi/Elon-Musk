import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { products } from './items'
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [items, setItems] = useState(products)
  const [total, setTotal] = useState(0)
  const [initalstate, action] = useState(217000000000)
  const [percent, setPercent] = useState(0)
  const [disable, setDisable] = useState(false);
  const ELON_MUSK_MONEY = 217000000000

  function decrementCount(index) {
    const itemsCopy = items;
    let totalPrice = total;
    let state = initalstate;
    let per = percent;
    for (let i = 0; i < itemsCopy.length; i++) {
      if (itemsCopy[i].id === index) {
        if (itemsCopy[i].quantity !== 0) {
          itemsCopy[i].quantity -= 1
          state += itemsCopy[i].price
          totalPrice -= itemsCopy[i].price
          per = Number((totalPrice / ELON_MUSK_MONEY) * 100).toFixed(6);

          setPercent(per)

        }
        setTotal(totalPrice)
        action(state)
      }

    }
    setItems([...itemsCopy])

  }
  function incrementCount(index) {
    const itemsCopy = items;
    let totalPrice = total
    let state = initalstate;
    let per = percent;

    for (let i = 0; i < itemsCopy.length; i++) {
      if (itemsCopy[i].id === index) {
        itemsCopy[i].quantity += 1
        totalPrice += itemsCopy[i].price
        state -= itemsCopy[i].price
        setTotal(totalPrice)
        action(state)
        per = Number((totalPrice / ELON_MUSK_MONEY) * 100).toFixed(6);


        setPercent(per)
      }
    }
    setItems([...itemsCopy])
  }



  return (
    <div className="App">
      <header className="App-header">

        <img src="/images/Elon.jpg" alt="logo" />
        <h2>Spend Elon Musk's Fortune!</h2>
        <p>If Elon cashed out all of his stocks & assets today he would have
          <br /> approximately <span>$217,000,000,000</span> (US Dollars) in his bank account.</p>
        <p>¿What would you <span>spend it</span> on?</p>
        <h6>Have your receipt at the end!</h6>
      </header>
      <nav>
        <div className='bond' >
          <h2>Remaining :{initalstate}    <span> You only spent {percent} % of the total!</span></h2>
        </div>

      </nav>
      <header className="App-body">
        <ul>
          {
            items.map((item) => (
              <div>

                <li>
                  <img src={item.imageUrl} alt="logo" />
                  <div id="box" className='sub-box'>
                    <div className='box-name'>
                      <h2>{item.name}</h2></div>
                    <div className='box-prices'>

                      <h4>USD {item.price}</h4>
                      <>

                        <div className='item-price' >


                          <button className='dec-button' onClick={() => decrementCount(item.id)}>Sell</button>

                          <div className='start-count'>
                            <span>{item.quantity}</span>

                          </div>

                          <button className='inc-button' onClick={() => incrementCount(item.id)}>Buy</button>

                        </div>
                      </></div>
                  </div>
                </li></div>
            ))
          }

        </ul>
        <h1>Receipt</h1>
        <div>
          {
            items.map(item => {
              if (item.quantity > 0)
                return (
                  <div className='receipt'>{item.name}<span> X </span>{item.quantity}<span>..............$</span>{item.price}</div>


                )
            })
          }
        </div>
        <div><h3><u>Total is:$ {total}</u></h3></div>
        <div ><button className='print-button' onClick={() => window.print()}>Print receipt
        </button>
        </div>
        <div><p>Inspired by Imen  , created by IA</p></div>
      </header >
    </div >

  );
}

export default App;
