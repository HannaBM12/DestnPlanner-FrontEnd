import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const HotelImage = [
    {
      label: 'Lobby',
      imgPath:
        'https://media.architecturaldigest.com/photos/5c7989da22644c2d41b67df8/master/w_4272,h_2670,c_limit/Ritz%20Carlton%20Astana.jpg',
    },
  {
    label: 'Lobby',
    imgPath:
      'https://www.jetsetter.com//uploads/sites/7/2018/04/jleQRg3N-1380x690.jpeg',
  },
  {
    label: 'Pool',
    imgPath:
      'https://www.sawyerhotel.com/images/1700-960/pool-deck-sitting-area-sawyer-hotel-sacramento-kimpton-f06d9906.jpg',
  },
  {
    label: 'King Room',
    imgPath:
      'https://www.wohomen.com/wp-content/uploads/2019/10/luxury-bedroom-design.png',
  },
  {
    label: 'Queen Room',
    imgPath:
      'https://i.travelapi.com/hotels/1000000/530000/529300/529239/be49ca58_z.jpg',
  },
  {
    label: 'Standard Room',
    imgPath:
      'https://lh3.googleusercontent.com/proxy/BiVLontz6U9EjZdVMV6UqXmPgDxaPu2FL1kafFwMXBQZ_Xh28OVRWN9e2Eax0wxOuEC-_eqSBdzPXiTF-JN9PiegCfgGMoGU8yXAoOTsu8LQS3h1E8dW4urmL0iOK_R_PMoYlQc',
  },
  {
    label: 'Standard Room',
    imgPath:
      'https://www.plazahotelcasino.com/wp-content/uploads/2019/05/plaza-hotel-and-casino-luxe-room-single-king-bed-768x339.jpg',
  },
  {
    label: 'Bath Room',
    imgPath:
      'https://i.pinimg.com/originals/4a/f3/b3/4af3b35f66a215cf5e594804a7c2b74c.jpg',
  },
  {
    label: 'Twin Room',
    imgPath:
      'https://construction2style.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-07-at-4.01.40-PM.png',
  },
  {
    label: 'Double Room',
    imgPath:
      'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/1600/90/media/aulani-resort//images/en/rooms-offers/rooms-suites/standard-room/standard-view-1-16x9.jpg',
  },
  {
    label: 'King Room',
    imgPath:
      'https://www.elillyhotel.com/wp-content/uploads/2018/05/38548471-1024x683.jpg',
  },
  {
    label: 'Pool',
    imgPath:
      'https://media.architecturaldigest.com/photos/55e79210cd709ad62e90102f/2:1/w_600,h_300,c_limit/dam-images-travel-2015-hotel-pools-best-hotel-pools-01.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 550,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function StepperImage() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = HotelImage.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{HotelImage[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={HotelImage[activeStep].imgPath}
        alt={HotelImage[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}