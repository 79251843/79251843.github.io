// 定义一个函数来获取IP信息并显示在页面上
function fetchIPInfo() {
    fetch('https://api.vvhan.com/api/ipInfo')
        .then(response => {
            // 检查响应是否成功
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 检查API调用是否成功
            if (data.success) {
                // 构建HTML内容
                let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>';
                html += '<div class="visitor">';
                html += '欢迎' + '<span class="visitor_location">' + data.info.prov + '' + data.info.city + '</span>' + '的小伙伴！</br>爱你么么哒！';
                // 将HTML内容设置到页面的指定元素中
                document.getElementById('visitor-container').innerHTML = html;
            } else {
                // 如果API调用不成功，显示错误信息
                document.getElementById('visitor-container').innerHTML = '获取IP信息失败';
            }
        })
        .catch(error => {
            // 捕获并显示错误
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('visitor-container').innerHTML = '获取IP信息时发生错误';
        });
}

// 调用函数
fetchIPInfo();