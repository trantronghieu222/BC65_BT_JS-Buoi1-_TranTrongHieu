/* ---------- Bài 1 ---------- */
/* 
    Tính tiền lương nhân viên

    B1. Đầu vào
    Lương theo ngày
    Số ngày làm việc của nhân viên

    B2. Tính tổng số tiền lương
    Lương theo ngày * số ngày làm việc

    B3. Kết quả : tổng tiền
*/
var luong = 100000;
var tongLuong;
var soNgay = 5;
tongLuong = luong * soNgay;
console.log("salary = ", tongLuong);

/* ---------- Bài 2 ---------- */
/*
    Tính giá trị trung bình

    B1. Đầu vào
    là 5 số tự nhiên a,b,c,d,e
    
    B2. Tính giá trị trung bình là cộng tổng 5 số lại chia 5
    trungBinh = (a + b + c + d + e)/5;

    B3. Đầu ra giá trị trung bình của 5 số
*/

var trungBinh;
var a = 5, b = 2.5, c = 4.75, d = 10, e = 6;
trungBinh = (a + b + c + d + e)/5;
console.log("Giá trị trung bình: ", trungBinh);

/* ---------- Bài 3 ---------- */
/*
    Quy đổi tiền
    B1. Đầu vào giá trị Usd, số lượng usd cần đổi

    B2. Tính toán số tiền cần đổi = usd * số lượng
    tongTien = usd * soLuong;

    B3. Kết quả: số tiền sau khi đổi từ usd sang VND
*/
var usd = 23500;
var soLuong = 2;
var tongTien;
tongTien = usd * soLuong;
tongTien = tongTien.toLocaleString('vi', {style : 'currency', currency : 'VND'}).replace('₫', 'VND');
document.write("<br>Số tiền: ", tongTien);

/* ---------- Bài 4 ---------- */
/*
    Tính diện tích chu vi hình chữ nhật
    B1. Đầu vào chiều dài, chiều rộng

    B2. Tính toán
    chuVi = (dai + rong) * 2;
    dienTich = dai * rong;

    B3. Kết quả : chuVi, dienTich
*/
var dai = 5, rong = 3, chuVi, dienTich;
chuVi = (dai + rong) * 2;
dienTich = dai * rong;

document.write("<br>Chu vi: ", chuVi + ", Diện tích", dienTich);

/* ---------- Bài 5 ---------- */
/*
    Tính tổng ký 2 số

    B1. Đầu vào 1 chuỗi 2 số

    B2. Xử lý
    1. Tính hàng đơn vị = number % 10
    2. Tính hàng chục = number / 10
    3. Tổng = hàng đơn vị + hàng chục 

    B3. Kết quả: Tổng
*/

var number = 24;
var hangChuc;
var hangDonVi;
var tong;

hangDonVi = number % 10;
hangChuc = Math.floor(number / 10);
tong = hangChuc + hangDonVi;

document.write("<br>Tổng: ", tong);