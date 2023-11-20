//bai 1
function bai1() {
    for (let i = 1; i < 100; i++) {
        document.write(i);
        document.write("<br>");
    }
    alert("finished")
}

//bai 2
function bai2() {
    let temp = +prompt("Enter the temperature: ")
    while (temp > 100) {
        alert("Too high, enter temp again < 100");
        temp = +prompt("Enter again");
    }
    while (temp < 20) {
        alert("too low, enter temp again > 20");
        temp = +prompt("Enter again");
    }
}

//ham in ra so fibonaci
function fibonacci(n) {
    let fibonacciArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    return fibonacciArray;
}

// bai 3
function bai3_fibonacci() {
    let n3 = fibonacci(20);
    document.write(n3);
}

//bai 4
function bai4() {
    let array = fibonacci(n = +prompt("nhap so luong fibonacci can tim: "));
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            document.write("so dau tien trong day fibo chia het cho 5 la so " + array[i]);
            break;
        }
    }
}

//bai 5
function bai5() {
    let n5 = fibonacci(20);
    let sum = 0;
    document.write("20 so fibonacci dau tien la: " + n5 + "<br>");
    for (let i = 0; i < n5.length; i++) {
        sum += n5[i];
    }
    document.write("Tong của chung là: " + sum);
}

//bai 6
function bai6() {
    let count = 0;
    let sum = 0;
    let i = 1;
    while (true) {
        if (i % 7 === 0) {
            console.log(i)
            sum += i;
            count++;
        }
        if (count >= 30) {
            break;
        }

        i++;
    }
    console.log(sum)
}
