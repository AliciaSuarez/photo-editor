import React from 'react';
import useStyles from './style';
import photo from '../assets/mountains.jpg';

function Photo(props) {
  console.log(props)
  const classes = useStyles();
  let fontStyle = { ...props.fontStyle, fontSize: props.fontStyle.fontSize + 'px' };
  let backgroundImage = { backgroundImage: `url(${photo})`, width: props.width+'px'};
  let boxStyle = { ...props.style, backgroundColor: props.background.value };
  return (
    <>
      <div className={classes.photoContainer} style={backgroundImage}>
        <div className={classes.overlay} style={boxStyle}>
          <div style={fontStyle}>{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default Photo;
