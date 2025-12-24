function getMatchingTripsArr(arr, keyword) {
    return arr.filter(function (trip) {
        return trip.destination.toLowerCase().includes(keyword.toLowerCase());
    })
}

export default getMatchingTripsArr;