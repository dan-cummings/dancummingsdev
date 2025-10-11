import { defineCollection, z } from 'astro:content';
import { HygraphLoader } from '@hygraph/hygraph-astro-loader';

const pages = defineCollection({
	loader: HygraphLoader({
		endpoint: import.meta.env.HYGRAPH_ENDPOINT,
		fields: ['id', 'title', 'description', 'createdAt', 'slug', {'headerImage': ['url', 'width', 'height']}, {'content': ['markdown']}],
		operation: 'pages',
	}),
	schema: () =>
		z.object({
			id: z.string(),
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			createdAt: z.coerce.date(),
			headerImage: z.object({
				url: z.string(),
				width: z.number(),
				height: z.number(),
			}),
			content: z.object({
				markdown: z.string(),
			}),
		}),
});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: HygraphLoader({
		endpoint: import.meta.env.HYGRAPH_ENDPOINT,
		fields: ['id','title', 'description', 'createdAt', 'slug', {'headerImage': ['url', 'width', 'height']}, {'content': ['markdown']}],
		operation: 'blogPosts',
	}),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			id: z.string(),
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			// Transform string to Date object
			createdAt: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			headerImage: z.object({
				url: z.string(),
				width: z.number(),
				height: z.number(),
			}),
			content: z.object({
				markdown: z.string(),
			}),
		}),
});

export const collections = { blog, pages};
