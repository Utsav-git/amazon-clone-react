import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../CSS/Slider.css';

const Slider = () =>{
    
    var image = ["https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg","https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg","https://m.media-amazon.com/images/I/71bErcVZodL._SX3000_.jpg"];
    var index = 0;

    const forward = () => {
        index++;
        if(index > image.length-1 ){
            index = 0;
        }
        document.querySelector(".container").style.backgroundImage = `url(${image[index]})`;
    }
    const backward = () => {
        index--;
        if(index < 0){
            index = image.length - 1;
        }
        document.querySelector(".container").style.backgroundImage = `url(${image[index]})`;
    }
    return(
    <div className="slider_container">
        <div className="container">
            <button onClick = {backward}><ArrowBackIcon/></button>
            <button onClick={forward}><ArrowForwardIcon/></button>
        </div>
    </div>
    );

}
export default Slider;