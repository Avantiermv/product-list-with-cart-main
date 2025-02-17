function load() {
    fetch('./script/data.json')
        .then(response => response.json())
        .then(desserts => {
            const principal = document.querySelector('#desserts-container');

            desserts.map(dessert => {
                const card = document.createElement("div");
                card.classList.add("desserts-cards");

                const image = document.createElement("img");
                image.src = dessert.image.mobile;
                image.alt = dessert.name;

                const button = document.querySelector('button');
                

                const title = document.createElement("h1");
                title.textContent = dessert.name;

                

                card.appendChild(image);
                card.appendChild(title);
                principal.appendChild(card);
            })
        });
}
load();