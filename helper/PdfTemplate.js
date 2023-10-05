const PdfTemplate = (citizen, dstCountry, Type) => {
  const htmlContent = `


  <!DOCTYPE html>
  <html>
  <head>
      <title>PDF Template</title>
  </head>
  <body>
      <h1>User Data</h1>
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
  </body>
  </html>
  `;
  return htmlContent;
};

module.exports = PdfTemplate;
