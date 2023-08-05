import React,{Component} from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
  state={
    orders:[],
    loading:false
  }
  componentDidMount(){
    axios.get('/orders.json')
    .then(res=>{
      console.log(res.data);
      const fetchedOrders=[];
      for(let key in res.data){
        console.log(res.data[key]);
        fetchedOrders.push({
          ...res.data[key],
          id:key
        });
      }
      console.log(fetchedOrders)
      this.setState({loading:false,orders:fetchedOrders});
    })
    .catch(err=>{
      console.log(err);
      this.setState({loading:false});
    })
  }
  render(){
    return(
      <div>
        {this.state.orders.map(order=>{
         return <Order key={order.id} price={order.price} ingredients={order.ingrediants}/>
        })}
      </div>
    )
  }
}

export default WithErrorHandler(Orders,axios);