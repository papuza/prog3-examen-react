import React from 'react'
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PriceData = ({ plan }) => {

    console.log(plan)
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h6" component="h2">
                    {plan.subheader}
                </Typography>
                <Typography variant="h2" component="h1">
                    Get the {plan.title} Plan right now!
                </Typography>


                <List>
                    {
                        plan.description.map(oneDesc =>
                            <>
                                <Divider />
                                <ListItem>
                                    <ArrowForwardIosIcon />
                                    <ListItemText
                                        primary={oneDesc}
                                    />
                                </ListItem>
                            </>
                        )
                    }
                </List>

                <Tooltip title="Price" disableInteractive >
                    <Button><Typography variant="h2" component="h1"> ${plan.price}/mo</Typography></Button>
                </Tooltip>

                <Button variant="outlined" color="success"><Typography variant="h5" component="h1">Comprar</Typography></Button>
            </Container>

        </React.Fragment>
    )


}

export default PriceData
