import React, { useState, FunctionComponent } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

interface Props {
	photos: string[];
}
const PhotoGallery: FunctionComponent<Props> = ({ photos }) => {
	return <AwesomeSlider  >{photos.map(photoRoute=>{return <div data-src={photoRoute} key={photoRoute}/>})}</AwesomeSlider>;
};

export default PhotoGallery;
