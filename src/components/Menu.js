import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { CirclePicker, HuePicker } from 'react-color';
import { Button, ButtonGroup, TextField, Slider } from '@material-ui/core/';
import Photo from './Photo';
import useStyles from './style';

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import FormatBoldIcon from '@material-ui/icons/FormatBold';

function Menu(props) {
  let style = { ...props.styles };
  const classes = useStyles();

  const [boxStyle, setBoxStyle] = useState({ justifyContent: style.txtalign[0], alignItems: style.txtalign[1] });
  const [fontStyle, setFontStyle] = useState({ color: '#' + style.txtclr, fontSize: style.txtsize, fontWeight: style.bm });
  const [content, setContent] = useState(style.txt);
  const [background, setBackground] = useState(style.blend);
  const [opacity, setOpacity] = useState(parseInt(style.balph));

  const handleChangeFontColor = (newColor) => {
    setFontStyle({ ...fontStyle, color: newColor.hex });
  };
  const handleChangebackgroundColor = (newColor) => {
    setBackground({rgba:newColor.rgb, value:`rgba(${newColor.rgb.r},${newColor.rgb.g},${newColor.rgb.b},${opacity/100})`});
  };

  const handleChangeOpacity = (event, newValue) => {
    let newColor = {...background.rgba,a:newValue/100}
    setBackground({rgba:newColor, value:`rgba(${newColor.r},${newColor.g},${newColor.b},${newColor.a})`});
    setOpacity(newValue);
  };
  const handleChangeFontWeight = () => {
    fontStyle.fontWeight === 'normal' ? setFontStyle({ ...fontStyle, fontWeight: 'bold' }) : setFontStyle({ ...fontStyle, fontWeight: 'normal' });
  };
  const setStyle = (prop, value) => {
    prop === 'justifyContent' ? setBoxStyle({ ...boxStyle, justifyContent: value }) : setBoxStyle({ ...boxStyle, alignItems: value });
  };

  return (
    <>
      <Paper className={classes.container} elevation={0}>
        <ButtonGroup color='primary' aria-label='outlined primary button group'>
          <Button className={boxStyle.justifyContent === 'flex-start' && classes.selected} onClick={() => setStyle('justifyContent', 'flex-start')}>
            <FormatAlignLeftIcon />
          </Button>
          <Button className={boxStyle.justifyContent === 'center' && classes.selected} onClick={() => setStyle('justifyContent', 'center')}>
            <FormatAlignCenterIcon />
          </Button>
          <Button className={boxStyle.justifyContent === 'flex-end' && classes.selected} onClick={() => setStyle('justifyContent', 'flex-end')}>
            <FormatAlignRightIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup color='primary' aria-label='outlined primary button group'>
          <Button className={boxStyle.alignItems === 'flex-start' && classes.selected} onClick={() => setStyle('alignItems', 'flex-start')}>
            <VerticalAlignTopIcon />
          </Button>
          <Button className={boxStyle.alignItems === 'center' && classes.selected} onClick={() => setStyle('alignItems', 'center')}>
            <VerticalAlignCenterIcon />
          </Button>
          <Button className={boxStyle.alignItems === 'flex-end' && classes.selected} onClick={() => setStyle('alignItems', 'flex-end')}>
            <VerticalAlignBottomIcon />
          </Button>
        </ButtonGroup>
        <Button variant='outlined' color='primary' className={fontStyle.fontWeight === 'bold' && classes.selected} onClick={() => handleChangeFontWeight()}>
          <FormatBoldIcon />
        </Button>
        <TextField label='Font Size' className={classes.fontSize} type='number' value={fontStyle.fontSize} onChange={(e) => setFontStyle({ ...fontStyle, fontSize: e.target.value })} />

        <CirclePicker width={380} color={fontStyle.color} onChangeComplete={handleChangeFontColor} />
        <TextField type='search' variant='outlined' className={classes.imageText} value={content} onChange={(e) => setContent(e.target.value)} />
      </Paper>
      <Photo style={boxStyle} fontStyle={fontStyle} content={content} background={background} width={style.w} />
      <div className={classes.pickersContainer}>
        <h3>Select a Color:</h3>
        <h3>Opacity:</h3>
      </div>
      <div className={classes.pickersContainer}>
        <HuePicker className={classes.pickers} color={background.value} onChangeComplete={handleChangebackgroundColor} />
        <Slider className={classes.pickers} onChange={handleChangeOpacity} value={opacity} min={0} max={100} valueLabelDisplay='auto' />
      </div>
    </>
  );
}

export default Menu;
