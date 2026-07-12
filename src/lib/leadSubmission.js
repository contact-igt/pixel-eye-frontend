const WEBSITE_LEADS_ENDPOINT = "/api/v1/pixeleye/website-leads/register";
const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxNRDdmbe0CV8xYgZrXmYE1Dwzab4p5La8TfZQZJtxdR0L8u1bQk0xRu3qn7Quojl8F/exec";
const PRIVYR_ENDPOINT =
  "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/xKtkqD5A";

const getBaseUrl = () => process.env.NEXT_PUBLIC_PIXELEYE_API_BASE_URL;
const getClientKey = () => process.env.NEXT_PUBLIC_PIXELEYE_CLIENT_KEY;

const getUTMSource = () => {
  if (typeof window === "undefined") return "direct";
  return localStorage.getItem("utm_source") || "direct";
};

const getIpAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      throw new Error(`Failed to fetch IP address: ${response.status}`);
    }

    const data = await response.json();
    return data.ip || "";
  } catch (error) {
    console.error("IP address fetch failed", error);
    return "";
  }
};

const registerWebsiteLead = async ({ name, mobileNumber, service, ipAddress, utmSource }) => {
  const baseUrl = getBaseUrl();
  const clientKey = getClientKey();

  if (!baseUrl || !clientKey) {
    throw new Error("Pixel Eye website lead API environment variables are missing.");
  }

  const response = await fetch(`${baseUrl}${WEBSITE_LEADS_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Key": clientKey,
    },
    body: JSON.stringify({
      name,
      mobile_number: mobileNumber,
      service,
      ip_address: ipAddress,
      utm_source: utmSource,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Website lead registration failed with status ${response.status}: ${errorText}`,
    );
  }

  return response;
};

const pushLeadToGoogleSheet = async ({ name, mobileNumber, service, ipAddress, utmSource }) => {
  await fetch(GOOGLE_SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      PatientName: name,
      MobileNumber: mobileNumber,
      Service: service,
      IP_Address: ipAddress,
      utm_source: utmSource,
    }).toString(),
  });
};

const pushLeadToPrivyr = async ({ name, mobileNumber }) => {
  await fetch(PRIVYR_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone: `+91${mobileNumber}`,
      display_name: name,
      source: "Sanathnagar Landing Page",
    }),
  });
};

export const submitWebsiteLead = async ({ formData, emailjs }) => {
  const payload = {
    name: formData.PatientName.trim(),
    mobileNumber: formData.MobileNumber,
    service: formData.Service,
    ipAddress: await getIpAddress(),
    utmSource: getUTMSource(),
  };

  await registerWebsiteLead(payload);
  await pushLeadToGoogleSheet(payload);

  const secondaryResults = await Promise.allSettled([
    pushLeadToPrivyr(payload),
    emailjs.send(
      "service_9ka2q7j",
      "template_88icron",
      {
        patient_name: payload.name,
        mobile_number: payload.mobileNumber,
        service_name: payload.service,
        email_subject: "New Appointment Inquiry - Pixel Eye Hospitals",
        from_name: "Pixel Eye Hospitals",
        from_email: "info@pixeleyehospitals.com",
      },
      "CNcEBk9-YnTm2Zwor",
    ),
  ]);

  secondaryResults.forEach((result, index) => {
    if (result.status === "rejected") {
      const source = index === 0 ? "Privyr" : "EmailJS";
      console.error(`${source} submission failed`, result.reason);
    }
  });
};
