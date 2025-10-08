import { defineField, defineType } from "sanity"

export default defineType({
  name: "resource",
  title: "Recurso",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contact",
      title: "Contacto",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Teléfono", type: "string" },
        { name: "whatsapp", title: "WhatsApp", type: "string" },
      ],
    }),
    defineField({
      name: "website",
      title: "Sitio Web",
      type: "url",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
    }),
    defineField({
      name: "mapsUrl",
      title: "Link Google Maps",
      type: "url",
    }),
    defineField({
      name: "socialMedia",
      title: "Redes Sociales",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "tiktok", title: "TikTok", type: "url" },
      ],
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description:
        "Ejemplos: comida saludable, terapia, introspección, vegano, domicilios",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "active",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isOnline",
      title: "Es virtual",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isFree",
      title: "Es gratis",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "cost",
      title: "Costo",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "logo",
    },
  },
})
