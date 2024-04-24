import { API_KEY, BASE_URL } from '../models/constants';
import { RequestMethods } from '../models/enun';

export const createPDF = async (postData: string) => {
  try {
    /** In real project API_KEY and BASE_URl should live in .env file */
    const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}`, {
      method: RequestMethods.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postData }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.blob();

    const base64PdfData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });

    return base64PdfData as string;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};
