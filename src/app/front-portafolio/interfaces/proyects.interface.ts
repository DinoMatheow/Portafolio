export   interface Project {
  id: number;
  name: string;
  technologies: string[];  // Mejor que 'techNologys' para mantener consistencia
  description: string;
  githubUrl: string;      // Más específico que 'path'
  previewUrl?: string;    // URL opcional para la vista previa
  imageUrl: string;       // Para la imagen del proyecto
  features?: string[];    // Opcional: características principales
}