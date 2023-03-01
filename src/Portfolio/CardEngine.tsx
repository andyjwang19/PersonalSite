interface CardEngineProps {
    data: { name: string; imgSlug: string; blurb: string }[];
}

enum cardSizes {
    Small,
    Medium,
    Large,
    None,
}
enum cardSizeBreakpoints {
    Small = 190,
    Medium = 440,
    Large = 900,
}

const patterns = [
    [cardSizes.Small, cardSizes.Large, cardSizes.Medium],
    [cardSizes.Small, cardSizes.Medium, cardSizes.Large],
    [cardSizes.Medium, cardSizes.Large, cardSizes.Small],
    [cardSizes.Medium, cardSizes.Small, cardSizes.Large],
    [cardSizes.Large, cardSizes.Small, cardSizes.Medium],
    [cardSizes.Large, cardSizes.Medium, cardSizes.Small],

    [cardSizes.Medium, cardSizes.Medium, cardSizes.Medium],
    [cardSizes.Large, cardSizes.Large],
    [
        cardSizes.Small,
        cardSizes.Small,
        cardSizes.Small,
        cardSizes.Small,
        cardSizes.Small,
        cardSizes.Small,
    ],
];

function generateLayout(dataSizes: cardSizes[]): number[][] {
    const chosen = Array<number>(dataSizes.length).fill(0);
    const layout = Array<Array<number>>();

    // Grab bag random implement later
    let patternIdx = 0;
    while (chosen.includes(0)) {
        //choose a layout
        const rowPattern = patterns[patternIdx];

        const res = rowPattern.map((size) => {
            // loop thru dataSizes, look for size
            const foundIdx = dataSizes.findIndex(
                (portSize, idx) => portSize == size && chosen[idx] == 0
            );
            // doesn't not consider if the layout is not completely fullfilled
            if (foundIdx !== -1) {
                chosen[foundIdx] = 1;
            }
            return foundIdx;
        });
        layout.push(res);

        patternIdx += 1;
    }
    return layout;
}

export default function CardEngine({ data }: CardEngineProps) {
    function generateDataSizes(data: string[]): cardSizes[] {
        return data.map((d) => {
            if (d.length < cardSizeBreakpoints.Small) {
                return cardSizes.Small;
            }
            if (d.length < cardSizeBreakpoints.Medium) {
                return cardSizes.Medium;
            }
            return cardSizes.Large;
        });
    }
    const dataSizes = generateDataSizes(data.map((d) => d.blurb));
    const layout = generateLayout(dataSizes);

    return (
        <div className="flex w-full flex-col pl-5 pr-5 pb-10">
            {layout.map((row) => {
                const rowData = row
                    .filter((x) => x !== -1)
                    .map((r) => {
                        return data[r];
                    });
                const pattern = row
                    .filter((x) => x !== -1)
                    .map((r) => {
                        return dataSizes[r];
                    });
                return (
                    <div className="mb-2 mt-2 flex w-full flex-row">
                        {pattern.map((p, idx) => {
                            const adj =
                                p === cardSizes.Small
                                    ? 'w-1/6'
                                    : p === cardSizes.Medium
                                    ? 'w-1/3'
                                    : 'w-1/2';
                            return (
                                <div
                                    className={`m-2 h-96 whitespace-normal break-words rounded-lg bg-white p-2 font-sans font-medium ${adj}`}
                                >
                                    {rowData[idx].blurb}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
