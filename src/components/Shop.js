import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreator, dispatch)
  const amount = useSelector(state => state.amount)

  return (
    <>

      <h2 className='mt-4 d-flex justify-content-center text-white'>Deposit / Withdraw Money</h2>
      <div className='my-4 d-flex justify-content-center text-white'>
        <button className='btn btn-danger mx-2' onClick={() => { withdrawMoney(100) }}> - </button>
        Update Balance ({amount})
        <button className=' btn btn-success mx-2' onClick={() => { depositMoney(100) }}> + </button>
        {/* <button className='btn btn-dark mx-2' onClick={() => { dispatch(actionCreator.withdrawMoney(100)) }}>-</button>
        Add this item to cart
      <button className=' btn btn-dark mx-2' onClick={() => { dispatch(actionCreator.depositMoney(100)) }}>+</button> */}
      </div>
    </>
  )
}

export default Shop
