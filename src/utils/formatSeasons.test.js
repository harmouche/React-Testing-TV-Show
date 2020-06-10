import { formatSeasons } from "./formatSeasons";

test("formatSeasons should return an object", () => {
    const dummyData = [{ season: 1 }, {season: 2}, {season: 3}];
    const expected = {"Season 1": [{ season: 1}], "Season 2": [{ season: 2}],"Season 3": [{season: 3}]}
    const seasons = formatSeasons(dummyData);

    expect(seasons).toEqual(expected);
})