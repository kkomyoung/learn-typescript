{
    /**
     * JavaScript
     * Primitive type: null, string, boolean, bigint, symbol, null, undefined
     * Object type: function, array ...
     */

    
    // number
    const num:number = 1;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined : 값이 있는지 없는지 아무것도 결정되지 않은 '아무 값도 할당받지 않은 상태'
    let name: undefined; // 💩
    let age: number | undefined
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null : 비었다 '존재하지 않는 값 (값의 부재)'
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩 : 어떤 타입의 데이터가 담길지 모르는 상태
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void : 함수에서 아무것도 리턴하지 않는 (생략가능)
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩

    // never : 리턴하는 값이 절대 없음
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while(true) {

        }
        let neverEnding: never; // 💩
    }   

    //object : 원시타입을 제외한 모든 object 타입을 사용할 수 있다.
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}