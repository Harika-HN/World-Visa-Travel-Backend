const PdfTemplate = (citizen, dstCountry, Type) => {
  const htmlContent = `
  
    <html>
    <head>
      <style>
      body{
        margin:15px;
        
      }
      .h1-div{
       margin-top:130px;
      }
       table {
      border-collapse: collapse;
    font-size:10px;
    }
td,th {
  border: 1px solid black;
  padding: 10px 20px;
}
.grey-tr{
 background-color:#808080;
}
.thead-doc{
  text-decoration: underline;
}
.text-div-main{
  margin-top:10px;
}
.text-div{
  font-size:10px;
  margin:5px;
}
      </style>
    </head>
  <body>
  <div>
    <h5>${dstCountry} ${Type} – ${citizen} CITIZENS</h5>
  </div>
<table>
  <thead>
    <tr>
      <td class="thead-doc">Required Documents</td>
      <td></td>
    </tr>
  </thead>
   <tbody>
     <tr>
       <td class="grey-tr">Passport</td>
       <td>U.S. Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages.
For Additional Visa Pages and U.S. Passport Renewal.</td>
     </tr>
    <tr>
       <td class="grey-tr">Photo</td>
       <td>One passport-type photograph. Quality Requirements for Passport Book & Passport Card Photographs</td>
     </tr>
     <tr>
       <td class="grey-tr">Letter of Intent</td>
       <td>A letter of intent addressing to the Embassy of Afghanistan outlining the applicants
purpose of travel, length of stay, name of places to be visited, contact information and accommodation information in ${dstCountry}.</td>
     </tr>
     <tr>
       <td class="grey-tr">Previous Visa Copy</td>
       <td>A copy of your most recent ${dstCountry} Visa.</td>
     </tr>
     <tr>
       <td class="grey-tr">Proof of Departure</td>
       <td>A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent.</td>
     </tr>
     <tr>
       <td class="grey-tr">Application Form</td>
       <td>Download Visa Application
One completed Visa Application, MUST be notarized and signed.</td>
     </tr>
     <tr>
       <td class="grey-tr">WVT Work Order</td>
       <td>Please complete WVT Work Order Form. Download here
Payment can be processed with a credit card or a company/cashier check or money order.</td>
     </tr>
     <tr>
       <td class="grey-tr">Mail Your Documents</td>
       <td>Please mail the completed required documents to:<br>
World Visa Travel, Inc.<br>
1413 K Street, N.W.<br>
9th Floor<br>
Washington, D.C. 20005<br>
Telephone: (202) 289-6251</td>
     </tr>
  </tbody>
</table>
  <h5>CONSULAR FEES</h5>
 <table>
  <tr>
    <td><b>Entry</b></td>
    <td><b>Price</b></td>
    <td><b>Processing Time</b></td>
    <td><b>PMaximum Stay</b></td>
    <td><b>Valid</b></td>
  </tr>
  <tr>
    <td>Single</td>
    <td>$245.00</td>
    <td>4 Business Days</td>
    <td>Up to 30 days</td>
    <td>3 Months</td>
  </tr>
     <tr>
    <td>Single</td>
    <td>$165.00</td>
    <td>10 Business Days</td>
    <td>Up to 30 days</td>
    <td>3 Months</td>
  </tr>
</table>
  <div class="text-div-main">
    <div class="text-div">The fees above include a $5.00 check writing fee.<br></div>
    <div class="text-div">
      Consular fees are subject to change without notice.<br></div>
    <div class="text-div">
If there is any uncertainty, please give us a call to verify.<br></div><div class="text-div">
      Maximum Stay and Validity of Visa is dependent on the Embassy’s discretion.<br></div>
  </div>
   <h5 class="h1-div">WORLD VISA TRAVEL SERVICE FEES</h5>
  <table>
  <tr>
    <th>Price</th>
    <th>Processing Time</th>
  </tr>
  <tr>
    <td>$90.00</td>
    <td>10 Business Days</td>
  </tr>
  <tr>
    <td>$140.00</td>
    <td>4 Business Days</td>
  </tr>
</table>
  <h5>RETURN SHIPPING FEES</h5>
  <table>
  <tr>
    <th>FedEx Overnight</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Less than 3 passports</td>
    <td>$36.00</td>
  </tr>
   <tr>
    <td>4 or more passports</td>
    <td>$39.00</td>
  </tr>
       <tr>
    <td>Saturday Delivery</td>
    <td>$41.00</td>
  </tr>
</table>
</body>
    </html>
  `;
  return htmlContent;
};

module.exports = PdfTemplate;
