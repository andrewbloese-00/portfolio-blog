import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		stack: z.array(z.string()),
		thumbnail: z.string(),
		images: z.array(z.string()).optional(),
		git_link: z.string().optional(),
		deployment_link: z.string().optional(),
	}),
});



export const collections = { blog, project };

