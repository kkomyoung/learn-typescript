{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript
    function add(num1: number, num2: number): number {
        return num1 + num2
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript
    // tip) id는 보통 string으로 많이 씀
    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) { 
        console.log(firstName);
        console.log(lastName);
    }
    // lastName: 전달 받을 수도 있고 받지 않을 수도 있다.
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // function addNumbers(...numbers: number[]): number {
    //     let sum = 0;
    //     numbers.map((number) => {
    //         sum += number
    //     })

    //     return sum
    // }

    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}