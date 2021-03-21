import React, {Component} from 'react';
import {Card, InputGroup, Container, FormControl, Button} from "react-bootstrap";
import classes from './ip.module.css'
import axios from "axios";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
class IPTracker extends Component {
    state = {
        ip: '',
        valid: false,
        location: null,
        isp: null,
        timezone: null,
        updated: true,
        map: null
    }


    componentDidMount() {
        this.updateDataHandler()
    }


    checkForUpdate = () => {
        console.log(this.state)
        if (this.state.valid && !this.state.updated) {
            this.updateDataHandler()
        }
    }

    onChangeIPHandler = (event) => {
        // eslint-disable-next-line
        const IPRegex = new RegExp('^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$')
        const valid = IPRegex.test(event.target.value)
        this.setState({ip: event.target.value, valid: valid, updated: false})

    }

    updateDataHandler = () => {
        const useIP = this.state.valid?'&ipAddress='+this.state.ip: ''
        axios.get(`https://geo.ipify.org/api/v1?apiKey=at_v3XjxubOjZOnDxNjOMHs0b5Wbz7EO${useIP}`)
            .then(response => {
                this.setState({updated: true, valid: true, ip: response.data.ip, location: response.data.location, isp: response.data.isp, timezone: response.data.location.timezone})
                const {map} = this.state;
                map.flyTo([response.data.location.lat, response.data.location.lng])
            })
            .catch(error => {
                alert("If this says Network Error, disable your adblocker. Error: " + error)
            })
    }

    render() {


        this.checkForUpdate()
        return (
            <div>
                <div style={{backgroundImage: 'url(../IP/pattern-bg.png)', height: '250px', position: 'absolute', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <Container>
                        <h2 className={classes.Header} style={{fontWeight: '500', textAlign: 'center', color: 'white', margin: '25px 0'}}>IP Address Tracker</h2>
                        <InputGroup className="my-3" style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: '450px'}}>
                                <FormControl value={this.state.ip} onChange={this.onChangeIPHandler} placeholder="IP Address" aria-label="IP Address" className={classes.Form} style={{borderBottomLeftRadius: '15px', borderTopLeftRadius: '15px', fontSize: '18px', padding: '25px'}} />
                                <InputGroup.Append>
                                    <Button aria-label="IP Button" style={{borderTopRightRadius: '15px', borderBottomRightRadius: '15px', padding: '5px 20px'}} className={classes.Submit} variant="secondary" onClick={() => this.updateDataHandler()}><span className={classes.RightArrow} /></Button>
                                </InputGroup.Append>
                        </InputGroup>
                        <Card style={{borderRadius: '15px', display: 'flex', margin: '40px 0'}} className={classes.Card}>
                            <div className={classes.CardEl} >
                                <p className={classes.Title}>IP ADDRESS</p>
                                <p className={classes.Value}>{this.state.valid? this.state.ip : 'Enter an IP'}</p>
                            </div>
                            <div className={classes.Divider}/>
                            <div className={classes.CardEl} >
                                <p className={classes.Title}>LOCATION</p>
                                <p className={classes.Value}>{this.state.valid&&this.state.location? `${this.state.location.city}, ${this.state.location.country}` : 'Enter an IP'}</p>
                            </div>
                            <div className={classes.Divider}/>
                            <div className={classes.CardEl} >
                                <p className={classes.Title}>TIMEZONE</p>
                                <p className={classes.Value}>{this.state.valid&&this.state.timezone? `UTC ${this.state.timezone}` : 'Enter an IP'}</p>
                            </div>
                            <div className={classes.Divider}/>
                            <div className={classes.CardEl} >
                                <p className={classes.Title}>ISP</p>
                                <p className={classes.Value}>{this.state.valid&&this.state.isp? this.state.isp : 'Enter an IP'}</p>
                            </div>
                        </Card>
                    </Container>
                </div>
                <MapContainer className={classes.Map} center={this.state.location? [this.state.location.lat, this.state.location.lng] : [51.505, -0.09]} zoom={13} scrollWheelZoom={false} zoomControl={false} whenCreated={map => this.setState({map: map})}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={this.state.location? [this.state.location.lat, this.state.location.lng] : [51.505, -0.09]}>
                    </Marker>
                </MapContainer>
            </div>
        );
    }
}


export default IPTracker;
