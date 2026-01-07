document.addEventListener("DOMContentLoaded", function () {

    const productsArea = document.querySelector('#productsArea');

    fetch('./json/productData.json')

        .then(response => {
            return response.json();
        })

        //遍歷商品資料
        .then(allProducts => {

            //針對每一個商品id創建div>>新增樣式>>填入內容
            allProducts.forEach(product => {

                const productItem = document.createElement('div');

                productItem.classList.add('productItem');

                productItem.innerHTML = `
                    <img src="${product.coverImage}" alt="${product.name}">
                    <h1>${product.name}</h1>
                    `;

                //添加點擊>>點擊時開新分頁 productIntro)
                productItem.addEventListener('click', () => {
                    window.open(`./productIntro.html?id=${product.id}`, '_blank');
                });

                //加入到頁面
                productsArea.append(productItem);
            });
        })
});