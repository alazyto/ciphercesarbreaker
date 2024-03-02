// Import necessary functions for testing
const { getAllEntropies, getEntropy, decrypt, mod } = main;

// Unit tests
describe("Caesar Cipher Decryption", () => {
  let testText = "HelloWorld";
  
  test("getAllEntropies returns an array of pairs", () => {
    const entropies = getAllEntropies(testText);
    expect(Array.isArray(entropies)).toBe(true);
    expect(entropies.length).toBe(26);
    expect(Array.isArray(entropies[0])).toBe(true);
    expect(entropies[0].length).toBe(2);
  });

  test("getEntropy returns a number", () => {
    const entropy = getEntropy(testText);
    expect(typeof entropy).toBe("number");
  });

  test("decrypt returns a string", () => {
    const decryptedText = decrypt(testText, 3);
    expect(typeof decryptedText).toBe("string");
  });

  test("mod returns the correct value", () => {
    const result = mod(-1, 26);
    expect(result).toBe(25);
  });

  test("doShift updates text and shiftElem correctly", () => {
    // Mock the DOM elements
    const textElem = { value: "Vwduwljudeehgh", textContent: "" };
    const shiftElem = { textContent: "" };
    const guessesElem = { replaceChildren: jest.fn() };

    // Mock the outputState
    const outputState = { inputText: "HelloWorld", shift: 3 };

    // Mock object
    const mockApp = {
      outputState,
      textElem,
      shiftElem,
      guessesElem,
      doShift: main.doShift,
    };

    // Perform the shift
    mockApp.doShift(2);

    // Check if textElem and shiftElem are updated correctly
    expect(textElem.value).toBe("JgnnqYqtnf");
    expect(shiftElem.textContent).toBe("5");
  });
});
