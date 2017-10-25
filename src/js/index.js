import '../css/app.scss';
import plugin from './plugin';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex-1"></div>
`);

document.querySelector('.ex-1').innerHTML = (`
    <div class="imgUpload"></div>
    <code>
        &lt;div class="imgUpload"&gt;&lt;/div&gt; </br></br>
        let upload = new imgUpload({ </br>
        &nbsp;&nbsp;&nbsp;&nbsp;target:document.querySelector('.imgUploadasd'),</br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxnum:6, </br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxsize:0.5,</br>
    });</br></br>
    upload.init();
    </code>
`);

window.onload=function () {
    new plugin().init();
}

