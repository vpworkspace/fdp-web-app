import React, { Component } from 'react'
import FlexPay from './FlexPay'
import Confirm from './Confirm'

export class UserForm extends Component {
    state = {
        step: 1,
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1,
        })
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1,
        })
    }

    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state
        const { mortgageholiday } = this.state
        const values = { mortgageholiday }

        switch (step) {
            case 1:
                return (
                    <FlexPay
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <Confirm />
            default:
                console.log('This is a multi-step form built with React.')
        }
    }
}

export default UserForm
