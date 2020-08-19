function getDate() {
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  return today.toLocaleDateString('en-US', options);
}

function getDay() {
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString('en-US', options);
}

module.exports = {
  getDate,
  getDay,
};