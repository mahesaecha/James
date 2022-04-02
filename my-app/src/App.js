import './App.css';
import React, { Component } from 'react';
import mqtt from 'mqtt/dist/mqtt';
import '@progress/kendo-theme-default/dist/all.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { deepOrange, green, pink } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import WebFont from 'webfontloader';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.client = mqtt.connect('ws://test.mosquitto.org:8080')
    this.client.on("connect", () => {
      console.log("connected");
      this.client.subscribe('Water_Quality');
    }
    );
    this.client.on('message', (topic, message) => {
      console.log(topic);
      console.log(message.toString());
      this.handleJsonMessage(JSON.parse(message.toString()));
    }
    )
  }

  handleJsonMessage = (json) => {
    this.setState({... json})
  }

  componentWillUnmount() {
    if(this.client)
      this.client.end()
  }

  render(){
    return (
      <div className="App">
      <h1 className="App-header">
        Water Quality Monitor
      </h1>

      <p1>
      <List
      sx={{
        maxWidth: 360,
        bgcolor: 'background.paper',
        mx: 'auto',
        width: 200,
        marginBottom: '5%'
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 48, height: 48 }}>PPM</Avatar>
        </ListItemAvatar>
        <ListItemText primary="PPM" secondary={this.state.PPM} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[500], width: 48, height: 48 }}>PH</Avatar>
        </ListItemAvatar>
        <ListItemText primary="PH" secondary={this.state.PH} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: pink[200], width: 48, height: 48 }}>Suhu</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Suhu" secondary={this.state.Temperature} />
      </ListItem>
    </List>
      </p1>
      
      <p3>
        <Card sx={{ maxWidth: 600,'margin-left': '27%',width: "90%", 'margin-bottom' : '5%' }}>
          <CardMedia
            component="img"
            height="max-content"
            image={require('./parameter.jpeg')}
            alt="params"
          />
      </Card>
      </p3>

      <Box 
        bgcolor= "#282c34"
        color="white"
        px={{xs:6,sm:1}}
        py={{xs:3,sm:6}}
      >
        <Container maxWidth= 'xl'>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={2.3}>
              <Box borderBottom={1}>Gede Mahesa W.D</Box>
              <Box>
                087703233737
              </Box>
              <Box>
              mahesaecha3107@gmail.com
              </Box>
              <Box>
                <Link href="https://www.instagram.com/mahesaecha/" color="inherit">
                  @mahesaecha
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box borderBottom={1}>Nawa Kinarya Palupi</Box>
              <Box>
              082332668366
              </Box>
              <Box>
              nawakp@gmail.com
              </Box>
              <Box>
              <Link href="https://www.instagram.com/nawakinarya/" color="inherit">
                  @nawakinarya
              </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box borderBottom={1}>Moch Syarifuddin H.</Box>
              <Box>
              082131040441
              </Box>
              <Box fontSize={12}>
              mochammadsyarifuddin12@gmail.com
              </Box>
              <Box>
              <Link href="https://www.instagram.com/m.syar22/" color="inherit">
                  @m.syar22
              </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box borderBottom={1}>Rizky Maulana Izza</Box>
              <Box>
              087778732536
              </Box>
              <Box>
              generationsp29@gmail.com
              </Box>
              <Box>
              <Link href="https://www.instagram.com/rizkyki68/" color="inherit">
                  @rizkyki68
              </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box borderBottom={1}>M. Febri Rachmandika E.</Box>
              <Box>
              089676049085
              </Box>
              <Box>
              febri.gresik22@gmail.com
              </Box>
              <Box>
              <Link href="https://www.instagram.com/rlanggaaja/" color="inherit">
                  @rlanggaaja
              </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <p3 className= "font-link">
                <b>Creators</b>
              </p3>
            </Grid>
          </Grid>
        </Container>
      </Box>

      </div>
    );
  };
}

export default App;
