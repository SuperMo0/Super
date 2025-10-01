
describe("my tests", () => {

    let { capitalize, reverse, caesarCipher } = module.require("./script.js")

    test("check first letter is capital", () => {
        let string = "super"
        string = capitalize(string);
        expect(string.charCodeAt(0)).toBeGreaterThan(64);
        expect(string.charCodeAt(0)).toBeLessThan(91);
    })

    test("check reverse function", () => {
        let string = "super"
        let string2 = reverse(string);
        expect(string2).toBe(string.split("").reverse().join(""));
    })


    test("check caesarcipher", () => {
        let string = "Hello, World!"
        expect(caesarCipher(string, 3)).toBe("Khoor, Zruog!");
    })










})
