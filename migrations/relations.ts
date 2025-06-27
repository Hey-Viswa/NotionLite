import { relations } from "drizzle-orm/relations";
import { products, prices, workspaces, folders, files, subscriptions } from "./schema";

export const pricesRelations = relations(prices, ({one, many}) => ({
	product: one(products, {
		fields: [prices.productId],
		references: [products.id]
	}),
	subscriptions: many(subscriptions),
}));

export const productsRelations = relations(products, ({many}) => ({
	prices: many(prices),
}));

export const foldersRelations = relations(folders, ({one, many}) => ({
	workspace: one(workspaces, {
		fields: [folders.workspacesId],
		references: [workspaces.id]
	}),
	files: many(files),
}));

export const workspacesRelations = relations(workspaces, ({many}) => ({
	folders: many(folders),
	files: many(files),
}));

export const filesRelations = relations(files, ({one}) => ({
	folder: one(folders, {
		fields: [files.folderId],
		references: [folders.id]
	}),
	workspace: one(workspaces, {
		fields: [files.workspacesId],
		references: [workspaces.id]
	}),
}));

export const subscriptionsRelations = relations(subscriptions, ({one}) => ({
	price: one(prices, {
		fields: [subscriptions.priceId],
		references: [prices.id]
	}),
}));