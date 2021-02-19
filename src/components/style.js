import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((alignItems) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem',
  },
  photoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photo: {
    height: '35rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    margin: '0rem',
    width: '100%',
    height: '100%',
  },
  fontSize: {
    width: '4.4rem',
  },
  imageText: {
    width: '18rem',
  },
  selected: {
    color: 'white',
    backgroundColor: '#3f51b5',
    '&:hover': {
      color: 'white',
      backgroundColor: '#3f51b5',
    },
  },
  pickersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '.5rem',
  },
  pickers: {
    flexBasis: '45%',
  },
}));

export default useStyles;
