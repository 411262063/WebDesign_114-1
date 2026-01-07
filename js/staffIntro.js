document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    
    const staffID = urlParams.get('id');
    
    fetch('./json/staffData.json')
        .then(response => {
            return response.json();
        })

        .then(staffData => {
            
            if (staffID != null && staffData[staffID] != null) {
                const staff = staffData[staffID];
                
                // 使用 .querySelector() 的時候，選取器的方式要像 css 的方式一樣
                document.querySelector('.intro_left img').src = staff.image;

                document.querySelector('.intro_left img').alt = staff.name;

                document.querySelector('.profileBox h2').textContent = staff.job;

                document.querySelector('.profileBox h1').textContent = staff.name;
                
                // 處理換行符號 \n
                const descBox = document.querySelector('.descriptionBox');
                
                // 用 innerHTML 替換成 <br>
                descBox.innerHTML = staff.description.replace(/\n/g, '<br>');
                
            } 
            else {
                alert('找不到人員資料！');
                // 回到製作團隊
                window.location.href = './staffList.html';
            }
        })
});