import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core/'
import Button from '@material-ui/core/Button'

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault()
        // PROCESS FORM //
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        return (
            <MuiThemeProvider>
                <>
                    <Dialog open fullWidth maxWidth="sm">
                        <AppBar title="Confirm" />
                        <p className="h2">
                            Your request has been submitted to the Bank! For
                            further assitance, click{' '}
                            <a href="https://rbs-bookings.qudini.com/booking-widget/storebooker/4V5MKBU0X7A/192?">
                                here
                            </a>{' '}
                            for video banking appointment.
                        </p>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
