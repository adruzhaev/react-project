export const convertSortType = (type: string) => {
    switch(type) {
        case 'Release Date':
            return 'release_date'
        case 'Rating':
            return 'vote_average'
        default:
            return ''
    }
}
