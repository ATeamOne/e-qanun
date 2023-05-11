const pptr=require('puppeteer');
const fs=require('fs');

async function myFunc(){
const browser=await pptr.launch();
const page=await browser.newPage();
// await page.goto('https://e-qanun.az/framework/897');
// await page.goto('https://e-qanun.az/framework/21300');
// await page.goto('https://e-qanun.az/framework/11254');
// await page.goto('https://e-qanun.az/framework/32626')
// await page.goto('https://e-qanun.az/framework/2860')
// await page.goto('https://e-qanun.az/framework/11566')
// await page.goto('https://e-qanun.az/framework/4481')
// await page.goto('https://e-qanun.az/framework/46960')
// await page.goto('https://e-qanun.az/framework/46944')
// await page.goto('https://e-qanun.az/framework/46947')
// await page.goto('https://e-qanun.az/framework/46945')
// await page.goto('https://e-qanun.az/framework/46959')
// await page.goto('https://e-qanun.az/framework/46943')
// await page.goto('https://e-qanun.az/framework/46948')
// await page.goto('https://e-qanun.az/framework/46940')
// await page.goto('https://e-qanun.az/framework/46941')
// await page.goto('https://e-qanun.az/framework/46942')
// await page.goto('https://e-qanun.az/framework/46946')
// await page.goto('https://e-qanun.az/framework/46950')
// await page.goto('https://e-qanun.az/framework/46951')
// await page.goto('https://e-qanun.az/framework/46952')
// await page.goto('https://e-qanun.az/framework/46953')
// await page.goto('https://e-qanun.az/framework/46955')
// await page.goto('https://e-qanun.az/framework/46956')
// await page.goto('https://e-qanun.az/framework/46957')
await page.goto('https://e-qanun.az/framework/46958')










// await page.screenshot({path: 'e-qanun.png',fullPage:true});
// await page.pdf({path: 'e-qanun.pdf',format:'A4'});

// const html=await page.content();
// console.log(html);

// const title= await page.evaluate(()=>document.title);
// console.log(title);

// const text= await page.evaluate(()=> document.body.innerText);
// console.log(text);

// const links=await page.evaluate(()=>Array.from(document.querySelectorAll('a'),(e)=>e.href));
// console.log(links);

// const Laws = await page.$$eval('.Options .Options-change  .Options-body #allFrw .Options-inner', (elements) =>
// elements.map((e) => ({
//   ordinal: e.querySelector('.Options-inner__ordinal span').innerText,
//   name: e.querySelector('.Options-inner__name span').innerText,
//   type: e.querySelector('.Options-inner__type span').innerText,
//   date: e.querySelector('.Options-inner__date span').innerText,
//   number: e.querySelector('.Options-inner__number span').innerText,
// //  cancelDate: e.querySelector('.Options-inner__date span').innerText,
// //  cancelNumber: e.querySelector('.Options-inner__number span').innerText,
// })));

// fs.writeFile('Laws.json', JSON.stringify(Laws), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });


// const constitution= await page.evaluate(()=> document.body.innerText);
// console.log(constitution);

// fs.writeFile('constitution.json', JSON.stringify(constitution), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const acts= await page.evaluate(()=> document.body.innerText);
// console.log(acts);

// fs.writeFile('acts.json', JSON.stringify(acts), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const proceedings= await page.evaluate(()=> document.body.innerText);
// console.log(proceedings);

// fs.writeFile('proceedings.json', JSON.stringify(proceedings), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const Licenses= await page.evaluate(()=> document.body.innerText);
// console.log(Licenses);

// fs.writeFile('Licenses.json', JSON.stringify(Licenses), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const duty= await page.evaluate(()=> document.body.innerText);
// console.log(duty);

// fs.writeFile('duty.json', JSON.stringify(duty), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const pensions= await page.evaluate(()=> document.body.innerText);
// console.log(pensions);

// fs.writeFile('pensions.json', JSON.stringify(pensions), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const service= await page.evaluate(()=> document.body.innerText);
// console.log(service);

// fs.writeFile('service.json', JSON.stringify(service), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const service= await page.evaluate(()=> document.body.innerText);
// console.log(service);

// fs.writeFile('service.json', JSON.stringify(service), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const administrativeOffense= await page.evaluate(()=> document.body.innerText);
// console.log(administrativeOffense);

// fs.writeFile('administrativeOffense.json', JSON.stringify(administrativeOffense), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });
// const civilCode= await page.evaluate(()=> document.body.innerText);
// console.log(civilCode);

// fs.writeFile('civilCode.json', JSON.stringify(civilCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const criminalCode= await page.evaluate(()=> document.body.innerText);
// console.log(criminalCode);

// fs.writeFile('criminalCode.json', JSON.stringify(criminalCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });


// const civilCourt= await page.evaluate(()=> document.body.innerText);

// fs.writeFile('civilCourt.json', JSON.stringify(civilCourt), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const migration= await page.evaluate(()=> document.body.innerText);

// fs.writeFile('migration.json', JSON.stringify(migration), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const laborCode= await page.evaluate(()=> document.body.innerText);

// fs.writeFile('laborCode.json', JSON.stringify(laborCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });


// const taxCode= await page.evaluate(()=> document.body.innerText);

// fs.writeFile('taxCode.json', JSON.stringify(taxCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const waterCode= await page.evaluate(()=> document.body.innerText);

// fs.writeFile('waterCode.json', JSON.stringify(waterCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });


// const forestCode= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('forestCode.json', JSON.stringify(forestCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const landCode= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('landCode.json', JSON.stringify(landCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const familyCode= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('familyCode.json', JSON.stringify(familyCode), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const criminalProcedure= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('criminalProcedure.json', JSON.stringify(criminalProcedure), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const executionOfPenalties= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('executionOfPenalties.json', JSON.stringify(executionOfPenalties), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const trading= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('trading.json', JSON.stringify(trading), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });


// const election= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('election.json', JSON.stringify(election), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const administrativeProcedure= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('administrativeProcedure.json', JSON.stringify(administrativeProcedure), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

// const customs= await page.evaluate(()=> document.body.innerText);
// fs.writeFile('customs.json', JSON.stringify(customs), (err) => {
//     if (err) throw err;
//     console.log('File saved');
// });

const urbanPlanning= await page.evaluate(()=> document.body.innerText);
fs.writeFile('urbanPlanning.json', JSON.stringify(urbanPlanning), (err) => {
    if (err) throw err;
    console.log('File saved');
});
await browser.close();
}

myFunc();