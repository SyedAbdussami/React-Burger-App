import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/input/input";
import {connect} from 'react-redux'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        touched:false,
        formType:'Name'
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        touched:false,
        formType:'Email Address'
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Address",
        },
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        touched:false,
        formType:'Street'
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZipCode",
        },
        value: "",
        valid: false,
        validation: {
          required: true,
          minLength:5,
          maxLength:6
        },
        touched:false,
        formType:'Zip Code'
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        touched:false,
        formType:'Country'
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
        valid:true,
        validation:{}
      },
    },
    formIsValid:false,
     loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    let formData = {};
    for (let inputFieldId in this.state.orderForm) {
      formData[inputFieldId] = this.state.orderForm[inputFieldId].value;
    }
    this.setState({ loading: true });
    const order = {
      price: this.props.price,
      ingrediants: this.props.ings,
      orderData: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  formChangeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched=true;
    updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    // console.log(event.target.value)
    // console.log(updatedFormElement)
    let formIsValid=true;
    for(let inputFormFieldId in updatedOrderForm){
      formIsValid=updatedOrderForm[inputFormFieldId].valid&&formIsValid;
    }
    console.log(formIsValid)
    this.setState({ orderForm: updatedOrderForm ,formIsValid:formIsValid});
  };

  checkValidity(value,rules){
    let isValid=true
    if(rules.required){
      isValid=value.trim()!==""&&isValid;
    }
    if(rules.minLength){
      isValid=value.length>=rules.minLength &&isValid;
    }
    if(rules.maxLength){
      isValid=value.length<=rules.minLength&&isValid;
    }
    return isValid;
  }
  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.formChangeHandler(event, formElement.id)}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              formType={formElement.config.formType}
            />
          );
        })}
        <Button btnType="Success" clicked={this.orderHandler} disabled={! this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h1>Enter Your Contact Details</h1>
        {form}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    ings:state.ingredients,
    price:state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData);
