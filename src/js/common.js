//头部
let htmlHead = `
   <img src="../src/images/common/head-logo.png" alt="展厅设计" class="fl">
    <ul class="fr">
        <li><a href="">首页</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">展厅设计</a></li>
        <li><a href="">新闻资讯</a></li>
        <li><a href="">核心团队</a></li>
        <li><a href="">联系我们</a></li>
    </ul>  
`;
$(".web-header").html(`
    ${htmlHead}
`);
//尾部
let htmlFoot = `
    <header class="foot-header title">
        <h2>联系我们</h2>
        <span class="subtitle">CONTACT</span>
    </header>
    <main class="foot-main clearFix">
        <div class="main-left fl">
            <header class="left-header">展示设计公司模板</header>
            <ul class="left-main">
                <li>地址：苏州市金鸡湖大道00号</li>
                <li>邮编：100000</li>
                <li>电话：400-8000-8000</li>
                <li>手机：130-0000-0000</li>
                <li>传真：000-8000-8000</li>
                <li>邮箱：info@email.com</li>
            </ul>
            <ul class="left-footer">
                <li class="iconfont">&#xe623;</li>
                <li class="iconfont">&#xe635;</li>
                <li class="iconfont">&#xe7e5;</li>
                <li class="iconfont">&#xe77a;</li>
            </ul>
        </div>
        <div class="main-right fr">
            <form action="" name="myForm">
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="电话">
                <input type="text" placeholder="地址">
                <input type="text" placeholder="邮箱">
                <textarea name="" id="" cols="30" rows="3" placeholder="详情"></textarea>
            </form>
            <button type="button">发送</button>
            <p class="smallFont">温馨提示：使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情请参考教程《如何设置表单中的邮箱》</p>
        </div>
    </main>
`;
$(".web-footer").html(`
    ${htmlFoot}
`);
//backToTop
$(".backTopBtn").on("click", function () {
   $("html, body").animate({
       scrollTop: 0
   }, 1000);
});