document.addEventListener("DOMContentLoaded", function() {
    const mangaList = [
        { title: "Manga 1", cover: "images/manga1.jpg" },
        { title: "Manga 2", cover: "images/manga2.jpg" },
    ];

    const listContainer = document.querySelector(".manga-list");
    mangaList.forEach(manga => {
        const mangaDiv = document.createElement("div");
        mangaDiv.innerHTML = `<img src="${manga.cover}" alt="${manga.title}"><h3>${manga.title}</h3>`;
        listContainer.appendChild(mangaDiv);
    });
});
