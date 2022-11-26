export const convertSortType = (type: string) => {
    if (type.split(' ').length === 1) {
        return type.toLocaleLowerCase()
    }

    return type.split(' ').join('_').toLocaleLowerCase()
}
