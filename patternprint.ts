class Pattern {
    count: number;

    constructor() {
        this.count = 1;
    }

    public printPattern(n: number) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write(this.count + "");
                this.count++;
            }
            console.log();
        }
    }
}

const pattern = new Pattern();
pattern.printPattern(4);