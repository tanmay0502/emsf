import React, { Component } from "react"
import IndiaStates from "./india-states.json"
import "leaflet/dist/leaflet.css"
import mapData from "./india-states.json"
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet'

//const url = "https://raw.githubusercontent.com/atul-mane01/India-Coordinates/main/INDIA/INDIA_STATES.geojson" 


class MyMap extends Component{
    state = {};
    
    mapStyle = {
        fillColor: "red",
        height: "37.5vh",
        width: "75vh"
    }

     innerStyle = {
         weight: 1

     }

    stateClick = (event) => {
        console.log("clicked")
    }

    onEachState = (state, layer) => {
        const stateName = state.properties.STNAME;
        layer.bindPopup(stateName)
        // console.log(state)
        layer.on({
            click: this.stateClick,
            mouseover: (event) => {
                event.target.setStyle(
                    {      
                        fillColor:"red",
                        fillOpacity: 0.2,
                    }
                );
            
            }
        })
    }

    render(){
        return(
            <div className="map-container p-4 border rounded-2xl m-4">
                <MapContainer style={this.mapStyle} zoom={3.5} center={[23,83]}>
                    <GeoJSON style= {this.innerStyle} data={IndiaStates.features} onEachFeature={this.onEachState}/>
                </MapContainer>
            </div>
        )
    }

}
export default MyMap;