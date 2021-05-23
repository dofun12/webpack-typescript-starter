import { Greeter } from './greeter';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


const g = new Greeter('Juri');
g.greet();



const fpPromise = FingerprintJS.load();
(async () => {
    // Get the visitor identifier when you need it.
    const fp = await fpPromise;
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    console.log(visitorId);
})();