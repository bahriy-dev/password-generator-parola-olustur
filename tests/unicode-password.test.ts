import {test} from 'node:test';
import assert from 'node:assert/strict';
import {generateRandomPassword} from '../src/lib/crypto';
import {getActivePoolSize} from '../src/lib/entropy';
test('excluding one emoji preserves other characters sharing its surrogate',()=>{
 const options={length:4,lowercase:false,uppercase:false,numbers:false,symbols:false,excludeSimilar:false,noAdjacentDuplicates:false,requireEachCategory:false,customCharset:'😀😁',excludedChars:'😀'};
 assert.equal(generateRandomPassword(options),'😁😁😁😁');
 assert.equal(getActivePoolSize(options),1);
});
