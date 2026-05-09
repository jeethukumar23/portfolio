# Certificate Upload Instructions

## How to Add Your Salesforce Certificate

1. **Save your certificate PDF**
   - Download or save your Salesforce certificate as a PDF file

2. **Upload to this folder**
   - Place the PDF file in this directory (`/public/certificates/`)
   - Name it: `salesforce-certificate.pdf`

3. **The certificate will automatically appear**
   - When you visit the Certificates page, the PDF will be available for viewing and downloading

## Folder Structure
```
public/
└── certificates/
    └── salesforce-certificate.pdf  (Your PDF goes here)
```

## Example File Names
- `salesforce-certificate.pdf` - Salesforce Administrator Certificate
- Add more certificates as needed by updating the array in `src/components/Certificate.jsx`

## Viewing the Certificate Page

Once your PDF is uploaded:
1. Click on "Certificates" in the navigation menu
2. Or click the "View Credentials & Certificates" button on the Achievements section
3. You'll see a card with your certificate details
4. Click "View" to open the PDF in a new tab
5. Click "Download" to download the PDF to your device

## Customizing Certificate Details

To add or modify certificate information, edit `src/components/Certificate.jsx` and update the `certificates` array with your certificate details.
