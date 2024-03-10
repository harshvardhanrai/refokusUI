import React from 'react'
import Product from './Product'

function Products() {

 var products = [
  {title:"arqitel", desc:"arqu themselves in arqitel product execution boom business in a click and get orders worldwide",live:true, case:false},
  {title:"TTR", desc:"arqu themselves in arqitel product execution boom business in a click and get orders worldwide",live:true, case:false},
  {title:"YIR 2022", desc:"arqu themselves in arqitel product execution boom business in a click and get orders worldwide",live:true, case:true},
  {title:"Yahoo!", desc:"arqu themselves in arqitel product execution boom business in a click and get orders worldwide",live:true, case:true}
 ]

  return (
    <div className='bg-zinc-900 mt-32 mx-auto px-20'>
      {products.map((item, index)=> <Product item={item} />)}
    </div>
  )
}

export default Products