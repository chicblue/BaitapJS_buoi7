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
    // process
    var tongDuong = tongSoDuong(arrNum);
    // output
    document.getElementById('in-so-duong').innerHTML = tongDuong;
}
// bài 2 : đếm số dương

document.getElementById('btn-dem-so-duong').onclick = function () {
    // process
    var demDuong = demSoDuong(arrNum);
    // output
    document.getElementById('dem-so-duong').innerHTML = demDuong;
}
// bài 3
document.getElementById('btn-tim-so-nho').onclick = function () {
    // process
    var timNhoNhat = timSoNhoNhat(arrNum)
    //output
    document.getElementById('tim-so-nho').innerHTML = timNhoNhat;
}
// bài 4
document.getElementById('btn-tim-so-duong-nho').onclick = function () {
    // input
    var find = timSoDuong(arrNum);
    // output
    var soDuongNho = find[0];
    // process
    for (i = 1; i < find.length; i++) {
        if (soDuongNho > find[i]) {
            soDuongNho = find[i];
        }
    }
    document.getElementById('tim-so-duong').innerHTML = find;
    if (find.length > 0) {
        document.getElementById('tim-so-duong-nho').innerHTML = soDuongNho;
    }
    else {
        document.getElementById('tim-so-duong-nho').innerHTML = ' Không có phần tử dương';
    }
}
// bài 5
document.getElementById('btn-tim-so-chan').onclick = function () {
    var timCuoi = timSoChan(arrNum);
    var soChanCuoi;
    if (timCuoi.length === 0) {
        document.getElementById('tim-so-chan-cuoi').innerHTML = '-1'
    }
    else {
        soChanCuoi = timCuoi[timCuoi.length - 1];
        document.getElementById('tim-so-chan').innerHTML = timCuoi;
        document.getElementById('tim-so-chan-cuoi').innerHTML = soChanCuoi;
    }
}
//**********bài 6***************
document.getElementById('btn-doi-cho').onclick = function () {
    // input
    var soMot = Number(document.getElementById('so-thu-nhat').value);
    var soHai = Number(document.getElementById('so-thu-hai').value);
    // process
    var doiViTri = doiCho(arrNum, soMot, soHai);
    // output
    document.getElementById('doi-cho').innerHTML = '[' + doiViTri + ']';
}
// bài 7
document.getElementById('btn-sap-xep').onclick = function () {

    var sapXepTang = sapxep(arrNum);
    document.getElementById('sap-xep').innerHTML = sapXepTang;


}
// ************* Bài 8 ***********************
document.getElementById('btn-nguyen-to').onclick = function () {

    // process
    var nguyenToDau = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (kiemTraNguyenTo(arrNum[i]) === true) {
            nguyenToDau = arrNum[i];
            break;
        }
    }
    // output
    if (nguyenToDau === 0) {
        document.getElementById('nguyen-to').innerHTML = '-1'
    }
    else {
        document.getElementById('nguyen-to').innerHTML = nguyenToDau;
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
    // process
    var soNguyen = demSoNguyen(arrNum);
    // output
    document.getElementById('so-nguyen').innerHTML = soNguyen;
}

// bài 10
document.getElementById('btn-so-sanh').onclick = function () {
    
    // process
    var soSanhDuong = demDuong(arrNum);
    var soSanhAm = demAm(arrNum);
    // output
    if (soSanhDuong == soSanhAm) {
        document.getElementById('so-sanh').innerHTML = 'Số Dương Bằng Số Âm';
    }
    else if (soSanhDuong > soSanhAm) {
        document.getElementById('so-sanh').innerHTML = 'Số Dương Lớn Hơn Số Âm';
    }
    else {
        document.getElementById('so-sanh').innerHTML = 'Số Dương Bé Hơn Số Âm';
    }
    // process


}


