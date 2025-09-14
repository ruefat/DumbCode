import { tokenize, Token } from "./frontend/lexer.ts";
import { Interpret } from "./runtime/interpreter.ts";

// Read the input file
const codeFile = Deno.args[0] || "./main.txt";
const input = await Deno.readTextFile(codeFile);

const tokens: Token[] = tokenize(input);
Interpret(tokens);