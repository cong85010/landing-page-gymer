# Google Sheets Integration Setup Guide

This guide will help you connect the registration form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "GYMER - Registrations" (or any name you prefer)
4. In the first row, add these headers:
   - Column A: **Timestamp**
   - Column B: **Name**
   - Column C: **Phone**
   - Column D: **Goal**

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Format timestamp to Vietnam timezone
    var timestamp = new Date(data.timestamp);
    var vietnamTime = Utilities.formatDate(timestamp, "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

    // Append data to sheet
    sheet.appendRow([
      vietnamTime,
      data.name,
      data.phone,
      data.goal
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script is running!");
}
```

4. Click **Save** (disk icon) and name your project (e.g., "GYMER Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Form submission handler (optional)
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: You'll need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Your Next.js App

1. Open the `.env.local` file in your project root
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Restart your Next.js development server:

```bash
npm run dev
```

## Step 5: Test the Integration

1. Go to your landing page
2. Fill out the registration form
3. Submit the form
4. Check your Google Sheet - you should see a new row with the submitted data!

## Troubleshooting

### Form submits but data doesn't appear in sheet
- Make sure you deployed the script as "Anyone" can access
- Check the Apps Script execution logs: **Apps Script Editor** → **Executions**
- Verify the URL in `.env.local` is correct

### "Unauthorized" error
- Re-deploy the script and make sure to authorize it
- Check that "Execute as" is set to "Me"

### Data appears in wrong format
- Make sure your sheet headers match exactly: Timestamp, Name, Phone, Goal
- Check that the timezone in the script is correct (Asia/Ho_Chi_Minh)

## Optional: Email Notifications

If you want to receive email notifications when someone registers, use this code instead:

```javascript
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Format timestamp to Vietnam timezone
    var timestamp = new Date(data.timestamp);
    var vietnamTime = Utilities.formatDate(timestamp, "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

    // Append data to sheet
    sheet.appendRow([
      vietnamTime,
      data.name,
      data.phone,
      data.goal
    ]);

    // Send email notification
    // IMPORTANT: Replace with your email address!
    var recipientEmail = "your-email@gmail.com"; // ← CHANGE THIS!

    // Alternative: Use script owner's email (might not work in all cases)
    // var recipientEmail = ScriptApp.getOwner().getEmail();

    var subject = "GYMER - Có đăng ký mới: " + data.name;
    var message = "Bạn nhận được thông tin đăng ký mới!\n\n" +
                  "Tên: " + data.name + "\n" +
                  "Số điện thoại: " + data.phone + "\n" +
                  "Mục tiêu: " + data.goal + "\n" +
                  "Thời gian: " + vietnamTime + "\n\n" +
                  "Mở Google Sheet: " + ss.getUrl();

    // Send email
    MailApp.sendEmail(recipientEmail, subject, message);

    // Log for debugging
    Logger.log("Email sent to: " + recipientEmail);

    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved and email sent'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error
    Logger.log("Error: " + error.toString());

    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script is running!");
}
```

**IMPORTANT: You MUST change line 22:**
```javascript
var recipientEmail = "your-email@gmail.com"; // ← Put your actual email here!
```

**Why the original code didn't work:**
- `Session.getActiveUser().getEmail()` returns empty when running as a web app
- You need to either hardcode your email OR use `ScriptApp.getOwner().getEmail()`

**To check if emails are being sent:**
1. After deploying, submit a test form
2. In Apps Script editor: **View** → **Logs** or **Executions**
3. Look for "Email sent to: your-email@gmail.com"
4. Check your Gmail spam folder!

## Anti-Spam Protection

The landing page includes basic spam protection:

### Client-Side (Browser):
1. **Honeypot Field**: Hidden field that only bots fill
2. **Time-Based Validation**: Prevents instant form submissions (< 3 seconds)

### How It Works:
- User fills form → Takes time naturally → Submits → Data saved
- Bot tries to submit instantly → Blocked (< 3 seconds)
- Bot auto-fills all fields → Honeypot filled → Silently blocked

### Adjusting Settings:

**Change minimum fill time** (in `RegistrationSection.tsx`):
```javascript
if (timeSinceLoad < 3000) { // Change 3000 to desired milliseconds
```
For example, change to 5000 for 5 seconds minimum

## Security Notes

- The script URL is public but can only write to your sheet
- No one else can read data from your sheet unless you share it
- Anti-spam protection prevents most automated submissions
- The form uses CORS mode which is standard for Google Apps Script
- Consider adding reCAPTCHA for additional protection if needed

## Need Help?

If you encounter any issues:
1. Check the Apps Script execution logs
2. Verify all steps were followed correctly
3. Make sure the sheet is in the same Google account as the script
