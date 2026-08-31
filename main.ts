type Shape = {kind: "circle", radius: number} | {kind: "square", side: number}
function area(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "square": return s.side ** 2;
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines: string[] = [];
rl.on("line", (line: string) => {
    lines.push(line);
  if (lines.length === 2) {
        const kind = lines[0];
        const dim = Number(lines[1]);
        const s: Shape = kind === "circle" ? { kind: "circle", radius: dim } : { kind: "square", side: dim };
        console.log(area(s).toFixed(2));
        rl.close();
    }
});
rl.on("close", () => process.exit(0));