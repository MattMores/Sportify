import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });

function StarRating( {rating} ) {
const [value, setValue] = useState(3);
const [hover, setHover] = useState(-1);
const classes = useStyles();

return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        // size="small"
        // defaultValue={3}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}

export default StarRating

// const StarRating = ({rating}) => {
//     const stars = [];
//     for (let i = 1; i <=5, i++) {
//         if (i <= rating) {
//             stars.push(<i class="fas fa-star"></i>);
//         } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
//             stars.push(<i class="fas fa-star-half-alt"></i>);
//         }
//         else {
//             stars.push(<i class="far fa-star"></i>);
//         }
//     }
//     return (
//         <>
//         {stars}
//         </>
//     )
// }
