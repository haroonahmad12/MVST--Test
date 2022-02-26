// Function to create pagination to show 5 Repos per page max, Source: Stackoverflow

export const pagination = (pageNum, array, setPaginatedList) => {
  let page = pageNum,
    per_page = 5,
    offset = (page - 1) * per_page,
    paginatedItems = array?.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(array?.length / per_page);

  setPaginatedList({
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: array?.length,
    total_pages: total_pages,
    data: paginatedItems,
  });
};
