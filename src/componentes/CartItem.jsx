const CartItem = ({joya,deleteItem}) =>  {
  
  
    return( <article className="box">
    Catalogo de joyas
    <h3>{joya.item.name}</h3>
    <h4>cantidad: {joya.item.count}</h4>
    <h4> ${joya.item.price} CLP </h4>
    <button onClick={()=>  deleteItem(joya.item.id)}>Eliminar</button>
    

    
  </article> 
  );
}


export default CartItem
