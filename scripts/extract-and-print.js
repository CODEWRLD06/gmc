const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

(async ()=>{
  try{
    const filePath = path.resolve(__dirname, '..', 'src', 'info', 'GMC BLUEPRINT.pdf');
    if(!fs.existsSync(filePath)){
      console.error('PDF not found at', filePath);
      process.exit(2);
    }
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const outPath = path.resolve(__dirname, '..', 'src', 'info', 'GMC_BLUEPRINT_extracted.txt');
    fs.writeFileSync(outPath, data.text, 'utf8');
    console.log('EXTRACTION_SUCCESS');
    console.log('Saved extracted text to:', outPath);
    console.log('---EXTRACTED_TEXT_START---');
    console.log(data.text);
    console.log('---EXTRACTED_TEXT_END---');
  }catch(err){
    console.error('EXTRACTION_ERROR', err);
    process.exit(1);
  }
})();
