function solution(N) {
    // Make sure the zeros are not at the end of the string
    const regex = /[0]+[1]/g
    const binaryNumber = N.toString(2);
    const matches = binaryNumber.match(regex);
    if (!matches) return 0;
    const lens = matches.map((match) => match.length);
    // If there are more matches than one, sort and choose the longest
    if (lens.length > 1) {
        const lensSorted = lens.sort((a,b) => b-a)
        // Remove one '1' from the regex
        return lensSorted[0] - 1
    } 
    // Else return the first and only item
    return lens[0] -1
}