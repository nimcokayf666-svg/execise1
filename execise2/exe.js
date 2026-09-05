   
// 1 FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2 while

let b = 1;

while (b <= 5) {
    console.log(b);
    b++;
}

// 3 DO...WHILE LOOP

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);

// 4 FOR...OF LOOP

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 5  FOR...IN LOOP

let student = {
    name: "Nimco",
    age: 21
};

for (let property in student) {
    console.log(property);
}


