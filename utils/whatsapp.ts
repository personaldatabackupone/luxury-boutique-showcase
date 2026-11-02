/**
 * Utility to generate sanitized WhatsApp direct message URLs.
 */

interface ProductInquiryParams {
  phoneNumber: string;
  productName: string;
  sku: string;
  category?: string;
  price?: string;
}

interface GeneralInquiryParams {
  phoneNumber: string;
  brandName: string;
}

/**
 * Sanitizes phone numbers by stripping spaces, dashes, parentheses, and plus symbols.
 */
export const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/[^0-9]/g, '');
};

/**
 * Generates an inquiry link for a specific product item.
 * Output: https://wa.me/[phone]?text=Hi,%20I%20am%20interested%20in%20...
 */
export const getProductWhatsAppUrl = ({
  phoneNumber,
  productName,
  sku,
  category,
  price,
}: ProductInquiryParams): string => {
  const cleanNumber = sanitizePhoneNumber(phoneNumber);
  
  let message = `Hello! I am interested in viewing / purchasing:\n\n`;
  message += `• Product: *${productName}*\n`;
  message += `• SKU: *${sku}*\n`;
  if (category) message += `• Category: ${category}\n`;
  if (price) message += `• Price: ${price}\n\n`;
  message += `Could you please share availability, customization options, and styling details?`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a general store concierge / consultation booking link.
 */
export const getGeneralWhatsAppUrl = ({
  phoneNumber,
  brandName,
}: GeneralInquiryParams): string => {
  const cleanNumber = sanitizePhoneNumber(phoneNumber);
  const message = `Hello ${brandName} Concierge! I would like to book a styling consultation and inquire about your current collections.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};