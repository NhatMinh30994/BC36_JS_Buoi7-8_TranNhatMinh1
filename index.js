// ==========Bài 1==========
function ex1(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    console.log("Tổng các số dương trong mảng là "+ sum)
}
ex1();
// ==========Bài 2==========
function ex2(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    var soDuong = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            soDuong.push(arr[i])
        }
    }
    console.log("có " + soDuong.length + " số dương trong mảng")
}
ex2();
// ==========Bài 3==========
function ex3(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log("số nhỏ nhất trong mảng là " + min)
}
ex3();
// ==========Bài 4==========
function ex4(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > 0){
            if (arr[i] < min){
                min = arr[i];
            }
        }
    }
    console.log("số dương nhỏ nhất trong mảng là " + min)
}
ex4();
// ==========Bài 5==========
function ex5(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    for (var i = arr.length - 1; i >= 0; i--){
        if (arr[i] % 2 === 0){
            console.log("số chẵn cuối cùng trong mảng là " + arr[i]);
            return;
        }
    }
    console.log(-1);
}
ex5();

// ==========Bài 7==========
function ex7(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    for (var k = arr.length - 1; k >= 0; k--){
        var isSwapped = false;
        for (var i = 0; i < k; i++){
            if (arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped === false){
            console.log(arr);
            return;
        }
    }
    console.log(arr);
}
ex7();
// ==========Bài 10==========
function ex10(){
    var arr = [5, 2, 0, 4, -1, 8, 3];
    var soDuong = [];
    var soAm = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            soDuong.push(arr[i])
        }
        if (arr[i] < 0){
            soAm.push(arr[i])
        }
    }
    if (soDuong.length > soAm.length){
        console.log("số dương nhiều hơn số âm");
    }else if(soDuong.length = soAm.length){
        console.log("số dương bằng số âm");
    }else{
        console.log("số dương ít hơn số âm");
    }
}
ex10();