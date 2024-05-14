import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server';

// Función anónima autoinvicada:
( async() => {

    main();

})();

function main() {
    // Server.start();
    console.log({ email: envs.PORT });
    
}
