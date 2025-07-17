// Détection de l'environnement pour définir le chemin correct de l'image
export const getImagePath = (filename: string) => {
  // Supprime le slash final éventuel de BASE_URL (ex: "/copy_Ingeris/")
  // @ts-ignore - import.meta.env est injecté par Vite et peut ne pas être reconnu par le compilateur strict
  const baseUrl = (import.meta as any).env.BASE_URL.endsWith('/')
    ? (import.meta as any).env.BASE_URL.slice(0, -1)
    : (import.meta as any).env.BASE_URL;

  // Supprime le slash initial éventuel du nom de fichier
  const cleanedFilename = filename.startsWith('/') ? filename.slice(1) : filename;

  return `${baseUrl}/${cleanedFilename}`;
};