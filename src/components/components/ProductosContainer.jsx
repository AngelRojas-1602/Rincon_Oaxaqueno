import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './Typography';


const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductosContainer(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'Mayordomo',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'Mezcal & Cremas',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Salsas',
      width: '40%',
    },

    {
      url:
        'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'Artesanias',
      width: '55%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
      title: 'Gastronomia',
      width: '45%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Todo lo que Puedas Imaginar
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductosContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductosContainer);
