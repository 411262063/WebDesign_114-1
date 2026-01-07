document.addEventListener("DOMContentLoaded" ,function(){
    var calendarEl = document.getElementById('calendar');
            
            var calendar = new FullCalendar.Calendar(calendarEl, {
                
                initialView: 'dayGridMonth', // 月視圖

                initialDate: '2025-12-01', // 初始日期（2025年12月）

                locale: 'zh-tw',
                
                headerToolbar: {
                    // left: 'prev,next today',
                    // center: 'title',
                    // right: 'dayGridMonth'
                    left: '',
                    center: 'title',
                    right:'prev,next today'
                },
                
                // 按鈕文字
                buttonText: {
                    today: '今天',
                    // month: '月'
                },
                
                // 事件
                events: [
                    {
                        title: '周邊預購',
                        start: '2025-12-03',
                        end: '2025-12-08',
                        color: 'var(--color-pink)'
                    },
                    {
                        title: '預購商品出貨',
                        start: '2025-12-11',
                        color: 'var(--color-red)'
                    },
                    {
                        title: '線下簽售',
                        start: '2025-12-13',
                        end: '2025-12-15',
                        color: 'var(--color-blue)'
                    },
                    {
                        title: '專題審查',
                        start: '2025-12-27',
                        color: 'red'
                    }
                ],

                height: 'auto'
            });
            
            calendar.render();
});