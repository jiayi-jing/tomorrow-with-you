//#######################################################返回顶部按钮######################################################




// ######################################################时间功能######################################################

// 设置起始日期（请修改为实际开始日期，月份是0-11）
// 例如：2023年5月20日 应写为 new Date(2023, 4, 20)
const startDate = new Date(2025, 7, 26);

// 获取页面元素
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// 更新计时器函数
function updateTimer() {
    // 获取当前时间
    const now = new Date();
    
    // 计算时间差（毫秒）
    const timeDiff = now - startDate;
    
    // 转换为总秒数
    const totalSeconds = Math.floor(timeDiff / 1000);
    
    // 计算天、时、分、秒
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    // 补零并更新显示
    daysElement.textContent = days.toString().padStart(3, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// 初始化显示
updateTimer();

// 每秒更新一次
setInterval(updateTimer, 1000);
