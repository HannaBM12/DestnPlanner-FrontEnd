import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Hotel Brooklyn Bridge – New York',
    imgPath:
      'https://d4qwptktddc5f.cloudfront.net/inc-brooklyn-bridge-park-lobby-1217.jpg',
  },
  {
    label: 'Royal Sonesta - Washington DC',
    imgPath:
      'https://cf.bstatic.com/images/hotel/max1024x768/280/280842172.jpg',
  },
  {
    label: 'CitizenM - New York',
    imgPath:
      'https://images.trvl-media.com/hotels/23000000/22250000/22247400/22247316/02144500.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
  },
  {
    label: 'Hilton Garden Inn - Washington DC',
    imgPath:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/da/65/d4/lobby--v10810137.jpg?w=1200&h=-1&s=1',
  },
  {
    label: 'Hampton Inn - Manhattan',
    imgPath:
      'https://images.nycgo.com/image/fetch/q_65,c_fill,f_auto,w_750,g_center/https://www.nycgo.com/images/venues/1405/hamptoninnmanhattantimessquarecentral_timessquare_manhattan_nyc_christinegatti_hampton41-lobby-mu-sd.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
     maxWidth: 700,
    flexGrow: 1,
    root:{
    height: '70vh',
    textAlign: 'right',
    display: 'flex'
  }

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    fontWeight: 'bold',
    fontSize: '4em',
    color: 'black',
    paddingLeft: theme.spacing(4),
    background: 'rgba(0, 0, 0, 0.2)',
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    display: 'block',
    maxWidth: 700,
    overflow: 'hidden',
    width: '100%',
  },
}));

function BottomBarSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
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

export default BottomBarSlider;