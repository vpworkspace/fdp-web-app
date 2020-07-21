import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { ListItemText } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { GridList } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import './App.css'
import NWlogo from './NWB.jpg'
import RBSlogo from './RBS.jpg'
import Ulsterlogo from './Ulster.jpg'
import Barclayslogo from './Barclays.jpg'
import Modifylogo from './Modify.jpg'
import dataMock from './account-data'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: 'white',
        height: '760px',
        width: '600px',
    },
    paper1: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.Data,
        backgroundColor: 'AliceBlue',
        height: '740px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        margin: 5,
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    item: {
        color: 'red',
        '& span, & svg': {
            fontSize: '0.75em',
        },
    },
    greenItem: {
        color: 'green',
        '& span, & svg': {
            fontSize: '0.75em',
        },
    },
    noButton: {
        display: 'none',
    },
    button: {
        border: 'red',
        color: 'white',
        backgroundColor: 'white',
        fontSize: '20px',
    },
    image: {
        zoom: '100%',
    },
}))

const AccountList = () => {
    const classes = useStyles()
    const elements = ['one', 'two', 'three']
    const history = useHistory();
    var data = useSelector((state) => state.app.data)
    if(!data){    data = dataMock     }
    const dispatch = useDispatch()
    var customerName = ''
    var customerAccountType = ''
    var customerBalance = ''
    var customerBalanceCurrency
    var brandLogo = ''
    var balanceStyle = ''
    var editStyle = ''
    function myfunction() {
          history.push('/flexpay')
    }

    return (
        <div class="bigbox">
            <h2 className="h2">Account Summary <button className="buttonLinks"
            onClick={() => getAccountList(dispatch)} > </button></h2>
            <div className="dashboard">
                <div className="container">
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    {data.Data.Account.map((customer, i) => {
                                        return (
                                            <div key={i}>
                                                <div>
                                                    {customer.Account.map(
                                                        function (Account, i) {
                                                            var nameArray = Account.Name.split(
                                                                '-'
                                                            )
                                                            customerAccountType = nameArray[0].trim()
                                                            customerName = nameArray[2].trim()

                                                            if (
                                                                Account.Name.toLowerCase()
                                                                    .trim()
                                                                    .includes(
                                                                        'natwest'
                                                                    )
                                                            ) {
                                                                brandLogo = NWlogo
                                                            } else if (
                                                                Account.Name.toLowerCase().includes(
                                                                    'rbs'
                                                                )
                                                            ) {
                                                                brandLogo = RBSlogo
                                                            } else if (
                                                                Account.Name.toLowerCase().includes(
                                                                    'ulster'
                                                                )
                                                            ) {
                                                                brandLogo = Ulsterlogo
                                                            } else if (
                                                                Account.Name.toLowerCase().includes(
                                                                    'barclays'
                                                                )
                                                            ) {
                                                                brandLogo = Barclayslogo
                                                            } else {
                                                                brandLogo = NWlogo
                                                            }

                                                            if (
                                                                customerAccountType
                                                                    .toLowerCase()
                                                                    .trim()
                                                                    .includes(
                                                                        'savings'
                                                                    ) ||
                                                                customerAccountType
                                                                    .toLowerCase()
                                                                    .trim()
                                                                    .includes(
                                                                        'current'
                                                                    )
                                                            ) {
                                                                balanceStyle =
                                                                    classes.greenItem
                                                                editStyle =
                                                                    classes.noButton
                                                            } else {
                                                                balanceStyle =
                                                                    classes.item
                                                                editStyle =
                                                                    classes.button
                                                            }

                                                            return (
                                                                <div key={i}>
                                                                    {customer.balances.map(
                                                                        function (
                                                                            balances,
                                                                            i
                                                                        ) {
                                                                            {
                                                                                customerBalance =
                                                                                    balances
                                                                                        .Amount
                                                                                        .Amount
                                                                            }
                                                                            {
                                                                                customerBalanceCurrency =
                                                                                    balances
                                                                                        .Amount
                                                                                        .Currency
                                                                            }
                                                                        }
                                                                    )}

                                                                    <React.Fragment>
                                                                        <GridList
                                                                            cellHeight={
                                                                                100
                                                                            }
                                                                            cellWidth={
                                                                                100
                                                                            }
                                                                            className={
                                                                                classes.avatar
                                                                            }
                                                                            cols={
                                                                                4
                                                                            }
                                                                            spacing={
                                                                                30
                                                                            }
                                                                        >
                                                                            <img
                                                                                alt="Natwest"
                                                                                src={
                                                                                    brandLogo
                                                                                }
                                                                                className={
                                                                                    classes.image
                                                                                }
                                                                            />
                                                                            <Typography variant="caption">
                                                                                <ListItemText
                                                                                    primary={
                                                                                        customerName
                                                                                    }
                                                                                    secondary={
                                                                                        customerAccountType
                                                                                    }
                                                                                />
                                                                            </Typography>
                                                                            <Typography variant="h5">
                                                                                <ListItemText
                                                                                    className={
                                                                                        balanceStyle
                                                                                    }
                                                                                    primary={
                                                                                        customerBalance +
                                                                                        ' ' +
                                                                                        '£'
                                                                                    }
                                                                                    secondary={
                                                                                        Account.Identification
                                                                                    }
                                                                                />
                                                                            </Typography>
                                                                            <button
                                                                                className={
                                                                                    editStyle
                                                                                }
                                                                            >
                                                                                <img
                                                                                    alt="Modify"
                                                                                    src={
                                                                                        Modifylogo
                                                                                    }
                                                                                    onClick={() =>
                                                                                        myfunction()
                                                                                    }
                                                                                />
                                                                            </button>
                                                                        </GridList>
                                                                        <Divider></Divider>
                                                                    </React.Fragment>
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountList
/*export default function AccountList() {
    return (
        <div class="bigbox"> 
            <h2 className="h2">Account Details</h2>
        </div>
        )
}*/
