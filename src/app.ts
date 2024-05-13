import { Server } from './presentation/server';

// Función anónima autoinvicada:
( async() => {

    main();

})();

function main() {
    Server.start();
}
