module.exports = {
    testPathIgnorePatterns: ['./.next/', './node_modules/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': './node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^@redux/(.*)$': './pages/$1',
    },
};