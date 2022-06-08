import DateFormat from "./dateFormat";

//filter funtions to sort our arrays based on time, likes, or comments

const filterByTime = (data) => {
  data.sort((a, b) => {
    return DateFormat(b.date_posted) - DateFormat(a.date_posted);
  });
  return data;
};

const filterByLikes = (data) => {
  data.sort((a, b) => {
    return b.likes - a.likes;
  });
  return data;
};

const filterByComments = (data) => {
  data.sort((a, b) => {
    return b.comments - a.comments;
  });
  return data;
};

export { filterByTime, filterByComments, filterByLikes };
