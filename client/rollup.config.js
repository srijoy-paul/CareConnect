export default {
    // other configurations...
    build: {
        rollupOptions: {
            external: ['@safe-globalThis/safe-ethers-adapters'],
        },
    },
};
