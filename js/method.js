
/**
 * Hàm xử lý nhận vào 1 mảng và tính tổng giá trị dương có trong mảng
 * @param {*} arrNum : là mảng cần nhập vào 
 * @returns : trả về tổng giá trị các số dương có trong mảng.
 */
function tongSoDuong(arrNum) {
    var tongSoDuong = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            tongSoDuong += Number(arrNum[i])
        }
    }
    return tongSoDuong;
}
/**
 * Hàm xử lý nhận vào 1 mảng và đếm số lượng số dương có trong mảng
 * @param {*} arrNum :là màng cần nhập vào
 * @returns :  trả về số lượng số dương có trong mảng
 */
function demSoDuong(arrNum) {
    var dem = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            dem += 1;
        }
    }
    return dem;
}
/**
 * Hàm xử lý nhận vào 1 mảng và tìm số nhỏ nhất của mảng vừa nhập
 * @param {*} arrNum : là mảng cần nhập vào
 * @returns : trả về số nhỏ nhất trong mảng 
 */
function timSoNhoNhat(arrNum) {
    var soNho = arrNum[0]
    for (i = 1; i < arrNum.length; i++) {
        if (soNho > Number(arrNum[i])) {
            soNho = Number(arrNum[i]);
        }
    }
    return soNho
}

/**
 * Hàm xử lí nhập vào 1 mảng , tìm số dương có trong mảng , và trả về mảng mới chỉ chứa số dương.
 * @param {*} arrNum :  mảng cần nhập vào
 * @returns :  trả về mảng mới chỉ chứa số dương
 */
function timSoDuong(arrNum) {
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


/**
 * hàm xử lí nhận vào mảng và tìm số chẳn có trong mảng
 * @param {*} arrNum : là mảng cần nhập vào
 * @returns : trả về mảng mới chỉ chứa số chẳn
 */
function timSoChan(arrNum) {
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

/**
 *  hàm nhận  xử lí vào mảng , giá trị a , b và xử lí đổi chỗ các phần tử trong mảng dựa vào giá trị a ,b  
 * @param {*} arrNum : là mảng cần nhập vào
 * @param {*} a : giá trị thứ nhất
 * @param {*} b  : giá trị thứ hai
 * @returns  : trả về mảng mới sao khi đổi chỗ 
 */
function doiCho(arrNum,a,b) {
    var swap;
    swap = arrNum[a];
    arrNum[a] = arrNum[b];
    arrNum[b] = swap;
    return arrNum;
}

/**
 * Hàm nhận vào một mảng và sắp xếp tăng dần mảng vừa nhận
 * @param {*} arrNum : mảng cần nhập vào
 * @returns : trả về mảng mới sao khi sắp xếp
 */
function sapxep(arrNum) {
    arrNum.sort(function (a, b) {
        return a - b;
    });
    return arrNum;
}

/**
 * hàm nhận giá trị và kiểm tra giá trị đó có phải số nguyên tố hay không
 * @param {*} arrNum : giá trị nhập vào
 * @returns : trả về true nếu là số nguyên tố ngược lại thì trả về false
 */
function kiemTraNguyenTo(arrNum) {
    var count = true;
    if (arrNum < 2) {
        count = false;
    }
    else {
        for (uoc = 2; uoc <= Math.sqrt(arrNum); uoc++) {
            if (arrNum % uoc === 0) {
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

/**
 *  hàm nhận vào mảng và đếm trong mảng có bao nhiêu số nguyên
 * @param {*} arrNum : mảng cần nhập vào
 * @returns : trả về số lượng số nguyên có trong mảng
 */
function demSoNguyen(arrNum) {
    var demNguyen = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (Number.isInteger(Number(arrNum[i])) == true) {
            demNguyen += 1;
        }
    }
    return demNguyen;
}

/**
 * hàm nhận vào một mảng và đếm trong mảng có bao nhiêu số dương
 * @param {*} arrNum : mảng cần nhập vào
 * @returns : trả về  số lượng số dương có trong mảng
 */
function demDuong(arrNum) {
    var demDuong = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            demDuong += 1;
        }
    }
    return demDuong;
}


/**
 * hàm nhận vào một mảng và đếm trong mảng có bao nhiêu số âm
 * @param {*} arrNum : mảng cần nhập vào
 * @returns :  trả về số lượng số âm có trong mảng
 */
function demAm() {
    var demAm = 0;
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < 0) {
            demAm += 1;
        }
    }
    return demAm;
}