
export function useCreatePages(pages, totalCount, currentPage) {

    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    } else if (currentPage >= Math.round(pages.length / 2) && currentPage < totalCount / 10 - 1) {

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }

    } else if ( currentPage >= totalCount / 10 -1){

        if (currentPage < totalCount / 10) {
            for (let i = currentPage - 3; i <= currentPage + 1; i++) {
                pages.push(i);
            }
        } else {
            for (let i = currentPage - 4; i <= currentPage; i++) {
                pages.push(i);
            }
        }
    }
}
