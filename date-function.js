 function getMonthData() {
  const months = [
    { key: 0, shortName: "Jan", longName: "January", } /* Object */,
    { key: 1, shortName: "Feb", longName: "February" },
    { key: 2, shortName: "Mar", longName: "March" },
    { key: 3, shortName: "Apr", longName: "April" },
    { key: 4, shortName: "May", longName: "May" },
    { key: 5, shortName: "Jun", longName: "June" },
    { key: 6, shortName: "Jul", longName: "July" },
    { key: 7, shortName: "Aug", longName: "August" },
    { key: 8, shortName: "Sep", longName: "September" },
    { key: 9, shortName: "Oct", longName: "October" },
    { key: 10, shortName: "Nov", longName: "November" },
    { key: 11, shortName: "Dec", longName: "December" },
  ];
  return months;
}

 function getDays() {
  const days = [
    { key: 0, shortName: "Sun", longName: "Sunday" },
    { key: 1, shortName: "Mon", longName: "Monday" },
    { key: 2, shortName: "Tue", longName: "Tuesday" },
    { key: 3, shortName: "Wed", longName: "Wednesday" },
    { key: 4, shortName: "Thu", longName: "Thursday" },
    { key: 5, shortName: "Fri", longName: "Friday" },
    { key: 6, shortName: "Sat", longName: "Saturday" },
  ];
  return days;
}

Date.prototype.getMonthDetail = function () {
  const monthCopy = getMonthData();
  return monthCopy[this.getMonth()];
};

Date.prototype.getMonthName = function () {
  return this.getMonthDetail().longName;
};

// Gave the students, this an assignment
Date.prototype.getShortName = function () {
  return this.getMonthDetail().shortName;
};

Date.prototype.getFirstDay = function () {
  const returnDate = new Date(this);
  returnDate.setDate(1);
  return returnDate;
};

Date.prototype.getLastDay = function () {
  const returnDate = new Date(this);
  returnDate.setMonth(this.getMonth() + 1);
  returnDate.setDate(0);
  return returnDate;
};

Date.prototype.getNumDays = function () {
  const returnDate = new Date(this);
  returnDate.setDate(1);
  return returnDate;
}


//parseInt(tod.getFirstDay().getDay())
