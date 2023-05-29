
let pages = [
    {
        id: 1,
        title: "A",
        content: "AAA"
    },
    {
        id: 2,
        title: "B",
    },
    {
        id: 3,
        title: "C",
    },
];

export function getPages() {
    return pages;
}

export function getPage(id) {
    return pages.find((page) => page.id === id);
}