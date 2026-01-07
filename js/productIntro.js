document.addEventListener("DOMContentLoaded", function () {
    // 取得網址參數
    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get('id');
    
    let currentProduct = null;
    let selectedOption = null;
    let quantity = 0;
    
    // 載入商品資料
    fetch('./json/productData.json')
        .then(response => response.json())
        .then(allProducts => {
 
            currentProduct = allProducts.find(product => product.id == productID);
            
            if (currentProduct) {
                UpdatePreviewButtons(currentProduct.options);
                UpdateProductInfo(currentProduct);
                UpdateOptionButtons(currentProduct.options);
                
                // 預設選中第一個選項
                if (currentProduct.options.length > 0) {
                    selectedOption = currentProduct.options[0];
                }
            }
        });
    
    //更新左側小圖按鈕
    function UpdatePreviewButtons(options) {
        const previewBox = document.querySelector('.previewBox');
        
        options.forEach((option, index) => {

            const btn = document.createElement('button');
            btn.classList.add('previewBtn');
            
            //直接改變第一個按鈕的樣式(選中狀態)
            if (index === 0) {
                btn.classList.add('clicked'); 
            }
            
            const previewImg = document.createElement('img');
            previewImg.src = option.image;
            previewImg.alt = option.name;
            
            btn.append(previewImg);
            
            //添加點擊功能->更新自己和右邊mainImage
            btn.addEventListener('click', () => {
                
                //先找到所有previewBtn樣式，移除clicked樣式
                document.querySelectorAll('.previewBtn').forEach(b => {
                    b.classList.remove('clicked');
                });
                
                //自己加上clicked樣式
                btn.classList.add('clicked');
                
                //更新mainImage
                document.querySelector('#mainImage').src = option.image;
                
                //更新選項
                selectedOption = option;
            });
            
            previewBox.append(btn);
        });
    }


    //更新下方商品資訊
    function UpdateProductInfo(currentP) {

        document.querySelector('#mainImage').src = currentP.options[0].image;

        document.querySelector('.info_Name').textContent = currentP.name;
        
        document.querySelector('.info_Price').textContent = `$${currentP.price}`;
        
        //(說明內容) ｜ 材質：(材質內容) ｜ 尺寸：(尺寸內容)
        const infoDetail = document.querySelector('.info_Detail');
        infoDetail.textContent = `${currentP.description}｜材質：${currentP.material}｜尺寸：${currentP.size}`;

        //幹原來可以改頁面名稱喔
        document.title = currentP.name;
    }
    
    //加入購物車按鈕
    const addToCartBtn = document.querySelector('#addToCartBtn');
    const menuBox = document.querySelector('.menuBox');
    
    addToCartBtn.addEventListener('click', () => {
        menuBox.classList.add('show'); //給menuBox添加show樣式
        quantity = 0;  
        UpdateQuantityDisplay();
    });
    
    // 關閉按鈕
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
        menuBox.classList.remove('show');
    });
    
    //更新購買選項按鈕(類似previewButtons)
    function UpdateOptionButtons(options) {
        const optionsBox = document.querySelector('#optionsBox');
        
        options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.classList.add('optionBtn');
            btn.textContent = option.name;
            
            if (index === 0) {
                btn.classList.add('clicked');
            }
            
            btn.addEventListener('click', () => {

                document.querySelectorAll('.optionBtn').forEach(b => {
                    b.classList.remove('clicked');
                });

                btn.classList.add('clicked');
                
                document.querySelector('#optionImg').src = option.image;

                selectedOption = option;
            });
            
            optionsBox.append(btn);
        });
        
        if (options.length > 0) {
            document.querySelector('#optionImg').src = options[0].image;
        }
    }
    
    //減號按鈕
    const reduceBtn = document.querySelector('#reduceQuantity');
    reduceBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            UpdateQuantityDisplay();
        }
    });
    
    //加號按鈕
    const raiseBtn = document.querySelector('#raiseQuantity');
    raiseBtn.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            UpdateQuantityDisplay();
        } 
        else {
            alert('已達購買上限');
        }
    });

    //數量文字
    const quantityText = document.querySelector('.quantityText');
    function UpdateQuantityDisplay() {
        quantityText.textContent = quantity;
    }
    
    //確認加入購物車按鈕(現在只有提示)
    const confirmBtn = document.querySelector('#confirmAddToCartBtn');
    confirmBtn.addEventListener('click', () => {
        if (quantity === 0) {
            alert('請選擇數量');
        } 
        else {
            alert(`已將 ${quantity} 個 ${currentProduct.name} 加入購物車`);
            menuBox.classList.remove('show');  //移除menuBox的show樣式，回到初始關閉狀態
        }
    });
});