function getProps() {
  let url = new URL(window.location.href);
  const searchParams = url.searchParams;
  let props = [...searchParams.entries()].reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  props.balph = props.balph || '50';
  props.blend = hexToRgbs(props.blend, props.balph) || { rgba: { r: '255', g: '255', b: '255', a: '0.5' }, value: 'rgba(255,255,255,0.5)' };
  props.bm = props.bm || 'normal';
  props.txt = props.txt || 'your text here';
  props.txtalign = setTextAlign(props.txtalign) || ['center', 'center'];
  props.txtclr = props.txtclr || '000';
  props.txtsize = props.txtsize || 30;
  props.w = props.w || '1225';
  return props;
}

function hexToRgbs(hex, opacity) {
  if (hex !== undefined) {
    let rgb = [('0x' + hex[1] + hex[2]) | 0, ('0x' + hex[3] + hex[4]) | 0, ('0x' + hex[5] + hex[6]) | 0, opacity / 100];
    return { rgba: { r: rgb[0], g: rgb[1], b: [2], a: opacity / 100 }, value: `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})` };
  } else {
    return false;
  }
}

function setTextAlign(string) {
  if (string !== undefined) {
    let textAlign = string.split(',');

    if (textAlign[0] === 'right') {
      textAlign[0] = 'flex-end';
    } else if (textAlign[0] === 'left') {
      textAlign[0] = 'flex-start';
    }

    if (textAlign[1] === 'top') {
      textAlign[1] = 'flex-start';
    } else if (textAlign[1] === 'botton') {
      textAlign[1] = 'flex-end';
    } else {
      textAlign[1] = 'center';
    }
    return textAlign;
  }
  return false
 
}

export default getProps;
