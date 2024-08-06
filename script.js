document.addEventListener('DOMContentLoaded', () => {
    fetch('feed.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const products = xml.getElementsByTagName('product');
            const productList = document.getElementById('product-list');
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                const name = product.getElementsByTagName('name')[0].textContent;
                const price = product.getElementsByTagName('price')[0].textContent;
                const description = product.getElementsByTagName('description')[0].textContent;
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `<h2>${name}</h2><p>${price}</p><p>${description}</p>`;
                productList.appendChild(productDiv);
            }
        });
});
