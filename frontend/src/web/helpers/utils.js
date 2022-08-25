/*
 * utils.js
 */
const Utils = {
  convertDateForIos(props) {
    let date = props;
    const arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    return date;
  },
};

export default Utils;
