import { faUserInjured } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import image from "./fuji.jpg"

export default function Card(props) {
    return (
        <div className="card">
            <img className="cardImg" src={image} alt="mt fuji"/>
            <div className="card-text">
                <p className="location">{props.place.location}<span className="googleMapsUrl"><a href={props.place.googleMapsUrl}>View on Google Maps</a></span></p>
                <h1>{props.place.title}</h1>
                <p className="dates">{props.place.startDate} - {props.place.endDate}</p>
                <p className="description">{props.place.description}</p>
            </div>
        </div>
    )
}
