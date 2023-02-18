var arrNum = [];

document.getElementById('btn-them-gia-tri').onclick = function () {

    //input
    var addValue = document.getElementById('num').value;
    //output

    // process
    arrNum.push(addValue);
    document.getElementById('in-so').innerHTML = '[' + arrNum + ']';
}

function kiemTraSoDuong() {
    var soDuong = false;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            soDuong = true;
        }
    }
    return soDuong;
}
// bài 1 :tổng số dương
// output
document.getElementById('btn-in-so-duong').onclick = function () {

    document.getElementById('in-so-duong').innerHTML = tongSoDuong();
}
// process
function tongSoDuong() {
    var tongSoDuong = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            tongSoDuong += Number(arrNum[i])
        }
    }
    return tongSoDuong;
}
// bài 2 : đếm số dương

document.getElementById('btn-dem-so-duong').onclick = function () {
    // output
    document.getElementById('dem-so-duong').innerHTML = demSoDuong();
    function demSoDuong() {
        var dem = 0;
        for (i = 0; i < arrNum.length; i++) {
            if (arrNum[i] > 0) {
                dem += 1;
            }
        }
        return dem;
    }
}
// bài 3
document.getElementById('btn-tim-so-nho').onclick = function () {
    //output
    document.getElementById('tim-so-nho').innerHTML = timSoNhoNhat();
    // process
    function timSoNhoNhat() {
        var soNho = arrNum[0]
        for (i = 1; i < arrNum.length; i++) {
            if (soNho > arrNum[i]) {
                soNho = arrNum[i];
            }
        }
        return soNho
    }
}
// bài 4
document.getElementById('btn-tim-so-duong-nho').onclick = function () {
    // output
    document.getElementById('tim-so-duong').innerHTML = timSoDuong();
    if (timSoDuong().length > 0) {
        document.getElementById('tim-so-duong-nho').innerHTML = timSoDuongNhoNhat();
    }
    else {
        document.getElementById('tim-so-duong-nho').innerHTML = ' Không có phần tử dương'
    }
    // process
    function timSoDuong() {
        var arrDuong = [];
        var soDuong = '';
        for (i = 0; i < arrNum.length; i++) {
            if (arrNum[i] > 0) {
                soDuong = arrNum[i];
                arrDuong.push(soDuong);
            }
        }
        return arrDuong;
    }

    function timSoDuongNhoNhat() {
        var find = timSoDuong();
        var soDuongNho = find[0];
        for (i = 1; i < find.length; i++) {
            if (soDuongNho > find[i]) {
                soDuongNho = find[i];
            }
        }
        return soDuongNho;
    }

}

// bài 5
document.getElementById('btn-tim-so-chan').onclick = function () {

    document.getElementById('tim-so-chan-cuoi').innerHTML = timChanCuoi();
    document.getElementById('tim-so-chan').innerHTML = timSoChan();
    // process
    function timSoChan() {
        var arrChan = [];
        var soChan = '';
        for (i = 0; i < arrNum.length; i++) {
            if (arrNum[i] % 2 === 0) {
                soChan = arrNum[i];
                arrChan.push(soChan);
            }
        }
        return arrChan;
    }

    function timChanCuoi() {
        var timCuoi = timSoChan();
        var soChanCuoi = timCuoi[timCuoi.length - 1];
        return soChanCuoi;
    }
}
//**********bài 6***************
document.getElementById('btn-doi-cho').onclick = function () {
    // input
    var soMot = Number(document.getElementById('so-thu-nhat').value);
    var soHai = Number(document.getElementById('so-thu-hai').value);
    // output
    document.getElementById('doi-cho').innerHTML = '[' + doiCho() + ']';

    // process
    function doiCho() {
        var swap;
        swap = arrNum[soMot];
        arrNum[soMot] = arrNum[soHai];
        arrNum[soHai] = swap;
        return arrNum;
    }
}
// bài 7
document.getElementById('btn-sap-xep').onclick = function () {

    document.getElementById('sap-xep').innerHTML = sapxep();

    function sapxep() {
        arrNum.sort(function (a, b) {
            return a - b;
        });
        return arrNum;
    }
}
// ************* Bài 8 ***********************
document.getElementById('btn-nguyen-to').onclick = function () {
    // output
    if (timNguyenToDau() === 0) {
        document.getElementById('nguyen-to').innerHTML = '-1'
    }
    else {
        document.getElementById('nguyen-to').innerHTML = timNguyenToDau();
    }
    // process
    function kiemTraNguyenTo(n) {
        var count = true;
        if (n < 2) {
            count = false;
        }
        else {
            for (uoc = 2; uoc <= Math.sqrt(n); uoc++) {
                if (n % uoc === 0) {
                    count = false;
                    break;
                }
            }
            if (uoc === 2) {
                output = true;
            }
        }
        return count;
    }
    function timNguyenToDau() {
        var nguyenToDau = 0;
        for (i = 0; i < arrNum.length; i++) {
            if (kiemTraNguyenTo(arrNum[i]) === true) {
                nguyenToDau = arrNum[i];
                break;
            }
        }
        return nguyenToDau;
    }
}
// bài 9
document.getElementById('btn-them-gia-tri-thuc').onclick = function () {

    //input
    var themGiaTri = document.getElementById('number').value;
    //output

    // process
    arrNum.push(themGiaTri);
    document.getElementById('in-so-thuc').innerHTML = '[' + arrNum + ']';
}
document.getElementById('btn-so-nguyen').onclick = function () {
    // output
    document.getElementById('so-nguyen').innerHTML = demSoNguyen();

    // process
    function demSoNguyen() {
        var demNguyen = 0;
        for (i = 0; i < arrNum.length; i++) {
            if (Number.isInteger(Number(arrNum[i])) == true) {
                demNguyen += 1;
            }
        }
        return demNguyen;
    }
}

// bài 10
document.getElementById('btn-so-sanh').onclick = function () {
    // output
    if(demDuong()==demAm()){
        document.getElementById('so-sanh').innerHTML = 'Số Dương Bằng Số Âm';
    }
    else if(demDuong()>demAm()){
        document.getElementById('so-sanh').innerHTML = 'Số Dương Lớn Hơn Số Âm';
    }
    else{
        document.getElementById('so-sanh').innerHTML = 'Số Dương Bé Hơn Số Âm';
    }
    // process
    function demDuong() {
        var demDuong = 0;
        for (i = 0; i < arrNum.length; i++) {
            if (arrNum[i] > 0) {
                demDuong += 1;
            }
        }
        return demDuong;
    }
    function demAm() {
        var demAm = 0;
        for (i = 0; i < arrNum.length; i++) {
            if (arrNum[i] < 0) {
                demAm += 1;
            }
        }
        return demAm;
    }

}


