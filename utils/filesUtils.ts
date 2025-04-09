import { EmailTemplateName } from '@/types/emails.types';
import fs from 'fs';
import path from 'path';

export const getTemplate = (
  templateName: EmailTemplateName,
  replacements: Record<string, string>,
) => {
  const templatePath = path.join(
    process.cwd(),
    'config/emails/',
    `${templateName}.html`,
  );
  let template = fs.readFileSync(templatePath, 'utf-8');

  Object.entries(replacements).forEach(([key, value]) => {
    template = template.replace(`{{${key}}}`, value);
  });

  return template;
};
