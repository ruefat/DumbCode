import { Token, TokenType } from "../frontend/lexer.ts";

export function Interpret(tokens: Token[]) {
    const tape = [0];
    const pointer = 0;

    for (const token of tokens) {
        switch (token.type) {
            case TokenType.ADD:
                tape[pointer]++;
                break;
            case TokenType.SUBTRACT:
                tape[pointer]--;
                break;
            case TokenType.OUTPUT:
                Deno.stdout.writeSync(
                    new TextEncoder().encode(String.fromCharCode(tape[pointer]))
                );
                break;
            default:
                throw new Error(`Unknown token type: ${token.type}`);
    }
}
}