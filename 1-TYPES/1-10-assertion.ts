{
    // Type Assertions 💩

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    // return에 string이 아니라 number가 들어가는 상황이면 undefined를 출력함
    console.log((result as string).length);
    console.log((<string>result).length);
    
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers.push(2); // 😱
    numbers!.push(2); // 확신할 때

    // 100% 상황일 때
    const button = document.querySelector('class')!;
}