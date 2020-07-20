import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { textAlign } from '@material-ui/system';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Component, Fragment } from 'react';
import './App.css';
import logo from './NWB.jpg';
import data from "./account-data";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'white',
        height: "760px",
        width: "740px"
    },
    paper1: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'AliceBlue',
        height: "800px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        margin: 10,
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
        color: theme.palette.secondary.main,
        '& span, & svg': {
            fontSize: '0.75em'
        }
    }
}));

const AccountList = () => {
    const classes = useStyles();
    const elements = ['one', 'two', 'three'];
    var customerNickName = "";
    var customerAccountType = "";
    var customerBalance = "";
    var customerAccountNum = "";
    
    return (
        <div class="bigbox"> 
            <h2 className="h2">Account Details</h2>
            <div className="dashboard">
                <div className="container">
                    
                    <div className={classes.root}>
                        <Grid container spacing={3}>

                            <Grid item xs={6} >
                                <Paper className={classes.paper} >
                                {
                                        data.Data.Account.map((customer, i) => {
                                            return (<div key={i}>
                                                
                                                <div>
                                        
                                        {customer.Account.map(function (Account, i) {
                                            return <div key={i}>
                                                {customer.balances.map(function (balances, i) {
                                                    return <div key={i}>
                                                
                                                        <React.Fragment>
                                                            <GridList cellHeight={80} cellWidth={80} className={classes.avatar} cols={3} spacing={120}>
                                                                <img
                                                                    alt="Natwest"
                                                                    src={logo}
                                                                    className={classes.Avtar}
                                                                />
                                                                <Typography variant="title1">
                                                                    <ListItemText className={classes.item} primary={customer.Nickname} secondary={customer.AccountSubType} />
                                                                </Typography>
                                                                <Typography variant="title1">
                                                                     <ListItemText className={classes.item} primary={balances.Amount.Amount + " " + "£"} secondary={Account.Identification} />
                                                                </Typography>
                                                            </GridList>
                                                            <Divider>
                                                            </Divider>
                                                        </React.Fragment>
                                                        

                                                    </div>
                                                })}

                                            
                                            </div>
                                        })}

                                        
                                                    
                                    
                                    </div>
                                </div>);
                                        })
                                    }
                                    
                                
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