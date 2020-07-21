import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FlexPayChart from './views/FlexPayChart'
import Confirm from './Confirm'
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

export class FlexPay extends Component {
    render() {
        const { values, handleChange } = this.props
        return (
            <div className="root">
                <div className="rowC">
                    <h1 class="h4">
                        {' '}
                        <Link to="/fdp">Account Details</Link> &nbsp;>&nbsp;
                        <Link to="/reccomend">Recommendation</Link>{' '}
                        &nbsp;>&nbsp;{' '}
                        <Link to="/illustrate">
                            <span class="Selected-link">Illustration</span>
                        </Link>{' '}
                    </h1>
                </div>
                <div className="rowC">
                    <div className="colC">
                        <TextField
                            placeholder="Enter Your Name"
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
                            defaultValue={'123715.09 £'}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <InputLabel htmlFor="payment-holiday" class="h4">
                            Choose a Holiday Period
                        </InputLabel>
                        <Select
                            native
                            onChange={handleChange}
                            inputProps={{
                                name: 'paymentholiday',
                                id: 'payment-holiday',
                            }}
                        >
                            <option value={0}></option>
                            <option value={1}>1 month</option>
                            <option value={2}>2 months</option>
                            <option value={3}>3 months</option>
                        </Select>
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
                            defaultValue={50000012345603}
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
                        <InputLabel
                            htmlFor="extend-Term"
                            margin="normal"
                            class="h4"
                        >
                            Choose a term extension
                        </InputLabel>
                        <Select
                            native
                            onChange={handleChange}
                            inputProps={{
                                name: 'extendTerm',
                                id: 'extend-Term',
                            }}
                        >
                            <option value={0}></option>
                            <option value={1}>1 month</option>
                            <option value={2}>2 months</option>
                            <option value={3}>3 months</option>
                        </Select>
                        <TextField
                            color="red"
                            label=" New Monthly Installments"
                            defaultValue={'850.00 £'}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            color="red"
                            label=" New Terms(in months)"
                            defaultValue={54}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>

                    <div class="colC">
                        <h1 className="h3">Interest vs Principal</h1>
                        <FlexPayChart />
                    </div>
                </div>
                <div className="rowC">
                    <Button color="primary" variant="contained">
                        Confirm
                    </Button>
                </div>
            </div>
        )
    }
}

export default FlexPay
