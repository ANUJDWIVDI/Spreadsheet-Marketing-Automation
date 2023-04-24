function sendMarketingEmails() {
  var ss = SpreadsheetApp.openById('xxxxxxxx'); // Replace with your spreadsheet ID
  var sheet = ss.getSheetByName('Sheet1'); // Replace with the name of your sheet
  var data = sheet.getDataRange().getValues();
  var emailColumnIndex = 2; // Replace with the index of your email column (starting from 0)
  var subject = 'New Product Launch!';
  var message = 'Dear Customer,\n\nWe are excited to announce the launch of our new product. Visit our website to learn more!\n\nBest regards,\n[Your Name]';

  for (var i = 1; i < data.length; i++) {
    var emailAddress = data[i][emailColumnIndex];
    if (emailAddress != '') {
      GmailApp.sendEmail(emailAddress, subject, message);
    }
  }
}
