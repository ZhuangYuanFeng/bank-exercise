/**
 * Created by zhuang on 2016/9/16.
 */
function runtime(){
    var min = document.getElementById("min");
    var s = document.getElementById("s");
    if(min.innerHTML != 0 && s.innerHTML == 0){
        s.innerHTML = 60;
        min.innerHTML = min.innerHTML-1;
    }else if(min.innerHTML == 0 && s.innerHTML == 0){
        alert("test over!");
        window.clearInterval(end);
    }
    s.innerHTML = s.innerHTML * 1 - 1;
}
var end = window.setInterval("runtime();", 1000);


function count(){
    var ct = document.getElementById("ct");
    var nub = document.getElementById("nub");
    ++ct.innerHTML;
    ++nub.innerHTML;
    if(ct.innerHTML > 1000){
        ct.innerHTML = ct.innerHTML - 1;
        alert("you have been finished!")
    }

}
function _getRandomString(len) {
    len = len || 3;
    var $chars = '��һ�����Ҳ��������������������ʱ���Ϊ������˵�������ž��Ǻ�Ҫ����Ҳ��������Ի�ҿ��¶�����ȥ�ܶ�С��Ȼ����ѧô֮���ÿ��𷢵�û��ֻ���°ѻ��õ����������ֿ����ܴ����鼺����Ů����ǰЩ��ͬ���������⶯������ͷ��������λ�ְ�����ܸ�������˹֪��ʲ����ʹ���߱�����������˻����������������������ļ������������⺢�������߽���ʮʵ������ȫ��������������ÿ�������̫�±Ȳű�����鲿ˮ���۵���ȴ�ӵ�������������������ٿ˴�Ա���ȿ�������д�����׻�ס��������������ɫ��������Ǵ���ĸ��Ӧֱ�ֳ�ƽ���ѹط������ϽӸ���Ц��Ӣ�����������ζ�ɽ��·�����б߷����ν��ԭ�����ͨʦ��������ʧ��սԶ��ʿ����Ŀ���ز�ʼ�������������������ҵ˼��������Ƭ��Ǯ������Ԫϲ����ɿ��Ը�����Լ����ָ�Ϸ���ظ��۽�������ҽ������������������˼�����Ժ�����Ʒ���������Ǿ�������˾�������δ���һ�̨ҹ�౱�Ӿú�Խ���価��Ӱ��ְ����ܰ�ʶ��ϣ�������а���������̸�ݼ��������׸�����ʽȡ�հ�ǿʯ�Ż�ՠ�ü���װ����˫����ת���׳������������վ�ڿ�ͳ�ϸ��ǹ�������ѡ��������ά����ϵ��ʾԸ��ǧʷ˭׼�����ͻ���־����ʫ����ʹ���������徹ȷ���赥�ο�������ٽ����¹�ë��Ϣ���ٴ������������γ̺žӿ�ͻƤ�ķѵ���ͼ�߸�������������ϸר�ƿ��ζ��ľݰ�����ʳ�Դ���ע����ĳ��Ѫ��ϰУĬ����΢�����Ի��ϵ���͠��������������и��δ����ΰ˳�������ӡ�����������������ͣ������ֽ��������������֤�۷���Ȥ֧������ľ�а��յ���˯չ������������Ⱥ�ʶμ�ͥ��������л�ܵ�񺦲��ű�ֹ���ݳ��⾦��ǿ�������æ�ʺ���������ƾ��������Χ���׻��侯����ѩ���簡����������ֵ�ﺺ������ų�ɳ�ֲ���������ݻ��ٹ�������ʥ���ñ���¶԰ţ���ý������ҹó�Ī���챧��Ȩ³��̬��Ʊ��Ѱɱ��ʤ�������󷶴��������¥��������׷��ְ������¼˿�������и����ǳ�Ҷ������������ž������ٲص�Ϸ����ҩ���ҿ��������ɭ��������ƹ洰ɢ���;�����ܶ�Ͷ�������׸�ѹ����������ϴ�ɺ���Ͼű���״�Ҿ�ϯ��ͯ��������ũ����Ұ�����������������Ġ�ʵƾ����⻷ķ�������������̲�����ȱ����ŷ�㸶����������ݶ����������ίӵ����̽ѽӪ��ҡŪ����ŵ�����ƽ������׿����ſ��񺰽�����������Ь��ģ�ܰ��ػ��ʲƹ�ǹ���ֻ�ܼ���ˠ��Ǹ�̹�ƽ�˳�����˻��ڹ�������Ԥ����������������ʢ������������ͽ�����'; // Ĭ��ȥ�������׻������ַ�oOLl,9gq,Vv,Uu,I1
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    var username = document.getElementById("username");
    username.innerHTML = pwd;
    return pwd;
}
function change(len){
    len = len || 4;
    var $chars = '��һ�����Ҳ��������������������ʱ���Ϊ������˵�������ž��Ǻ�Ҫ����Ҳ��������Ի�ҿ��¶�����ȥ�ܶ�С��Ȼ����ѧô֮���ÿ��𷢵�û��ֻ���°ѻ��õ����������ֿ����ܴ����鼺����Ů����ǰЩ��ͬ���������⶯������ͷ��������λ�ְ�����ܸ�������˹֪��ʲ����ʹ���߱�����������˻����������������������ļ������������⺢�������߽���ʮʵ������ȫ��������������ÿ�������̫�±Ȳű�����鲿ˮ���۵���ȴ�ӵ�������������������ٿ˴�Ա���ȿ�������д�����׻�ס��������������ɫ��������Ǵ���ĸ��Ӧֱ�ֳ�ƽ���ѹط������ϽӸ���Ц��Ӣ�����������ζ�ɽ��·�����б߷����ν��ԭ�����ͨʦ��������ʧ��սԶ��ʿ����Ŀ���ز�ʼ�������������������ҵ˼��������Ƭ��Ǯ������Ԫϲ����ɿ��Ը�����Լ����ָ�Ϸ���ظ��۽�������ҽ������������������˼�����Ժ�����Ʒ���������Ǿ�������˾�������δ���һ�̨ҹ�౱�Ӿú�Խ���価��Ӱ��ְ����ܰ�ʶ��ϣ�������а���������̸�ݼ��������׸�����ʽȡ�հ�ǿʯ�Ż�ՠ�ü���װ����˫����ת���׳������������վ�ڿ�ͳ�ϸ��ǹ�������ѡ��������ά����ϵ��ʾԸ��ǧʷ˭׼�����ͻ���־����ʫ����ʹ���������徹ȷ���赥�ο�������ٽ����¹�ë��Ϣ���ٴ������������γ̺žӿ�ͻƤ�ķѵ���ͼ�߸�������������ϸר�ƿ��ζ��ľݰ�����ʳ�Դ���ע����ĳ��Ѫ��ϰУĬ����΢�����Ի��ϵ���͠��������������и��δ����ΰ˳�������ӡ�����������������ͣ������ֽ��������������֤�۷���Ȥ֧������ľ�а��յ���˯չ������������Ⱥ�ʶμ�ͥ��������л�ܵ�񺦲��ű�ֹ���ݳ��⾦��ǿ�������æ�ʺ���������ƾ��������Χ���׻��侯����ѩ���簡����������ֵ�ﺺ������ų�ɳ�ֲ���������ݻ��ٹ�������ʥ���ñ���¶԰ţ���ý������ҹó�Ī���챧��Ȩ³��̬��Ʊ��Ѱɱ��ʤ�������󷶴��������¥��������׷��ְ������¼˿�������и����ǳ�Ҷ������������ž������ٲص�Ϸ����ҩ���ҿ��������ɭ��������ƹ洰ɢ���;�����ܶ�Ͷ�������׸�ѹ����������ϴ�ɺ���Ͼű���״�Ҿ�ϯ��ͯ��������ũ����Ұ�����������������Ġ�ʵƾ����⻷ķ�������������̲�����ȱ����ŷ�㸶����������ݶ����������ίӵ����̽ѽӪ��ҡŪ����ŵ�����ƽ������׿����ſ��񺰽�����������Ь��ģ�ܰ��ػ��ʲƹ�ǹ���ֻ�ܼ���ˠ��Ǹ�̹�ƽ�˳�����˻��ڹ�������Ԥ����������������ʢ������������ͽ�����'; // Ĭ��ȥ�������׻������ַ�oOLl,9gq,Vv,Uu,I1
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    var address = document.getElementById("address");
    address.innerHTML = pwd;
    return pwd;
}

function z_n() {
    return (Math.floor(Math.random()*10));
}
function o_n() {
    return (Math.floor(Math.random()*9+1));
}
function radomMonth() {
    var num = Math.random();
    num = Math.ceil(num * 12);
    var str;
    if (num < 10) {
        str = "0" + num
    } else {
        str = num.toString();
    }
    return (str);
}
function radomDay() {
    var num = Math.random();
    num = Math.ceil(num * 30);
    var str;
    if (num < 10) {
        str = "0" + num
    } else {
        str = num.toString();
    }
    return (str);
}

function money(){
    var r = Math.floor(Math.random()*6+1);
    var $chars = '1234567890';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < r; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    var money = document.getElementById("money");
    money.innerHTML = o_n()+pwd+"0";
    return (o_n()+pwd+"0");
}
function save(){
    var save = document.getElementById("saveday");
    save.innerHTML = "20"+ o_n() +  o_n() + radomMonth() + radomDay();
    return ( "20"+ o_n() +  o_n() + radomMonth() + radomDay());
}
function time(){
    var num = Math.random();
    num = Math.ceil(num * 80);
    var str;
    if (num < 10) {
        str = "0" + num
    } else {
        str = num.toString();
    }
    var time = document.getElementById("savetime");
    time.innerHTML = str;
    return (str);
}
function Reset(){
    var sum=0;
    var t = document.getElementsByTagName("INPUT");
    for (var i=0; i <t.length;i++){
        if (t[i].type=='text'){
            ++sum;
            t[i].value="";//���
        }
    }

}

/*enter�л�tab*/



$(function() {
    $("form[name='contractForm'] input").keypress(function(e) {
        if (e.which == 13) {// �ж������Ƿ�س���
            var inputs = $("form[name='contractForm']").find(/*":text"*/":input"); // ��ȡ���е����������
            var idx = inputs.index(this); // ��ȡ��ǰ���������������λ��
            if (idx == inputs.length - 3) {// �ж��Ƿ�������һ���btn
                $(".tabs").keypress(function(k){
                    if(k.which == 13){
                        var sec = $("form[name='contractForm']").find(":input");
                        var idx = sec.index(this);
                        sec[idx -4].focus(); // �۽����ص�һ��input
                        sec[idx -4].select(); // ѡ������
                        test();
                        Reset();
                        _getRandomString();
                        time();
                        save();
                        money();
                        count();
                        change();
                        return ture;
                    }
                })
            } else {
                inputs[idx + 1].focus(); // ���ý�����һ��input
                inputs[idx + 1].select(); // ѡ������
            }
            return false;// ȡ��Ĭ�ϵ��ύ��Ϊ
        }
    });
});



/*������֣�*/
var allwrong = 0;
function test(){

    var wr = document.getElementById("wr");
    var a = document.getElementsByClassName("arr");
    var numArr = []; // ����һ��������
    var txt = $('#arr_1').find(':text'); // ��ȡ�����ı���
    for (var i = 0; i < txt.length; i++) {
        numArr.push(txt.eq(i).val()); // ���ı����ֵ��ӵ�������
    }
    console.info(numArr);
    var b = 0;
    var j, k;
    for(j=0,k=0;j<=4,k<=4;j++,k++ ){
        if(a[j].innerHTML!=numArr[k]){
            allwrong = allwrong+1;
        }
    }
    wr.innerHTML = allwrong;
}
