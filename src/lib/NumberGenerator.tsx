export default function* makeNumberGenerator(seed: number) {
    let prev = seed;

    while(true) {
        prev = (prev * 2 + 1) % 100;

        yield prev;
    }
}