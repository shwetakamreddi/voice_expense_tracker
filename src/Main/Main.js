import React, { useContext } from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from "@material-ui/core"
import useStyles from "./styles"
import Form from "./Form/Form"
import List from "./List/List"
import {ExpenseTrackerContext} from "../Context/Context"
import InfoCard from '../InfoCard'
function Main() {
    const classes=useStyles()
    const {balance}=useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
                 <CardContent>
                     <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                     <Typography align="center" variant="subtitle1" style={{
                         lineHeight:'1.5rem',marginTop:'20px'
                     }}>
                         <InfoCard/>
                     </Typography>
                     <Divider className={classes.divider}/>
                     <Form/>
                 </CardContent>
                 <CardContent className={classes.cardContent}>
                     <Grid item xs={12}>
                        <List/>
                     </Grid>
                 </CardContent>
        </Card>
    )
}

export default Main
