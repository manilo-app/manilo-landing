export interface Bank {
  slug: string;
  name: string;
  country: string;
  pdf: string[];
  csv: string[];
}

export const BANKS: Bank[] = [
  {
    slug: 'chase',
    name: 'Chase',
    country: 'United States',
    pdf: [
      'Sign in to chase.com or open the Chase Mobile app and pick the account.',
      'Open "Statements & documents", choose the month you want, and download the PDF.',
    ],
    csv: [
      'On chase.com, open the account and go to its activity list.',
      'Use the download option, pick a date range and the CSV (spreadsheet) format, then save the file.',
    ],
  },
  {
    slug: 'bank-of-america',
    name: 'Bank of America',
    country: 'United States',
    pdf: [
      'Sign in at bankofamerica.com or in the Mobile Banking app and select the account.',
      'Open "Statements & Documents", choose a statement period, and download the PDF.',
    ],
    csv: [
      'On the website, open the account\'s activity and look for the "Download" link.',
      'Pick a date range and a spreadsheet format (CSV or Excel), then save the file.',
    ],
  },
  {
    slug: 'american-express',
    name: 'American Express',
    country: 'United States',
    pdf: [
      'Sign in at americanexpress.com and open "Statements & Activity" for the card.',
      'Choose a billing period and download the statement as PDF.',
    ],
    csv: [
      'Under "Statements & Activity", open the transactions view and pick a period.',
      'Use the download option and choose CSV or Excel, then save the file.',
    ],
  },
  {
    slug: 'capital-one',
    name: 'Capital One',
    country: 'United States',
    pdf: [
      'Sign in at capitalone.com or in the Capital One Mobile app and select the account.',
      'Open the statements section, pick a month, and download the PDF.',
    ],
    csv: [
      'On the account page, open the transactions list and look for the download option.',
      'Choose a date range and the CSV format, then save the file.',
    ],
  },
  {
    slug: 'wells-fargo',
    name: 'Wells Fargo',
    country: 'United States',
    pdf: [
      'Sign in at wellsfargo.com or in the Wells Fargo Mobile app and choose the account.',
      'Open "Statements & Documents", pick a statement period, and download the PDF.',
    ],
    csv: [
      'On the website, open the account activity and choose the download option.',
      'Pick a date range and a spreadsheet format (CSV), then save the file.',
    ],
  },
  {
    slug: 'revolut',
    name: 'Revolut',
    country: 'United Kingdom / EU',
    pdf: [
      'Open the Revolut app and tap the account you want to export.',
      'Look for "Statement" (under the account options or documents), pick a period, and choose PDF.',
    ],
    csv: [
      'In the same statement screen, choose the spreadsheet format (Excel or CSV) instead of PDF.',
      'Generate the file and save or share it to your device.',
    ],
  },
  {
    slug: 'n26',
    name: 'N26',
    country: 'Germany / EU',
    pdf: [
      'Open the N26 app and go to your account or profile section.',
      'Open "Statements", pick a month, and download the PDF.',
    ],
    csv: [
      'Sign in to the N26 web app in a browser and open the account.',
      'Use the export / download option, choose a date range and the CSV format, then save the file.',
    ],
  },
  {
    slug: 'wise',
    name: 'Wise',
    country: 'United Kingdom / global',
    pdf: [
      'Open Wise (app or wise.com) and select the balance or account you want to export.',
      'Open "Statements and reports", pick a date range, choose PDF, and download.',
    ],
    csv: [
      'In "Statements and reports", pick the same date range and choose CSV (or Excel).',
      'Generate the file and save it to your device.',
    ],
  },
];
