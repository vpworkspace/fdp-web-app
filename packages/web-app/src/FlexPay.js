import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FlexPayChart from "./views/FlexPayChart";
import Confirm from "./Confirm"
import { Link } from 'react-router-dom';

export class FlexPay extends Component {


  render() {
    const { values, handleChange } = this.props;
     return (
        <div className="root">
        <h1 class='h3' > <Link to="/fdp">Account Summary</Link> &nbsp;>>&nbsp;<Link to="/reccomend">Reccomend</Link> &nbsp;>>&nbsp; <Link to="/illustrate">Illustrations</Link> </h1>
        <div className="rowC">
        <div className="colC">
        <TextField  placeholder="Enter Your Name"
          label="Name"
          defaultValue={'John Smith'}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          placeholder="Current Debt"
          label="Current Outstanding Debt"
          defaultValue={'119646.66 £'}
          margin="normal"
          InputProps={{
            readOnly: true,
          }} />
       <TextField color="red"
         placeholder="Enter Holiday Period (Months)"
         label="Enter Holiday Period"
         defaultValue={0}
         margin="normal"
       />

    <TextField
          label=" Current Monthly Installments"
          defaultValue={'850.00 £'}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
            label=" Current Terms(in months)"
            defaultValue={54}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />

              </div>
            <div className="colC">
            <TextField
                   placeholder="Enter Your AccountNumber"
                   label="Loan Account Number"
                   defaultValue={50000012345602}
                   margin="normal"
                   InputProps={{
                     readOnly: true,
                   }}
                 />
                 <TextField
                      label="Interest Rate"
                      defaultValue={'4%'}
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                     />

                <TextField color="red"
                         placeholder="Extend Terms (Months)"
                         label="Extend Terms"
                         defaultValue={0}
                         margin="normal"
                       />
                <TextField color="red"
                      label=" New Monthly Installments"
                      defaultValue={'850.00 £'}
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />

               <TextField color="red"
                  label=" New Terms(in months)"
                  defaultValue={54}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                />



            </div>

             <div class="colC">
                        <h1 className="h2">Interest vs Principal</h1>
                        <FlexPayChart/>
              </div>

             </div>
             <div className="rowC">
                <Button color="primary" variant="contained">Confirm</Button>

                 </div>
         </div>

    );
  }
}

export default FlexPay;
