import React, { Component } from 'react'; 

class Bank extends Component {  
    

  render() {
  
  const Payments = this.props.recurring_payments.map((payment) => 
        (<div> <li>Source: {payment.source}</li><br /> <li>Status: {payment.status === false ? 'Outgoing' : 'Incoming'}</li><br /> 
        <li>Next Pay: {payment.pay_date}</li><br />
        <li>Amount: {payment.pay_amount}</li><br /> <li>Duration: {payment.duration}</li><br /></div>))
        
    return( 
    <div>
      <li>Name: {this.props.name}</li> 
      <li>Balance: {this.props.balance}</li>  
      <div>{Payments}</div>
     </div>
    );
  }
};

export default Bank;