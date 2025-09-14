export enum TokenType {
    ADD,
    SUBTRACT,
    OUTPUT,
}

// Token structure
export interface Token {
    value: string,
    type: TokenType,
}

// Create a new token
function token(value = "", type: TokenType): Token {
    return { value, type };
}

// Tokenize the input string into an array of tokens
export function tokenize(input: string): Token[] {
    const tokens = new Array<Token>();
    const sourceCode = input.split(''); 

    while (sourceCode.length > 0) {
        if (sourceCode[0] === '+') {
            tokens.push(token(sourceCode.shift(), TokenType.ADD));
        } else if (sourceCode[0] === '-') {
            tokens.push(token(sourceCode.shift(), TokenType.SUBTRACT));
        } else if (sourceCode[0] === '.') {
            tokens.push(token(sourceCode.shift(), TokenType.OUTPUT));
        } else if (/\s/.test(sourceCode[0])) {
            sourceCode.shift(); // remove whitespace
            continue; // ignore whitespace
        }
        else {
            throw new Error(`Unexpected character: ${sourceCode[0]}`);
        }
    }

    return tokens;
}
