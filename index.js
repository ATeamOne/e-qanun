const pptr=require('puppeteer');
const fs=require('fs');

async function myFunc(){
const browser=await pptr.launch();
const page=await browser.newPage();
await page.goto('https://e-qanun.az/');

await page.screenshot({path: 'e-qanun.png',fullPage:true});
await page.pdf({path: 'e-qanun.pdf',format:'A4'});

const html=await page.content();
console.log(html);

const title= await page.evaluate(()=>document.title);
console.log(title);

const text= await page.evaluate(()=> document.body.innerText);
console.log(text);

const links=await page.evaluate(()=>Array.from(document.querySelectorAll('a'),(e)=>e.href));
console.log(links);


const file = await page.$$eval('.Header-search__row  .Form', (elements) =>
elements.map((e) => ({
  title: e.querySelector('.Form-body div').innerText,
 
}))
);

console.log(file);
fs.writeFile('file.json', JSON.stringify(file), (err) => {
  if (err) throw err;
  console.log('File saved');
  });

// Save  **text** data to JSON file
// fs.writeFile('text.json', JSON.stringify(text), (err) => {
// if (err) throw err;
// console.log('File saved');
// });

// Save  **text** data to JSON file
// fs.writeFile('links.json', JSON.stringify(links), (err) => {
//   if (err) throw err;
//   console.log('File saved');
//   });
await browser.close();
}

myFunc();