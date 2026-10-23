/** Populate only with the professional's confirmed, publishable information. */
export const footerProfessionalDetails: {
  registration: { region: string; number: string } | null;
  vatNumber: string | null;
} = {
  registration: { region: "Lombardia", number: "22666" },
  vatNumber: "01747640199",
};
