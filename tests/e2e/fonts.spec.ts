import {test,expect} from '@playwright/test';
test('self-hosted fonts load for Turkish text without a third-party request',async({page})=>{
 const externalFonts:string[]=[];
 page.on('request',request=>{if(/fonts\.(googleapis|gstatic)\.com/.test(request.url()))externalFonts.push(request.url());});
 await page.goto('/');
 const loaded=await page.evaluate(async()=>{
   const sans=await document.fonts.load('16px "Geist"','Türkçe İı Ğğ Şş');
   const mono=await document.fonts.load('16px "Geist Mono"','Türkçe İı Ğğ Şş');
   return sans.length>0 && mono.length>0 && [...sans,...mono].every(font=>font.status==='loaded');
 });
 expect(loaded).toBe(true);expect(externalFonts).toEqual([]);
});
