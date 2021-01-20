const DateService = {
  prepareDate: (postDate) => {
    const date = new Date(postDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("pl-PL", options);
  },
};
export default DateService;
