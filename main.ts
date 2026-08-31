interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
type UserPublic = Omit<User, "password">;

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines: string[] = [];
rl.on("line", (line: string) => {
    lines.push(line);
    if (lines.length === 3) {
        const [name, email, password] = lines;
        const user: User = { id: 1, name, email, password };
        const { password: _, ...pub } = user;
        console.log(JSON.stringify(pub));
        rl.close();
    }
});
rl.on("close", () => process.exit(0));